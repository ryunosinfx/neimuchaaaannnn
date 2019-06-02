import * as React from "react";
import * as styles from "./EditorBackRow.css";

interface Props {
  rowNo: number;
  type: string;
  group: string;
}

interface State {}

export class EditorBackRow extends React.Component<Props, State> {
  public state: State = {};

  private countUp = () => {};

  render() {
    return <div className={styles.row}>{this.props.rowNo}</div>;
  }
}
