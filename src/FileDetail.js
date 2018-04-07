import React from 'react';
import './FileDetail.css';

export default class FileDetail extends React.Component {
  render() {
    const { fileDetail } = this.props;

    if (!fileDetail) {
      return null;
    }

    return (
      <div className="file-detail">
        <h1>{fileDetail.file.name}</h1>
        <h3>Findings:</h3>
        <ul className="findings">
          {fileDetail.findings.map((finding) => (
            <li>
              <span className="lineNumber">{finding.line_number}</span>
              <span className="line">{finding.line}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}