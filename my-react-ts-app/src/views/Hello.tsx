import React from 'react';
import HelloCom from '../components/Hello'

const Hello: React.FC = () => {

  return (
    <div className="App">
        <HelloCom message="Hello World!"/>
    </div>
  );
}

export default Hello;
