# Markdown Previewer

Markdown Previewer is a browser-based Markdown editor that provides a seamless, side-by-side live preview of your rendered document. Built with a modern tech stack, this project demonstrates advanced frontend engineering principles, including real-time rendering, robust error handling, local and remote data persistence, and a strong commitment to accessibility.

## Live Demo

[Markdown Previewer]()

## About The Project

This application was developed to showcase proficiency in building modern, interactive, and resilient web applications using React. It goes beyond a simple text-to-HTML converter by integrating a professional-grade editor, file system interactions, and data persistence strategies, all wrapped in a clean, responsive, and accessible user interface.

The primary goal is to provide users with an intuitive and efficient tool for writing and previewing Markdown, whether for note-taking, documentation, or content creation.

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

---
An AltSchool Africa Project - Designed by [Moyosore Sulola](https://www.linkedin.com/in/moyosore-sulola/)
