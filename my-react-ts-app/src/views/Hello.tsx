import React from 'react';
import HelloCom from '../components/Hello'
import { Button, Icon, Menu} from 'phantom-canyon'

const Hello: React.FC = () => {

  return (
    <div className="App">
      <HelloCom message="Hello World!" />
      <Button>你好</Button>
      <Icon icon="check-circle" theme="primary" size="8x" />
      <Menu defaultIndex='0' >
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item> 
        <Menu.Item>
          cool link 2
        </Menu.Item> 
      </Menu>
    </div>
  );
}

export default Hello;
