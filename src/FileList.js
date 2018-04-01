import React from 'react';
import './FileList.css';

export default class FileList extends React.Component {
  render() {
    return (
      <div className="file-list">
        <ul>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
          <li>File 4</li>
        </ul>
      </div>
    );
  }
}