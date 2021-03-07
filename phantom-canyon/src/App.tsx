import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'

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
        <div>
          <Alert alertType={AlertType.Default} title={'提示标题'} message={'this is a long description'} closeable/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
