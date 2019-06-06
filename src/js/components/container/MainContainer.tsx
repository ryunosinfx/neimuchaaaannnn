import * as React from "react";
import { Button } from "../presentational/Button";
import { PageHeader } from "../Parts/PageHeader";
import { PageFooter } from "../Parts/PageFooter";
import {
  TitleManagerComponent,
  MineProps
} from "../../module/title_manager/TitleManagerComponent";
import { TitleManagerActions } from "../../module/title_manager/TitleManagerActions";
import { Editor } from "../editor/Editor";
import * as stylesMain from "./MainContainer.css";
import * as styles from "../../../css/common.css";

interface Props {}

interface State {
  count: number;
  style: string;
}

const initialState: MineProps = {
  name: "",
  email: "",
  updateEmail: TitleManagerActions.updateEmail.get(),
  updateName: TitleManagerActions.updateName.get()
};
export class MainContainer extends React.Component<Props, State> {
  public state: State = {
    count: 0,
    style: styles.button
  };

  public countUp = () => {
    const count: number = this.state.count + 1;
    const style: string = count > 2 ? styles.buttonBlue : styles.button;
    this.setState({ count, style });
  };

  render() {
    const TitleManager = React.createElement(
      TitleManagerComponent,
      initialState
    );
    return (
      <div className={stylesMain.body}>
        <PageHeader />
        {TitleManager}
        <Editor />
        <div>
          <div className={this.state.style}> count: {this.state.count} </div>
          <Button label="count up!" onClick={this.countUp} />
        </div>
        <PageFooter />
      </div>
    );
  }
}
