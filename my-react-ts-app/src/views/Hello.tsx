import React from 'react';
import HelloCom from '../components/Hello'
import { Button } from 'phantom-canyon'

const Hello: React.FC = () => {

  return (
    <div className="App">
      <HelloCom message="Hello World!" />
      <Button>你好</Button>
    </div>
  );
}

export default Hello;
