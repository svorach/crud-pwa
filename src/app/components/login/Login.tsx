import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.sass';

interface LoginProps {
  user_name: string;
}

interface LoginState {
  loading: boolean;
}

export class Login extends React.PureComponent<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      loading: false
    };
  }

  toggleLoading(loading: boolean) {
    this.setState({ loading: !loading });
  }

  handleSubmit() {
    console.log('cool');
  }

  render() {
    const { user_name } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            defaultValue={user_name}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button"
          >
            Log In
          </Button>
        </Form.Item>
        {/*
        <Form.Item>
          <div>
            <Checkbox>Remember me</Checkbox>
            <br />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </div>

          <div>
            Or <a href="">register now!</a>
          </div>
        </Form.Item>
        */}
      </Form>
    );
  }
}
