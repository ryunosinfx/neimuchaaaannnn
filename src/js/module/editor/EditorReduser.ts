import { reducerWithInitialState } from "typescript-fsa-reducers";
import { EditorActions, EditorAction } from "./EditorActions";

export interface EditorState {
  text: string;
  textAreaValue: string;
  rowNo: number;
  titleId: string;
}

const initialState: EditorState = {
  text: "",
  textAreaValue: "",
  rowNo: 1,
  titleId: ""
};

export const EditorReduser = (
  state: EditorState = initialState,
  action: EditorAction
) => {
  switch (action.type) {
    case EditorActions.update.type:
      const text = action.payload;
      const rows: Array<string> = text.split(/\n/g);
      const rowNo: number = rows.length;
      console.log("action.type:" + action.type);
      return Object.assign({}, state, { textAreaValue: text, rowNo });
    default:
      return state;
  }
};
