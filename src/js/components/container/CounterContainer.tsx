import * as React from "react";
import Button from "../presentational/Button";
import { PageHeader } from "../Parts/PageHeader";
import { PageFooter } from "../Parts/PageFooter";
import { Editor } from "../editor/Editor";
import * as styles from "../../../css/common.css";

interface Props {}

interface State {
  count: number;
  style: string;
}

export default class CounterContainer extends React.Component<Props, State> {
  public state: State = {
    count: 0,
    style: styles.button
  };

  public countUp = () => {
    const count: number = this.state.count + 1;
    const style: string = count > 2 ? styles.buttonBlue : styles.button;
    this.setState({ count, style });
  };

  render() {
    return (
      <div>
        <PageHeader />
        <div className={this.state.style}> count: {this.state.count} </div>
        <Editor />
        <Button label="count up!" onClick={this.countUp} />
        <PageFooter />
      </div>
    );
  }
}
