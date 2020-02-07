import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import BlockingForm from './pages/BlockingForm';
import Hello from './pages/Hello';

import './styles.css';

export default function App() {
  const id = 1;

  return (
    <div className='App'>
      <h1>
        <a href='https://reacttraining.com/react-router/web/example/basic'>React Router Training</a>
      </h1>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home page</Link>
          <Link to='/user'>User list</Link>
          <Link to={'/user/' + id}>User id=1 detail</Link>
          <Link to='/form'>Blocking Form</Link>
          <Link to='/hello?name=derek'>Query Paramter</Link>
        </nav>
        <Switch>
          {/* 根路由要添加exact，实现精确匹配 */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />

          {/* below 2 ways to pass component, but probably 1st needs `component` as parameter to accept component, while 2nd will accept the component by children */}
          {/* <Route exact path="/user" component={UserList} /> */}
          {/* <Route exact path="/user">
            <UserList />
          </Route> */}

          <PrivateRoute exact path='/user' component={UserList} />
          <PrivateRoute path='/user/:id' component={UserDetail} />

          <Route path='/form' children={<BlockingForm />} />
          <Route path='/hello' children={<Hello />} />
          <Route path='*' component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
