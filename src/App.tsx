// import { MarkdownEditor } from './components/MarkdownEditor';

// function App() {
//   return <MarkdownEditor />;
// }

// export default App;


// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorTestPage from './pages/ErrorTestPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/error-test" element={<ErrorTestPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;