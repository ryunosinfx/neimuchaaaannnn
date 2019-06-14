import { createStore, combineReducers } from "redux";
import {
  TitleManagerReduser,
  TitleManagerState
} from "./title_manager/TitleManagerReduser";
import { EditorReduser, EditorState } from "./editor/EditorReduser";

export type AppState1 = {
  TitleManager: TitleManagerState;
  Editor: EditorState;
};

export const StoreA = createStore(
  combineReducers<AppState1>({
    TitleManager: TitleManagerReduser,
    Editor: EditorReduser
  })
);
export default StoreA;
