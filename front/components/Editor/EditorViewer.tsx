import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { NextPage } from "next";
import "tui-color-picker/dist/tui-color-picker.css";

interface IViewer {
  data: string;
}

const EditorViewer: NextPage<IViewer> = ({ data }) => {
  return <Viewer initialValue={data} />;
};

export default EditorViewer;
