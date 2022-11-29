import { ViewerProps } from "@toast-ui/react-editor";
import { NextPage } from "next";
import dynamic from "next/dynamic";

interface IViewer {
  data: string;
}

const Viewer = dynamic<ViewerProps>(
  () => import("@toast-ui/react-editor").then((m) => m.Viewer),
  { ssr: false }
);

const EditorViewer: NextPage<IViewer> = ({ data }) => {
  return <Viewer initialValue={data} />;
};

export default EditorViewer;
