import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';

import Login from './Login';
import LoginSuccess from './LoginSuccess';
import SignUp from './Signup';

const StyledLayout = styled.div`
  max-height: 100vh;
  position: relative;

  .first {
    height: 50vh;
    background-color: #0089ed;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .second {
    height: 50vh;
    background-color: #fff;
    position: absolute;
    width: 100%;
    top: 50vh;
    z-index: 2;
  }

  .first_content {
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .form_container {
    margin: 0 auto;
    max-width: var(--max-width);
    position: relative;
    height: 100%;
    z-index: 3;
  }
`;

interface Users {
  username: string;
  email: string;
  password: string;
}

const Layout = () => {
  const [form, setForm] = useState('login');
  const [users, setUsers] = useState<Users[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);

  //Sign in
  const [usernameSignIn, setUsernameSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [errorSignIn, setErrorSignIn] = useState<string | null>(null);

  //Sign up
  const [usernameSignUp, setUsernameSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState('');
  const [errorSignUp, setErrorSignUp] = useState<string | null>(null);
  const [successSignUp, setSuccessSignUp] = useState<string | null>(null);

  console.log('all users', users);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorSignUp(null);
      setSuccessSignUp(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorSignUp, successSignUp]);

  const handleSignIn = () => {
    if (usernameSignIn.length < 1 && passwordSignIn.length < 1) {
      setErrorSignIn('Please enter your username and password');
      return;
    }

    if (usernameSignIn.length < 1) {
      setErrorSignIn('Username is required');
      return;
    }

    if (passwordSignIn.length < 1) {
      setErrorSignIn('Password is required');
      return;
    }

    const user = users.find(
      user =>
        (user.username === usernameSignIn || user.email === usernameSignIn) &&
        user.password === passwordSignIn,
    );

    console.log(user);

    if (user) {
      setLoggedIn(true);
      setForm('');

      setUsernameSignIn('');
      setPasswordSignIn('');
      setErrorSignIn(null);
    } else {
      setErrorSignIn('Username or password is incorrect');
    }
  };

  const handleSignUp = () => {
    if (!validator.isAlpha(usernameSignUp) || usernameSignUp.length < 6) {
      setErrorSignUp(
        'Username must be at least 6 characters and contain only letters',
      );
      return;
    }

    if (!validator.isEmail(emailSignUp)) {
      setErrorSignUp('Email is not valid');
      return;
    }

    if (passwordSignUp.length < 6) {
      setErrorSignUp('Password must be at least 6 characters');
      return;
    }

    if (passwordSignUp !== confirmPasswordSignUp) {
      setErrorSignUp('Passwords do not match');
      return;
    }

    const user = users.find(
      user => user.username === usernameSignUp || user.email === emailSignUp,
    );

    if (user) {
      setErrorSignUp('Username or email already exists');
      return;
    }

    setUsers([
      ...users,
      {
        username: usernameSignUp,
        email: emailSignUp,
        password: passwordSignUp,
      },
    ]);

    setErrorSignUp(null);
    setSuccessSignUp("You've successfully signed up!");

    setUsernameSignUp('');
    setEmailSignUp('');
    setPasswordSignUp('');
    setConfirmPasswordSignUp('');
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setForm('login');
  };

  const handleFormSwitch = () => {
    setForm(form === 'login' ? 'signup' : 'login');

    setUsernameSignIn('');
    setPasswordSignIn('');
    setErrorSignIn(null);

    setUsernameSignUp('');
    setEmailSignUp('');
    setPasswordSignUp('');
    setConfirmPasswordSignUp('');
    setErrorSignUp(null);
    setSuccessSignUp(null);
  };

  return (
    <StyledLayout>
      <div className='first'>
        <div className='first_content'>1st</div>
      </div>
      <div className='second'>2nd</div>

      <div className='form_container'>
        {form === 'login' && (
          <Login
            username={usernameSignIn}
            password={passwordSignIn}
            setUsername={setUsernameSignIn}
            setPassword={setPasswordSignIn}
            formSwitch={handleFormSwitch}
            onSignInClick={handleSignIn}
            signInError={errorSignIn}
          />
        )}
        {form === 'signup' && (
          <SignUp
            username={usernameSignUp}
            email={emailSignUp}
            password={passwordSignUp}
            confirmPassword={confirmPasswordSignUp}
            setUsername={setUsernameSignUp}
            setEmail={setEmailSignUp}
            setPassword={setPasswordSignUp}
            setConfirmPassword={setConfirmPasswordSignUp}
            formSwitch={handleFormSwitch}
            onSignUpClick={handleSignUp}
            signUpError={errorSignUp}
            signUpSuccess={successSignUp}
          />
        )}
        {loggedIn && <LoginSuccess onSignOutClick={handleSignOut} />}
      </div>
    </StyledLayout>
  );
};

export default Layout;
