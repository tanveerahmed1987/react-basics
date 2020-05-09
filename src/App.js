import React from 'react';
import './App.css';
import { Breadcrumb } from './components/Breadcrumb';
import Button from './components/Button/Button';
import { Card } from './components/Card';
import avatar1 from '../assets/images/img_avatar_1.png';

function App() {

  const onClickHandler = (value) => {
    console.log('OnClickHandler', value);
  };

  const breadcrumb1 = [
    { name: 'Home', link: '/home' },
    { name: 'Picture', link: '/picture' },
    { name: 'Summer 15', link: '/summer-15' },
    { name: 'Italy' }
  ];


  const breadcrumb2 = [
    { name: 'Home', link: '/home' },
    { name: 'Picture', link: '/picture' },
    { name: 'Winter 41', link: '/winter-41' },
    { name: 'Brazil' }
  ];

  const profiles = [
    { avatar: avatar1, title: 'Jhon Doe', description: 'Architect' },
    { avatar: avatar1, title: 'Jane Doe', description: 'Interior Designer' }
  ];


  return (
    <div>

      <div>
        <Card />
      </div>






      <div>
        <Breadcrumb values={breadcrumb1} />
        <Breadcrumb values={breadcrumb2} />
      </div>
















      <div>
        <Button type="success" onClick={onClickHandler}>Hello</Button>
        <Button type="danger" onClick={onClickHandler}>Danger</Button>
        <Button type="warning" onClick={onClickHandler}>Warning</Button>
        <Button type="info" onClick={onClickHandler}>Info</Button>
        <Button type="default" onClick={onClickHandler}>Default</Button>
        <Button type="primary" onClick={onClickHandler}>Primary</Button>
      </div>
    </div>
  );
}

export default App;
