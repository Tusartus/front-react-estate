import React,  {useState} from 'react';
import Layout from "../core/Layout";
import { Link } from 'react-router-dom';







const Signin = () => {

  const [values, setValues] = useState({
    
    email: '',
    password: '',
    error: '',
    success: false
});

const { email, password, success, error } = values;

const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
};








  const signinForm = () => (
    <form>
       

        <div className="form-group">
            <label className="text-muted">Email</label>
            <input  type="email"onChange={handleChange('email')}  className="form-control" value={email} />
        </div>

        <div className="form-group">
            <label className="text-muted">Password</label>
            <input  type="password" onChange={handleChange('password')} className="form-control" value={password} />
        </div>
        <button   className="btn btn-primary">
            Signin
        </button>
    </form>
);



const showError = () => (
  <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
  </div>
);

const showSuccess = () => (
  <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
      New account is created. Please <Link to="/signin">Signin</Link>
  </div>
);





  return (
    <Layout
        title="Signup"
        description="Signin to  name of website"
        className="container col-md-8 offset-md-2"
    >
        {showSuccess()}
        {showError()}
        {signinForm()}
    </Layout>
   );


 };
       



export default Signin;

