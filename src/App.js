import React, { Component } from 'react';
import FileList from './FileList';
import { fetchFile, fetchFiles } from './watsonClient';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      files: []
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
      console.log(file);
    });
  }

  render() {
    return (
      <div className="App">
        <FileList
          onFileSelected={this.onFileSelected.bind(this)}
          files={this.state.files} />
      </div>
    );
  }
}

export default App;
