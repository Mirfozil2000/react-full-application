import React, { useState } from 'react'
import {logo} from '../constants';
import { Input } from '../ui';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="text-center mt-5">
      <main class="form-signin w-25 m-auto">
        <form>
          <img
            class="mb-4"
            src={logo}
            alt="Logotip"
            width="80"
            height="60"
          />
          <h1 class="h3 mb-3 fw-normal">Please Login</h1>

          <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
          <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>
    
         
          <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Login
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login