// components/FileItem.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const FileItem = ({ file }) => {
  return (
    <Paper style={{ padding: '16px', margin: '16px 0' }}>
      <Typography variant="h6">{file.name}</Typography>
      <Typography variant="body2">{file.type}</Typography>
    </Paper>
  );
};

export default FileItem;
