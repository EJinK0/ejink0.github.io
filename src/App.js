import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Kakaomap from './pages/ScssExamplePage/KaKaomap';

function App() {
  return (
    <div>
      <h1 className="My-header">MyStudy</h1>
      <Link className='App-link' to="/mainpage">MainPage</Link> <br />
      <Link className='App-link' to="/gamepage">GamePage</Link> <br />
      <Link className='App-link' to="/snspage">SNSPage</Link> <br />
      <Link className='App-link' to="/todolist">TodoList</Link> <br />
      <Link className='App-link' to="/arrayExamplePage">ArrayExamplePage</Link> <br />
      <Link className='App-link' to="/scssExamplePage">ScssExamplePage</Link> <br />
      <Link className='App-link' to="/hookExamplePage">HookExamplePage</Link>
    </div>
  );
}

export default App;
