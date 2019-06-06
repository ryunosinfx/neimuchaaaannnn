import { createStore, combineReducers } from "redux";
import {
  TitleManagerReduser,
  TitleManagerState
} from "./title_manager/TitleManagerReduser";

export type AppState = {
  TitleManager: TitleManagerState;
};

export const Store = createStore(
  combineReducers<AppState>({
    TitleManager: TitleManagerReduser
  })
);
