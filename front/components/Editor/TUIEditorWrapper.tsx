import { Editor, EditorProps } from "@toast-ui/react-editor";
import React from "react";

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

export default (props: TuiEditorWithForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} />
);
