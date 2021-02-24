import App from '../App'

import Context from '../views/Context'
import Hello from '../views/Hello'
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
    </Router>
  )
}

export default RouterConfig
