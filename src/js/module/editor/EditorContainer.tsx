import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../Store";
import { EditorAction, EditorActions } from "./EditorActions";
import EditorComponent from "./EditorComponent";

const mapDispatchToProps = (dispatch: Dispatch<EditorAction>) => {
  return {
    update: (v: string) => dispatch(EditorActions.update.getAction(v))
  };
};

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState.Editor);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);
