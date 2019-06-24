import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response: object) => {
  console.log(response);
}

const componentClicked = (clicked: object) => {
  console.log(clicked)
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FacebookLogin
          appId="2316708211922691"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      </header>
    </div>
  );
}

export default App;
