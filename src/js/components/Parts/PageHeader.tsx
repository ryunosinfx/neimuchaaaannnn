import * as React from "react";
import * as styles from "./PageHeader.css";
import { Button } from "../presentational/Button";
import { FullScreen } from "../../util/FullScreen";

const version: string = "0.01";
interface Props {}

interface State {}
const ver: number = 0.1;
export class PageHeader extends React.Component<Props, State> {
  public state: State = {};

  private toggleFullScreen = () => {
    console.log("aaa");
    FullScreen.toggle();
  };

  render() {
    return (
      <div className={styles.header}>
        <div>
          <span>ねーむちゃーん</span> <span>ver</span> <span>{version}</span>
        </div>
        <Button label="FullScreen?" onClick={this.toggleFullScreen} />
      </div>
    );
  }
}
