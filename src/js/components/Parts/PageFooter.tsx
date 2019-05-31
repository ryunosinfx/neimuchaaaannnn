import * as React from 'react';
import * as styles from './PageFooter.css';

interface Props { }

interface State {
}

export class PageFooter extends React.Component<Props, State> {

  public state: State = {
  };

  private countUp = () => {
  }

  render() {
    return (
      <div className = {styles.footer}>
        フッターちゃん!!
      </div>
    )
  }
}
