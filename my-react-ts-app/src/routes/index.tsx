import App from '../App'
import Context from '../views/Context'
import Hello from '../views/Hello'
import Ref from '../views/Ref'
import { Router, Route } from 'react-router';

export interface Props {
  history: any;
}

const RouterConfig = ({ history }: Props) => {
  return (
    <Router history = {history}>
      <Route path='/' component={App}></Route>
      <Route path='/context' component={Context}></Route>
      <Route path='/hello' component={Hello}></Route>
      <Route path='/ref' component={Ref}></Route>
    </Router>
  )
}

export default RouterConfig
