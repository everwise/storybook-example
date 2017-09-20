import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Oops!</h1>
        <div>
          {`Did you mean to go to${' '}`}
          <a href="http://localhost:9009/">
            http://localhost:9009/
          </a>?
        </div>
      </div>
    );
  }
}

export default App;
