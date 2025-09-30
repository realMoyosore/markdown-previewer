// import { useState } from 'react';
// import { marked } from 'marked';

// const defaultMarkdown = `
// # Welcome to my React Markdown Previewer!

// ## This is a sub-heading...
// ### And here's some other cool stuff:
// `;

// export function MarkdownEditor() {
//   const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

//   const getMarkdownText = () => {
//     const rawMarkup = marked(markdown, { breaks: true, gfm: true });
//     return { __html: rawMarkup };
//   };

//   return (
//     <main className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Editor</h2>
//         <textarea
//           value={markdown}
//           onChange={(e) => setMarkdown(e.target.value)}
//           className="w-full h-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white"
//           aria-label="Markdown Input"
//         />
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Preview</h2>
//         <div
//           id="preview"
//           dangerouslySetInnerHTML={getMarkdownText()}
//           className="prose dark:prose-invert w-full h-full p-2 border rounded-md bg-white dark:bg-gray-800"
//           aria-label="Markdown Preview"
//         />
//       </div>
//     </main>
//   );
// }



import { useState } from 'react';
import { marked } from 'marked';
import CodeMirror from '@uiw/react-codemirror';
import { markdown as markdownLang } from '@codemirror/lang-markdown';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { Toolbar } from './Toolbar';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
`;

export function MarkdownEditor() {
    const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
    
    const handleFileLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setMarkdown(text);
      };
      reader.readAsText(file);
    }
    };
    
    const handleFileSave = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true, gfm: true });
    return { __html: rawMarkup };
  };

    return (
        <div>
            <Toolbar onLoadFile={handleFileLoad} onSaveFile={handleFileSave} />
    <main className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full md:w-1/2">
        {/* The CodeMirror component replaces the textarea */}
        <CodeMirror
          value={markdown}
          height="100vh"
          theme={okaidia}
          extensions={[markdownLang()]}
          onChange={(value) => setMarkdown(value)}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
          }}
        />
      </div>
      <div className="w-full md:w-1/2 p-4 overflow-y-auto"> {/* Added overflow-y-auto */}
        <div
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
          className="prose dark:prose-invert"
        />
      </div>
            </main>
            </div>
  );
}