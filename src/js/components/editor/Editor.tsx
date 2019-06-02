import * as React from "react";
import * as styles from "./Editor.css";
// import * as createFragment from "react-addons-create-fragment";
import { EditorBackRow } from "./EditorBackRow";
interface Props {}

interface State {
  textAreaValue: string;
  rowNo: number;
}
const styleRowGenerator = ({ rowCount }: { rowCount: number }) => {
  const height: number = (rowCount + 1) * 1.2;
  return {
    height: height + "rem"
  };
};

export class Editor extends React.Component<Props, State> {
  public state: State = {
    textAreaValue: "",
    rowNo: 1
  };

  private onEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    const rows: Array<string> = text.split(/\n/g);
    const rowNo: number = rows.length;
    this.setState({ textAreaValue: text, rowNo });
  };

  render() {
    const editorRowsList: Array<React.ReactChild> = [];
    // editorRowsList.push(<EditorBackRow rowNo={1} type="aa" group="a" />);
    //
    for (let i = 0; i < this.state.rowNo; i++) {
      const type = "a";
      const group = "a";
      editorRowsList.push(
        React.createElement(EditorBackRow, { key: i, rowNo: i, type, group })
      );
    }
    return (
      <div className={styles.frame}>
        <textarea
          style={styleRowGenerator({ rowCount: this.state.rowNo })}
          className={styles.body}
          value={this.state.textAreaValue}
          onChange={this.onEdit}
        />
        <div className={styles.editorRows}>{editorRowsList}</div>
      </div>
    );
  }
}
