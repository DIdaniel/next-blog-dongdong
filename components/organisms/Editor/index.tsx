import dynamic from "next/dynamic";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// https://uiwjs.github.io/react-md-editor/

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type EditorProps = {
  style: any;
};

export const Editor = (props: EditorProps) => {
  /** Property */
  const { ...others } = props;
  const [value, setValue] = useState("**Hello world!!!**");

  const str = `
    ### Preview Markdown

    [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-preview-markdown-vrucl?fontsize=14&hidenavigation=1&theme=dark)

    \`\`\`jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import MDEditor from '@uiw/react-md-editor';

    export default function App() {
      return (
        <div className="container">
          <MDEditor.Markdown source="Hello Markdown!" />
        </div>
      );
    }
    \`\`\`
`;
  /** Function */

  /** Render */
  return (
    <MDEditor
      value={value}
      onChange={() => setValue}
      style={{
        width: `${others.style["width"]}`,
        height: `${others.style["height"]}`,
        boxShadow: `${others.style["boxShadow"]}`,
      }}
    />
  );
};
