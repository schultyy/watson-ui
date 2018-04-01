import React from 'react';
import './FileList.css';

export default class FileList extends React.Component {
  render() {
    const { files, onFileSelected } = this.props;

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