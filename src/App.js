import React, { Component } from 'react';
import FileList from './FileList';
import FileDetail from './FileDetail';
import { fetchFile, fetchFiles } from './watsonClient';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      selectedFile: null
    }
  }

  componentDidMount() {
    fetchFiles()
    .then((files) => {
      this.setState({
        files: files
      });
    });
  }

  onFileSelected(fileId) {
    fetchFile(fileId)
    .then((file) => {
      this.setState({
        selectedFile: file
      });
    });
  }

  render() {
    return (
      <div className="App">
        <FileList
          onFileSelected={this.onFileSelected.bind(this)}
          files={this.state.files} />
        <FileDetail fileDetail={this.state.selectedFile} />
      </div>
    );
  }
}

export default App;
