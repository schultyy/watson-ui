import React, { Component } from 'react';
import FileList from './FileList';
import FileDetail from './FileDetail';
import Header from './Header';
import AddWorkflow from './AddWorkflow';
import { fetchFile, fetchFiles } from './watsonClient';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      addWorkflowOpen: false,
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

  onAddWorkflowClick() {
    const { addWorkflowOpen } = this.state;

    this.setState({
      addWorkflowOpen: !addWorkflowOpen
    });
  }

  render() {
    const { addWorkflowOpen } = this.state;

    return (
      <div className="App">
        <Header onAddWorkflowClick={this.onAddWorkflowClick.bind(this)} />
        <div className="body">
          { addWorkflowOpen ? <AddWorkflow /> : null }
          <div class="files">
            <FileList
              onFileSelected={this.onFileSelected.bind(this)}
              files={this.state.files} />
            <FileDetail fileDetail={this.state.selectedFile} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
