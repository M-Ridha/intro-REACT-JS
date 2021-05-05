
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {GithubLoginButton} from 'react-social-login-buttons';


function App() {
  return (
    <div className="App"> 
      <div className =" hello">
      <h1>  Website Login  </h1>
      <h2> welcome </h2>
      </div>
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
  
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success">Login</Button>{' '}
      </Form>
      <div className="or"> or login with </div>
      <div className="social"> 
        <GoogleLoginButton style={{width:"300px",height:"70px"}} onClick={() => alert("Hello")} />
        <GithubLoginButton style={{width:"300px",height:"70px"}} onClick={() => alert("Hello")} />
      </div>
      
      
    </div>
  );
}

export default App;
