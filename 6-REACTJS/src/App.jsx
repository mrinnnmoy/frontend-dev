import React from 'react';
import "./App.css";
import Elements from './components/Elements';
import Components from './components/Components';
import Hooks from './components/Hooks';
import ComponentClass from './components/ComponentClass';
import LifeCycle from './components/LifeCycle';
import ErrorBoundaries from './components/ErrorBoundaries';

const App = () => {
  return (
    <div>
      <h1>Learn React JS</h1>
      <Elements />
      <Components />
      <Hooks />
      <ComponentClass />
      <LifeCycle />
      <ErrorBoundaries />
    </div>
  )
};

export default App;