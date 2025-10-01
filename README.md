# React Markdown Previewer

A comprehensive Markdown Preview application built with React, TypeScript, and Tailwind CSS. It features real-time rendering, syntax highlighting, file operations, and persistence.

## Features

- **Real-time Preview**: See your rendered HTML update as you type.
- **Syntax Highlighting**: A professional editor experience powered by CodeMirror.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **File Operations**: Upload `.md` files from your local machine and save your work.
- **Local Storage**: Your work is automatically saved in your browser.
- **API Integration**: Save and load your content from a remote server.
- **Error Handling**: A robust app with a custom Error Boundary and 404 page.

## Technology Stack

- **Framework**: React 19+ (with Hooks)
- **Language**: TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Markdown Parsing**: `marked.js`
- **Syntax Highlighting**: CodeMirror (`@uiw/react-codemirror`)
- **Icons**: `react-icons`

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/realMoyosore/markdown-previewer.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd markdown-previewer
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the project files.
- **`npm run preview`**: Serves the production build locally.

## Future Improvements

- [ ] Implement a proper backend service instead of a placeholder API.
- [ ] Add user authentication for saving/loading personal documents.
- [ ] Add more editor themes and customization options.
