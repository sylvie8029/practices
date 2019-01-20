import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookPage from './Book/BookPage/BookPage';
import { Provider } from 'react-redux';
import aaa from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={aaa}>
          <BookPage />
        </Provider>
      </div>
    );
  }
}

export default App;
