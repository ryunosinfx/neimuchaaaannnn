import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TitleManagerActions, TitleManagerAction } from "./TitleManagerActions";

export interface TitleManagerState {
  name: string;
  email: string;
}

const initialState: TitleManagerState = {
  name: "",
  email: ""
};

// export const TitleManagerReduserA = reducerWithInitialState(initialState)
//   .case(TitleManagerActions.updateName, (state, name) => {
//     return Object.assign({}, state, { name });
//   })
//   .case(TitleManagerActions.updateEmail, (state, email) => {
//     return Object.assign({}, state, { email });
//   });
export const TitleManagerReduser = (
  state: TitleManagerState = initialState,
  action: TitleManagerAction
) => {
  switch (action.type) {
    case TitleManagerActions.updateName.type:
      return Object.assign({}, state, { name: action.payload });
    case TitleManagerActions.updateEmail.type:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
};
