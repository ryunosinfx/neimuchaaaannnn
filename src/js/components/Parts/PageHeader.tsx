import * as React from 'react';
import * as styles from './PageHeader.css';

const version :string ="0.01";
interface Props { }

interface State {
}
const ver :number = 0.1;
export class PageHeader extends React.Component<Props, State> {

  public state: State = {
  };

  private countUp = () => {
  }

  render() {
    return (
      <div className= {  styles.header} >
        <span>ねーむちゃーん</span> <span>ver</span> <span>{version}</span>
      </div>
    )
  }
}
