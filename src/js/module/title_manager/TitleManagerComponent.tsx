import * as React from "react";
import { TitleManagerState } from "./TitleManagerReduser";
import {
  TitleManagerActions,
  TitleManagerActionsSet
} from "./TitleManagerActions";

interface OwnProps {}

export type TitleManagerProps = OwnProps &
  TitleManagerState &
  TitleManagerActionsSet;

export const initialTitleManagerState: TitleManagerProps = {
  name: "",
  email: "",
  updateEmail: TitleManagerActions.updateEmail.get(),
  updateName: TitleManagerActions.updateName.get()
};
export const TitleManagerComponent: React.SFC<TitleManagerProps> = (
  props: TitleManagerProps
) => {
  return (
    <div>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={props.name}
          onChange={e =>
            TitleManagerActions.updateName.getAction(e.target.value)
          }
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={e =>
            TitleManagerActions.updateEmail.getAction(e.target.value)
          }
        />
      </div>
    </div>
  );
};
