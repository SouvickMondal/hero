import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'
import Employee from './Emp.jsx'
class App6 extends Component {
    render () {
        return (
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='address' component={Address}>
              </Route>
              <Route path="register" component={Register}></Route>
                <Route path='register/signup' component={Signup}></Route>
                <Route path='register/login' component={Login}></Route>
                <Route path='about(/:name)' component={About}></Route>
                <Route path='employee' component={Employee}></Route>
              <Route path='*' component={NotFound} />
            </Route>
            
          </Router>
        )
      }
}
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>
const About=(props)=>{
    return(
    <h1>{props.params.name}</h1>
    );
}
const Signup = ()=>{
    return(
        <div>
            User Name<input type="text"></input>
            Create password<input type="password"></input>
        </div>
    );
}
const Login = ()=><h1>Login page</h1>
const Register = ()=><h1>Registry</h1>

function Nav() {
    return (
        <div>
            <Link onlyActiveOnIndex activeStyle={{color:'#FFFF00'}} to='/'>Home</Link>&nbsp;
            <Link activeStyle={{color:"#FFFF00"}} to='/address'>Address</Link>
            <Link to='/register'>Register</Link>
            <Link to='/register/signup'>SignUp</Link>
            <Link to='/register/login'>Login</Link>
            <Link to='/about'>About</Link>
            <Link to='/employee'>Employee</Link>
        </div>
    )
}

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App6

