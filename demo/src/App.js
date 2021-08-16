import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import NotFound from './pages/404';
import SetWorker from './pages/SetWorker';
import Worker from "./pages/Worker";
import Create from "./pages/create";
import Delete from "./pages/delete";
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component  {
  render (){
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Отдел кадров</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Домашняя страница</Link></Nav.Link>
              <Nav.Link ><Link to="/setworker">Создать сотрудника</Link></Nav.Link>
              <NavDropdown title="Опирации с данными" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/create">Создать организацию</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/create">Создать позицию</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/create">Обновить организию</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/create">Обновить позицию</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/delete">Удалить организию</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/delete">Удалить позицию</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/delete">Удалить сотрудника</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>

        </Container>
      </Navbar>
      <Switch>      
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/delete' component={Delete} />
        <Route exact path='/setworker' component={SetWorker} />
        <Route path="/worker/:id" component={Worker} />
        <Route component={NotFound} />
      </Switch>

    </Router>
  );
          }
}

export default App;
