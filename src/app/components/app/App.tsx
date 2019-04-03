import * as React from 'react';

import { Toolbar } from '../toolbar/Toolbar';
import { Login } from '../login/Login';

import 'antd/dist/antd.css';
import '../../sass/app.sass';

interface AppProps {}
interface AppState {
  user_name: string;
  showInstallMessage: boolean;
}

export class App extends React.PureComponent<AppProps, AppState> {
  state: AppState;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      showInstallMessage: true,
      user_name: 'Vharok'
    };
  }

  componentDidMount() {
    const isIos = () => {
      return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    };

    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && (window.navigator as any).standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.setState({ showInstallMessage: true });
    }
  }

  render() {
    const { user_name } = this.state;
    const { showInstallMessage } = this.state;

    return (
      <>
        <Toolbar user_name={user_name} />
        <section className="main">
          <Login user_name={user_name} />
        </section>
      </>
    );
  }
}
