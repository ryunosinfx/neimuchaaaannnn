import * as React from "react";
import * as styles from "./Editor.css";
// import * as createFragment from "react-addons-create-fragment";
import { EditorState } from "./EditorReduser";
import { EditorActions, EditorActionsSet } from "./EditorActions";
import { EditorBackRow } from "./EditorBackRow";
// interface Props {}

// interface State {
//   textAreaValue: string;
//   rowNo: number;
// }
interface OwnProps {}

export type EditorProps = OwnProps & EditorState & EditorActionsSet;

export const initialEditorState: EditorProps = {
  text: "",
  textAreaValue: "string",
  rowNo: 0,
  titleId: "",
  update: EditorActions.update.get()
};
const EditorComponent: React.SFC<EditorProps> = (props: EditorProps) => {
  const editorRowsList: Array<React.ReactChild> = [];
  // editorRowsList.push(<EditorBackRow rowNo={1} type="aa" group="a" />);
  //
  const text = props.textAreaValue;
  // const rows: Array<string> = text.split(/\n/g);
  // for (let i in rows) {
  //   const rowText: string = rows[i];
  //   const type = "a";
  //   const group = "a";
  //   const key: string = i + "";
  //   const rowNo: number = parseInt(i) * 1;
  //   editorRowsList.push(
  //     React.createElement(EditorBackRow, {
  //       key,
  //       rowNo,
  //       type,
  //       group,
  //       rowText
  //     })
  //   );
  // }
  return (
    <div className={styles.frame}>
      <textarea
        style={styleRowGenerator({ rowCount: props.rowNo })}
        className={styles.body}
        value={text}
        onChange={e => EditorActions.update.getAction(e.target.value)}
      />
      {/* <div className={styles.editorRows}>{editorRowsList}</div> */}
    </div>
  );
};
const styleRowGenerator = ({ rowCount }: { rowCount: number }) => {
  const height: number = (rowCount + 1) * 1.2;
  return {
    height: height + "rem"
  };
};
export default EditorComponent;
// export class Editort extends React.Component<Props, State> {
//   public state: State = {
//     textAreaValue: "",
//     rowNo: 1
//   };

//   private onEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const text = event.target.value;
//     const rows: Array<string> = text.split(/\n/g);
//     const rowNo: number = rows.length;
//     this.setState({ textAreaValue: text, rowNo });
//   };

//   render() {
//     const editorRowsList: Array<React.ReactChild> = [];
//     // editorRowsList.push(<EditorBackRow rowNo={1} type="aa" group="a" />);
//     //
//     const text = this.state.textAreaValue;
//     const rows: Array<string> = text.split(/\n/g);
//     for (let i in rows) {
//       const rowText: string = rows[i];
//       const type = "a";
//       const group = "a";
//       const key: string = i + "";
//       const rowNo: number = parseInt(i) * 1;
//       editorRowsList.push(
//         React.createElement(EditorBackRow, {
//           key,
//           rowNo,
//           type,
//           group,
//           rowText
//         })
//       );
//     }
//     return (
//       <div className={styles.frame}>
//         <textarea
//           style={styleRowGenerator({ rowCount: this.state.rowNo })}
//           className={styles.body}
//           value={text}
//           onChange={this.onEdit}
//         />
//         <div className={styles.editorRows}>{editorRowsList}</div>
//       </div>
//     );
//   }
// }
