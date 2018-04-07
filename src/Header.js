import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    const { onAddWorkflowClick } = this.props;

    return (
      <header className="header">
        <div className="brand">Watson UI</div>
        <button onClick={onAddWorkflowClick}>Add Workflow</button>
      </header>
    );
  }
}