import * as React from "react";
import * as styles from "./EditorBackRow.css";

interface Props {
  rowNo: number;
  type: string;
  group: string;
  rowText: string;
}

interface State {}

export class EditorBackRow extends React.Component<Props, State> {
  public state: State = {};

  private countUp = () => {};

  render() {
    return (
      <div className={styles.row}>
        <div className={styles.rowNo}>{this.props.rowNo}</div>
        <div className={styles.rowText}>{this.props.rowText}</div>
      </div>
    );
  }
}
