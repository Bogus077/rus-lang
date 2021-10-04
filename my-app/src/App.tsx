import React from 'react';
import MainScreen from './features/StartScreen/MainScreen';
import './App.css';
import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react';

function App(): ReactElement {
  return (
    <MainScreen/>
  );
}

export default App;
