import * as React from 'react';
import { Button } from 'antd';

import './toolbar.sass';
import { APP_NAME } from '../../constants';

interface ToolbarProps {
  user_name: string;
}

export class Toolbar extends React.PureComponent<ToolbarProps> {
  render() {
    const { user_name } = this.props;

    return (
      <header>
        <nav className="toolbar">
          <div className="col logo-col">
            <img
              src="./img/wave.svg"
              alt="crm-pwa"
              id="logo"
              className="hidden"
            />
            <h1>{APP_NAME}</h1>
          </div>
          <div className="col control-col">
            <a
              id="user-link"
              className="current-user"
              href="javascript:void(0);"
            >
              {user_name}
            </a>
            <Button type="dashed" shape="circle" icon="search" />
          </div>
        </nav>
      </header>
    );
  }
}
