import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="brand">Watson UI</div>
        <button>Add Workflow</button>
      </header>
    );
  }
}