import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import EmployeeList from '../components/EmployeeList';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import EmployeeDetail from '../components/EmployeeDetail';
import SearchEmployee from '../components/SearchEmployee';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route exact path="/add-employee" component={AddEmployee} />
        <Route exact path="/edit-employee/:id" component={EditEmployee} />
        <Route exact path="/employee/:id" component={EmployeeDetail} />
        <Route exact path="/search" component={SearchEmployee} />
      </Switch>
    </Router>
  );
}

export default Routes;
