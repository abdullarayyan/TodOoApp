import Home from './Home';
import Register from './Component/Register';
import Edit from './Component/EditTask';
import Login from './Component/Login';
import AddTask from './Component/AddTask';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Protected from './Component/Protected';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {

  const [api, setApi] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://127.0.0.1:8000/api/list/"
    );
    setApi(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return "IsLoading....";
  }
  // console.log(api,"API")

  return (
    <Router>
      {/* <Header /> */}
      {/* <div className="App"> */}
      {/* <div className="content"> */}
      <Switch>
        <Route exact path="/">
          <Home data={api} />
          {/* <Protected   Cmp={Home}  /> */}
        </Route>
        <Route path="/add">
          {/* <Protected Cmp={AddTask} api={api}/> */}
          <AddTask data={api} />
        </Route>
        <Route path="/edit/:id">
          <Protected Cmp={Edit} />
          {/* <Edit /> */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {/* </div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
