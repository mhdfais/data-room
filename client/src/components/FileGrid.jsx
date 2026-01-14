import { useState, useEffect, useRef } from "react";
import ContextMenu from "./ContextMenu";

const FileGrid = ({ files, onFileUpload }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const justOpenedRef = useRef(false);
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close menu on outside click / esc
  useEffect(() => {
    if (!contextMenu) return;

    const close = () => setContextMenu(null);
    const handleClick = (e) => {
      // Ignore the first click after opening (browser behavior)
      if (justOpenedRef.current) {
        justOpenedRef.current = false;
        return;
      }
      // Don't close if clicking on the context menu itself
      if (e.target.closest(".context-menu")) return;
      close();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    // Add listeners after a short delay
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClick, true);
    }, 100);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contextMenu]);

  const onRightClick = (e, file) => {
    e.preventDefault();
    e.stopPropagation();
    justOpenedRef.current = true;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContextMenu({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        file,
      });
    }
  };

  const handleAddFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0 && onFileUpload) {
      onFileUpload(Array.from(selectedFiles));
    }
    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  return (
    <div
      ref={containerRef}
      className="mx-10 mt-4 bg-gray-100 rounded-sm flex-1 overflow-hidden relative"
    >
      {/* FILE LIST */}
      <div
        className="h-full px-5 py-4 overflow-y-auto flex flex-wrap gap-6"
        style={{ scrollbarWidth: "none" }}
      >
        {files &&
          files.map((file) => (
            <div
              key={file.id}
              onContextMenu={(e) => onRightClick(e, file)}
              className="text-center flex flex-col items-center cursor-pointer select-none"
            >
              <svg
                width="40"
                height="50"
                viewBox="0 0 69 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.8359 22.7891L45.9609 0.914064C45.6705 0.623956 45.3258 0.393912 44.9464 0.237075C44.567 0.0802369 44.1605 -0.000321831 43.75 9.66245e-07H6.25C4.5924 9.66245e-07 3.00268 0.658481 1.83058 1.83058C0.65848 3.00269 0 4.5924 0 6.25V75C0 76.6576 0.65848 78.2473 1.83058 79.4194C3.00268 80.5915 4.5924 81.25 6.25 81.25H62.5C64.1576 81.25 65.7473 80.5915 66.9194 79.4194C68.0915 78.2473 68.75 76.6576 68.75 75V25C68.7503 24.5895 68.6698 24.183 68.5129 23.8036C68.3561 23.4242 68.126 23.0795 67.8359 22.7891ZM43.75 25V7.8125L60.9375 25H43.75Z"
                  fill="#11B0FF"
                />
              </svg>

              <p className="text-xs font-medium mt-2">{file.name}</p>
              <p className="text-[10px] text-gray-400">{file.date}</p>
            </div>
          ))}

        {/* Add file */}
        <div
          onClick={handleAddFileClick}
          className="text-center cursor-pointer relative"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept="*/*"
          />
          <p className="absolute left-3 top-3 text-white font-bold text-xl">
            +
          </p>
          <svg
            width="40"
            height="50"
            viewBox="0 0 69 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.8359 22.7891L45.9609 0.914064C45.6705 0.623956 45.3258 0.393912 44.9464 0.237075C44.567 0.0802369 44.1605 -0.000321831 43.75 9.66245e-07H6.25C4.5924 9.66245e-07 3.00268 0.658481 1.83058 1.83058C0.65848 3.00269 0 4.5924 0 6.25V75C0 76.6576 0.65848 78.2473 1.83058 79.4194C3.00268 80.5915 4.5924 81.25 6.25 81.25H62.5C64.1576 81.25 65.7473 80.5915 66.9194 79.4194C68.0915 78.2473 68.75 76.6576 68.75 75V25C68.7503 24.5895 68.6698 24.183 68.5129 23.8036C68.3561 23.4242 68.126 23.0795 67.8359 22.7891ZM43.75 25V7.8125L60.9375 25H43.75Z"
              fill="#112635"
            />
          </svg>
        </div>
      </div>

      {/* CONTEXT MENU */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          file={contextMenu.file}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
};

export default FileGrid;
