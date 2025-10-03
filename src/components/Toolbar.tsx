import { FaFileUpload, FaSave } from 'react-icons/fa';

interface ToolbarProps {
  onLoadFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveFile: () => void;
  onSaveToApi: () => void;
  onLoadFromApi: () => void;
  isLoading: boolean;
}

export function Toolbar({ onLoadFile, onSaveFile, onSaveToApi, onLoadFromApi, isLoading }: ToolbarProps) {
  return (
    <header className="bg-gray-800 text-white p-2 flex items-center space-x-4">
      <h1 className="text-lg font-bold">Markdown Previewer</h1>
      <div className="flex items-center space-x-2">
        <label htmlFor="file-upload" className="cursor-pointer p-2 rounded hover:bg-gray-700">
          <FaFileUpload />
          <input id="file-upload" type="file" accept=".md" className="hidden" onChange={onLoadFile} />
        </label>
        <button onClick={onSaveFile} className="p-2 rounded hover:bg-gray-700" aria-label="Save file">
          <FaSave />
              </button>
        <button onClick={onSaveToApi} disabled={isLoading} className="p-2 rounded hover:bg-gray-700" aria-label="Save to API">
          Save to API
        </button>
        <button onClick={onLoadFromApi} disabled={isLoading} className="p-2 rounded hover:bg-gray-700" aria-label="Load from API">
          Load from API
        </button>
        {isLoading && <span className="text-sm animate-pulse">Processing...</span>}
      </div>
    </header>
  );
}