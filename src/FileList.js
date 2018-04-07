import React from 'react';
import './FileList.css';

export default class FileList extends React.Component {
  render() {
    const { files, onFileSelected } = this.props;

    if(files.length === 0) {
      return (
        <div className="file-list">
          <ul>
            <li>No files available</li>
          </ul>
        </div>
      );
    }

    return (
      <div className="file-list">
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              <button onClick={() => onFileSelected(file.id)}>{file.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}