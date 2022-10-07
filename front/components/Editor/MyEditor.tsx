import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { useCallback, useRef } from "react";
import { NextPage } from "next";
import {
  CreateNoticeDesc,
  CreateNoticeTitle,
  DateInput,
  EditorButton,
  LocationInput,
  LocDateCont,
  TitleInput,
} from "./style";
import { useStringInput } from "hooks/useInput";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { useAppDispatch } from "hooks/reduxHooks";
import { noticeActions } from "src/store/reducers/noticeReducer";
import { useRouter } from "next/router";

type EditorType = {
  pageName: string;
};

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

  const title = useStringInput(setData("", notice.title));
  const date = useStringInput(setData("", notice.date));
  const location = useStringInput(setData("", notice.location));

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
          noticeActions.createNoticeRequest({
            userId: user.id,
            title: title.value,
            content,
            location: location.value,
            date: date.value,
          }),
          noticeActions.updateNoticeRequest({
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
    <div>
      <CreateNoticeTitle>
        {setData("Create Notice", "Updating Notice")}
      </CreateNoticeTitle>
      <CreateNoticeDesc>
        {setData(
          "Please notice detail bellow.",
          "Please notice detail bellow."
        )}
      </CreateNoticeDesc>
      <TitleInput
        type="text"
        name="title"
        placeholder="제목을 입력해주세요."
        {...title}
      />

      <LocDateCont>
        <LocationInput placeholder="위치를 입력해주세요." {...location} />
        <DateInput type="date" {...date} />
      </LocDateCont>

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
      <EditorButton onClick={onSubmit}>{setData("Write", "Edit")}</EditorButton>
    </div>
  );
};

export default WysiwygEditor;
