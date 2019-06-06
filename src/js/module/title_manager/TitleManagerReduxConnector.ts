import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../Store";
import { TitleManagerAction, TitleManagerActions } from "./TitleManagerActions";
import { TitleManagerComponent } from "./TitleManagerComponent";

const mapDispatchToProps = (dispatch: Dispatch<TitleManagerAction>) => {
  return {
    updateName: (v: string) =>
      dispatch(TitleManagerActions.updateName.getAction(v)),
    updateEmail: (v: string) =>
      dispatch(TitleManagerActions.updateEmail.getAction(v))
  };
};

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.TitleManager);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleManagerComponent);
