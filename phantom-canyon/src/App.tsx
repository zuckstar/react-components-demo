import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button className="custom">Hello</Button>
        <Button onClick={(e)=> {e.preventDefault(); alert('Hello')}} btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank"> Hello Baidu Link </Button>
        <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com"> Hello Baidu Link </Button>
        <hr/>
        <Menu defaultIndex={0} onSelect={(index) => {alert(index)}} mode={"vertical"}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link2
          </MenuItem>
          <MenuItem index={2}>
            cool link3
          </MenuItem>
        </Menu>
        <div>
          <Alert alertType={AlertType.Default} title={'提示标题'} message={'this is a long description'} closeable/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
