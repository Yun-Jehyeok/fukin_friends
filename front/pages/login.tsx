import { useInput } from 'hooks/useInput';
import type { NextPage } from 'next';
import {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginButton,
} from './loginStyle';

const Login: NextPage = () => {
  const email = useInput('');
  const password = useInput('');

  return (
    <LoginContainer>
      <LoginForm>
        <div>
          <div>
            <LoginTitle>Sign In</LoginTitle>
            <form>
              <div>Email</div>
              <LoginInput type="email" name="email" required {...email} />
              <div>Password</div>
              <LoginInput
                type="password"
                name="password"
                required
                {...password}
              />
              <LoginButton>Sign In</LoginButton>
            </form>
          </div>
        </div>
        <div></div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
