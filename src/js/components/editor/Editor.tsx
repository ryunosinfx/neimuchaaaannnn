import * as React from "react";
import * as styles from "./Editor.css";

interface Props {}

interface State {
  textAreaValue: string;
}

export class Editor extends React.Component<Props, State> {
  public state: State = {
    textAreaValue: ""
  };

  private onEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    this.setState({ textAreaValue: text });
  };

  render() {
    return (
      <textarea
        className={styles.body}
        value={this.state.textAreaValue}
        onChange={this.onEdit}
      />
    );
  }
}
