import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x" />
        <Button disabled>Hello</Button>
        <Button className="custom">Hello</Button>
        <Button onClick={(e)=> {e.preventDefault(); alert('Hello')}} btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank"> Hello Baidu Link </Button>
        <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com"> Hello Baidu Link </Button>
        <hr/>
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}} mode={"vertical"} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <MenuItem>
              dropdown 3
            </MenuItem>
          </SubMenu>
          <MenuItem>
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
