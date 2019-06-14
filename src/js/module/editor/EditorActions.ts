import actionCreatorFactory from "typescript-fsa";
import { Action } from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export interface EditorActionsSet {
  update: (v: string) => Action<string>;
}

export class EditorAction implements Action<string> {
  error?: boolean | undefined;
  meta?: { [key: string]: any } | null | undefined;
  type: string = "";
  payload: string = "";
  constructor(type: string) {
    this.type = type;
  }
  getAction(payload: string) {
    console.log("payload:" + payload);
    this.payload = payload;
    return this;
  }
  get() {
    return (v: string) => {
      return this.getAction(v);
    };
  }
}
export const EditorActions = {
  update: new EditorAction("ACTIONS_UPDATE_EDITOR")
};
