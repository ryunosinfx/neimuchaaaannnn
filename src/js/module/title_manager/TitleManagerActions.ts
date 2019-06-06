import actionCreatorFactory from "typescript-fsa";
import { Action } from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export interface TitleManagerActionsSet {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

export class TitleManagerAction implements Action<string> {
  error?: boolean | undefined;
  meta?: { [key: string]: any } | null | undefined;
  type: string = "";
  payload: string = "";
  constructor(type: string) {
    this.type = type;
  }
  getAction(payload: string) {
    this.payload = payload;
    return this;
  }
  get() {
    return (v: string) => {
      return this.getAction(v);
    };
  }
}
export const TitleManagerActions = {
  updateName: new TitleManagerAction("ACTIONS_UPDATE_NAME"),
  updateEmail: new TitleManagerAction("ACTIONS_UPDATE_EMAIL")
};
