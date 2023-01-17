import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as EditorT, EditorProps } from "@toast-ui/react-editor";
import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import "tui-color-picker/dist/tui-color-picker.css";

import { useDaumPostcodePopup } from "react-daum-postcode";
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

const WysiwygEditor: NextPage<EditorType> = ({ pageName }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { notice } = useSelector((state: RootState) => state.notice);

  const setData = useCallback(
    (a: any, b: any) => {
      return pageName === "create" ? a : b;
    },
    [pageName]
  );

  const [location, setLocation] = useState(setData("", notice.location));
  const [title, setTitle] = useState(setData("", notice.title));
  const [date, setDate] = useState(setData("", notice.date.slice(0, 10)));

  const dispatch = useAppDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setTitle(value);
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setDate(value);
  };

  const router = useRouter();

  useEffect(() => {
    if (pageName !== "create") {
      let noticeId = router.query.noticeId as string;
      dispatch(noticeActions.loadNoticeReq({ noticeId: noticeId }));
    }
  }, [router, dispatch]);

  useEffect(() => {
    setLocation(setData("", notice.location));
    setTitle(setData("", notice.title));
    setDate(setData("", notice.date.slice(0, 10)));
  }, [notice]);

  const editorRef = useRef<EditorT>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["scrollSync"],
  ];

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let noticeId = router.query.noticeId as string;

      const content = editorRef.current?.getInstance().getMarkdown() || "";

      dispatch(
        setData(
          noticeActions.createNoticeReq({
            userId: user.id,
            title: title.value,
            content,
            location: location,
            date: date.value,
          }),
          noticeActions.updateNoticeReq({
            id: noticeId,
            title: title.value,
            content,
            location: location,
            date: date.value,
          })
        )
      );
    },
    [setData, router, user, title, date, location, dispatch]
  );

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

  return (
    <div className="w-default p-24 h-fit shadow-editor">
      <div className="font-josefin text-[32px] font-bold text-center mb-4">
        {setData("Create Notice", "Updating Notice")}
      </div>
      <div className="text-[#9096b2] text-[17px] font-lato mb-10 text-center">
        Please notice detail below.
      </div>
      <input
        className="w-full h-12 px-3 py-0 border border-solid border-[#dadde6] outline-none mb-3 rounded-3"
        type="text"
        name="title"
        placeholder="Enter the Title."
        value={title}
        onChange={onChangeTitle}
      />

      <div className="w-full h-12 mb-3 flex justify-between gap-2">
        <button
          onClick={handleClick}
          className="w-4/5 h-full flex justify-center flex-col text-[#757575] px-3 py-0 border border-solid border-[#dadde6] outline-none rounded-3"
        >
          {location !== "" ? location : "Enter the Location."}
        </button>
        <input
          className="w-1/5 h-full px-3 py-0 border border-solid border-[#dadde6] outline-none rounded-3"
          type="date"
          value={date}
          onChange={onChangeDate}
        />
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
