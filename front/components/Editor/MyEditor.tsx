import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import "tui-color-picker/dist/tui-color-picker.css";

interface EditorType {
  pageName: string;
}

const WysiwygEditor: NextPage<EditorType> = ({ pageName }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { notice } = useSelector((state: RootState) => state.notice);

  const setData = useCallback(
    (a: any, b: any) => {
      return pageName === "create" ? a : b;
    },
    [pageName]
  );

  const dispatch = useAppDispatch();

  const title = useInput(setData("", notice.title));
  const date = useInput(setData("", notice.date));
  const location = useInput(setData("", notice.location));

  const editorRef = useRef<Editor>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  const router = useRouter();

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
            location: location.value,
            date: date.value,
          }),
          noticeActions.updateNoticeReq({
            id: noticeId,
            title: title.value,
            content,
            location: location.value,
            date: date.value,
          })
        )
      );
    },
    [setData, router, user, title, date, location, dispatch]
  );

  return (
    <div className="w-default p-24 h-fit shadow-md">
      <div className="font-josefin text-[32px] font-bold text-center mb-4">
        {setData("Create Notice", "Updating Notice")}
      </div>
      <div className="text-[#9096b2] text-[17px] font-lato mb-10 text-center">
        Please notice detail bellow.
      </div>
      <input
        className="w-full h-12 px-3 py-0 border border-solid border-[#dadde6] outline-none mb-3 rounded-3"
        type="text"
        name="title"
        placeholder="Enter the Title."
        {...title}
      />

      <div className="w-full h-12 mb-3 flex justify-between gap-2">
        <input
          className="w-4/5 h-full text-[13px] flex justify-center flex-col text-[#757575] px-3 py-0 border border-solid border-[#dadde6] outline-none rounded-3"
          placeholder="위치를 입력해주세요."
          {...location}
        />
        <input
          className="w-1/5 h-full px-3 py-0 border border-solid border-[#dadde6] outline-none rounded-3"
          type="date"
          {...date}
        />
      </div>

      <Editor
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
