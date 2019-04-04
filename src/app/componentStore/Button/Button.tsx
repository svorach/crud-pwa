import * as React from 'react';

interface IProps {
  label: string;
}

//implemented just to test that Storybook is working properly
export class Button extends React.PureComponent<IProps, {}> {
  render() {
    return (
      <>
        <button>{this.props.label}</button>
      </>
    );
  }
}
