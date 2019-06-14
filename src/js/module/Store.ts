import { createStore, combineReducers } from "redux";
import { EditorReduser, EditorState } from "./editor/EditorReduser";

export type AppState = {
  Editor: EditorState;
};

export const Store = createStore(
  combineReducers<AppState>({
    Editor: EditorReduser
  })
);
export default Store;
