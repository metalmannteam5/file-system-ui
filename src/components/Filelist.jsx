// components/FileList.js
import React from 'react';
import FileItem from './FileItem';

const FileList = () => {
  const files = [
    { id: '1', name: 'Document 1', type: 'docx' },
    { id: '2', name: 'Image 1', type: 'jpg' },
    { id: '3', name: 'Spreadsheet 1', type: 'xlsx' },
  ];

  return (
    <div>
      {files.map(file => (
        <FileItem key={file.id} file={file} />
      ))}
    </div>
  );
};

export default FileList;
