import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

Amplify.configure(awsconfig)
function App(signOut,user) {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App) ;
