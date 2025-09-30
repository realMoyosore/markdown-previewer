// src/components/MarkdownEditor.tsx
import { useState } from 'react';
import { marked } from 'marked';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
`;

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

  const getMarkdownText = () => {
    // IMPORTANT: Use a sanitizer library like DOMPurify in a real-world app
    // to prevent XSS attacks if the content is not user-controlled.
    // For this project, since users are only previewing their OWN text,
    // it's a lower risk.
    const rawMarkup = marked(markdown, { breaks: true, gfm: true });
    return { __html: rawMarkup };
  };

  return (
    <main className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Editor</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white"
          aria-label="Markdown Input"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
          className="prose dark:prose-invert w-full h-full p-2 border rounded-md bg-white dark:bg-gray-800"
          aria-label="Markdown Preview"
        />
      </div>
    </main>
  );
}