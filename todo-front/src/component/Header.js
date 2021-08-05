import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  let user = JSON.parse(localStorage.getItem("user-info"))
  const history = useHistory();
  const logout = (() => {
    localStorage.clear();
    history.push('/login')
  })
  return (
    <React.Fragment>
      <nav className="navbar">
        <h1>ToDo App</h1>
        <div className="links">

          {
            localStorage.getItem("user-info") ?
              <>
                <Link to="/">Home</Link>
                <Link to="/edit">Update</Link>
                <Link to="/add" style={{
                  color: 'white',
                  backgroundColor: '#f1356d',
                  borderRadius: '8px'
                }}>Add Task</Link>
              </>
              :
              <>
                <Link to="/login" style={{
                  color: 'white',
                  backgroundColor: '#f1356d',
                  borderRadius: '8px'
                }}>Login</Link>
                <Link to="/register" style={{
                  color: 'white',
                  backgroundColor: '#f1356d',
                  borderRadius: '8px'
                }}>Register</Link>
              </>
          }
        </div>
        {
          localStorage.getItem('user-info') ?

            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            : null
        }

      </nav>

    </React.Fragment>
  );
}

export default Header;