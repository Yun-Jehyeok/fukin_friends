import { Viewer as ViewerT, ViewerProps } from "@toast-ui/react-editor";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { TuiViewerWithForwardedProps } from "./TUIViewerWrapper";

interface IViewer {
  data: string;
}

interface ViewerPropsWithHandlers extends ViewerProps {
  onChange?(value: string): void;
}

const Viewer = dynamic<TuiViewerWithForwardedProps>(
  () => import("./TUIViewerWrapper"),
  { ssr: false }
);
const ViewerWithForwardedRef = React.forwardRef<
  ViewerT | undefined,
  ViewerPropsWithHandlers
>((props, ref) => (
  <Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerT>} />
));

const EditorViewer: NextPage<IViewer> = ({ data }) => {
  return <ViewerWithForwardedRef initialValue={data} />;
};

export default EditorViewer;
