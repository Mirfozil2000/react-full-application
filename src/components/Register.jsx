import React, { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserStart())
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4"
            src={logo}
            alt="Logotip"
            width="80"
            height="60"
          />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <Input label={'Username'} state={name} setState={setName}/>
          <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
          <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

         
          <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
            {isLoading ? 'Loading...' : 'Register'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
