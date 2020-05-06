import React from 'react';
import './App.css';
import Button from './Button';

function App() {

  const onClickHandler = (value) => {
    console.log('OnClickHandler', value);
  };


  return (
    <div>
      <Button type="success" onClick={onClickHandler}>Hello</Button>
      <Button type="danger" onClick={onClickHandler}>Danger</Button>
      <Button type="warning" onClick={onClickHandler}>Warning</Button>
      <Button type="info" onClick={onClickHandler}>Info</Button>
      <Button type="default" onClick={onClickHandler}>Default</Button>
      <Button type="primary" onClick={onClickHandler}>Primary</Button>
    </div>
  );
}

export default App;
