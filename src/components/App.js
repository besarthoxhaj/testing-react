'use strict';

import React from 'react';
import { Link } from 'react-router';

let App = React.createClass({
  render() {
    return (
        <div>
          <h1>Welcome to App</h1>
          <Link to='login'>Login</Link>
        </div>
    );
  }
});

export default App;
