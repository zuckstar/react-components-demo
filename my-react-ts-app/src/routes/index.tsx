import App from '../App'

import ContextCom from '../components/Context'
import Hello from '../views/Hello'
import { Router, Route } from 'react-router';

export interface Props {
  history: any;
}

const RouterConfig = ({ history }: Props) => {
  return (
    <Router history = {history}>
      <Route path='/' component={App}></Route>
      <Route path='/context' component={ContextCom}></Route>
      <Route path='/hello' component={Hello}></Route>
    </Router>
  )
}

export default RouterConfig
