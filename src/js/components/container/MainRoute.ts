import { Router } from "../../util/Router";
import EditorComponent from "../../module/editor/EditorComponent";
import { TitleManagerComponent } from "../../module/title_manager/TitleManagerComponent";
export class MainRoute {
  constructor() {}
  init() {
    Router.addRoute("#main", TitleManagerComponent, true);
    Router.addRoute("#editor", EditorComponent, true);
  }
}
