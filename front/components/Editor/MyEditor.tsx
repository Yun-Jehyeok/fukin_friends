import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as EditorT, EditorProps } from "@toast-ui/react-editor";
import { DatePicker, DatePickerProps } from "antd";
import { useAppDispatch } from "hooks/reduxHooks";
import moment from "moment";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import "tui-color-picker/dist/tui-color-picker.css";
import { TuiEditorWithForwardedProps } from "./TUIEditorWrapper";

interface EditorType {
  pageName: string;
}
interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import("./TUIEditorWrapper"),
  { ssr: false }
);
const EditorWithForwardedRef = React.forwardRef<
  EditorT | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorT>} />
));

const dateFormat = "YYYY-MM-DD";

const WysiwygEditor: NextPage<EditorType> = ({ pageName }) => {
  const editorRef = useRef<EditorT>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol"],
    ["scrollSync"],
  ];

  const setData = useCallback(
    (a: any, b: any) => {
      return pageName === "create" ? a : b;
    },
    [pageName]
  );

  const { user } = useSelector((state: RootState) => state.user);
  const { notice } = useSelector((state: RootState) => state.notice);

  const [value, setValue] = useState({
    title: setData("", notice.title),
    detailLocation: setData("", notice.detailLocation),
    date: setData("", notice.date.slice(0, 10)),
  });
  const [location, setLocation] = useState(setData("", notice.location));
  const [isImportant, setIsImportant] = useState(
    setData(false, notice.isImportant)
  );

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (pageName !== "create") {
      let noticeId = router.query.noticeId as string;
      dispatch(noticeActions.loadNoticeReq({ noticeId: noticeId }));
    }
  }, [router, dispatch]);

  useEffect(() => {
    setLocation(setData("", notice.location));
    setValue({
      ...value,
      title: setData("", notice.title),
      detailLocation: setData("", notice.detailLocation),
      date: setData("", notice.date.slice(0, 10)),
    });
    setIsImportant(setData(false, notice.isImportant));
  }, [notice]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setLocation(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let noticeId = router.query.noticeId as string;

      const content = editorRef.current?.getInstance().getMarkdown() || "";

      dispatch(
        setData(
          noticeActions.createNoticeReq({
            userId: user.id,
            title: value.title,
            content,
            location: location,
            detailLocation: value.detailLocation,
            date: value.date.value,
            isImportant,
          }),
          noticeActions.updateNoticeReq({
            id: noticeId,
            title: value.title,
            content,
            location: location,
            detailLocation: value.detailLocation,
            date: value.date.value,
            isImportant,
          })
        )
      );
    },
    [setData, router, user, value, location, isImportant, dispatch]
  );

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setValue({ ...value, date: dateString });
  };

  return (
    <div className="w-default p-24 h-fit shadow-editor">
      <div className="font-josefin text-[32px] font-bold text-center mb-4">
        {setData("Create Notice", "Updating Notice")}
      </div>
      <div className="text-[#9096b2] text-[17px] font-lato mb-10 text-center">
        Please notice detail below.
      </div>
      <input
        className="w-full h-12 px-3 py-0 border border-inputcolor outline-none mb-3 rounded-3 focus:outline-none focus:ring-0 focus:border-inputcolor"
        type="text"
        name="title"
        placeholder="Enter the Title."
        value={value.title}
        onChange={onChange}
      />

      <div className="w-full h-12 mb-3 flex justify-between gap-2">
        <button
          onClick={handleClick}
          className="w-1/2 h-full flex justify-center flex-col text-[#757575] px-3 py-0 border border-inputcolor outline-none rounded-3"
        >
          {location !== "" ? location : "Enter the Location."}
        </button>
        <input
          className="w-1/2 h-full px-3 py-0 border border-inputcolor outline-none rounded-3 focus:outline-none focus:ring-0 focus:border-inputcolor"
          type="text"
          name="detailLocation"
          placeholder="Enter the Detail Location."
          value={value.detailLocation}
          onChange={onChange}
        />
      </div>

      <div className="flex gap-2 mb-3">
        <DatePicker
          onChange={onChangeDate}
          defaultValue={setData(
            moment(new Date()),
            moment(notice.date.slice(0, 10))
          )}
          className="w-4/5 h-12 rounded-3 hover:border-inputcolor border-inputcolor"
        />
        <div className="w-1/5 h-12 rounded-3 border-inputcolor border px-3 flex justify-between">
          <div className="h-full flex justify-center flex-col font-lato">
            Is Important?
          </div>
          <div className="h-full flex flex-col justify-center">
            <div
              className={`w-5 h-5 rounded-3 border border-inputcolor cursor-pointer ${
                isImportant
                  ? "bg-center bg-no-repeat bg-check bg-basered border-none"
                  : ""
              }`}
              onClick={() => setIsImportant(!isImportant)}
            ></div>
          </div>
        </div>
      </div>

      <EditorWithForwardedRef
        ref={editorRef}
        initialValue={setData(" ", notice.content)}
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        height="500px"
        theme={""}
        usageStatistics={false}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax]}
      />
      <button
        className="w-full h-12 border-none outline-none text-white bg-basered rounded-3 font-bold text-[17px] font-lato mt-5 cursor-pointer hover:bg-hoverred"
        onClick={onSubmit}
      >
        {setData("Write", "Edit")}
      </button>
    </div>
  );
};

export default WysiwygEditor;
