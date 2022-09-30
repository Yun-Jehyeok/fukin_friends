import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { useCallback, useRef, useState } from "react";
import { NextPage } from "next";
import {
  CreateNoticeDesc,
  CreateNoticeTitle,
  DateInput,
  EditorButton,
  LocationInput,
  LocationModal,
  LocDateCont,
  ModalCloseBtn,
  TitleInput,
} from "./style";
import { useStringInput } from "hooks/useInput";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { useAppDispatch } from "hooks/reduxHooks";
import { noticeActions } from "src/store/reducers/noticeReducer";
import DaumPostcode from "react-daum-postcode";

const WysiwygEditor: NextPage = () => {
  const [locationData, setLocationData] = useState("위치를 입력해주세요.");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const title = useStringInput("");
  const date = useStringInput("");

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

  const selectAddress = (data: any) => {
    setIsModalOpen(false);
    setLocationData(data.address);
  };

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const content = editorRef.current?.getInstance().getMarkdown() || "";

      dispatch(
        noticeActions.createNoticeRequest({
          userId: user.id,
          title: title.value,
          content,
          location: locationData,
          date: date.value,
        })
      );
    },
    [user, title, date, locationData, dispatch]
  );

  return (
    <div>
      <CreateNoticeTitle>Create Notice</CreateNoticeTitle>
      <CreateNoticeDesc>Please notice detail bellow.</CreateNoticeDesc>
      <TitleInput
        type="text"
        name="title"
        placeholder="제목을 입력해주세요."
        {...title}
      />

      <LocDateCont>
        <LocationInput
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {locationData}
        </LocationInput>
        <DateInput type="date" {...date} />
      </LocDateCont>

      <Editor
        ref={editorRef}
        initialValue=" "
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        height="500px"
        theme={""}
        usageStatistics={false}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax]}
      />
      <EditorButton onClick={onSubmit}>Write</EditorButton>

      <LocationModal isOpen={isModalOpen}>
        <ModalCloseBtn
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div>X</div>
        </ModalCloseBtn>
        <DaumPostcode
          onComplete={selectAddress}
          autoClose={true}
          defaultQuery=""
        />
      </LocationModal>
    </div>
  );
};

export default WysiwygEditor;
