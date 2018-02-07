import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Press from './Press';

function App() {
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');

        .container {
          width: 1180px;
          margin: auto;
        }
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }
        div {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: #3260c7;
        }
        img {
          max-width: 100%;
        }
        button {
          padding: 15px;
          background-color: #0008;
          border: 0px;
          color: #fff;
          font-size: 1em;
        }
        button:hover {
          background-color: #0009;
        }
      `}</style>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/press' component={Press} />
      </Switch>
    </div>

  );
}

export default App;
