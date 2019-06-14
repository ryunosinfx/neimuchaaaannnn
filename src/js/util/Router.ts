import * as React from "react";
const addressMap = new Map<string, React.FunctionComponent<any>>();
let defaultCompornet: React.FunctionComponent<any>;
export class Router {
  constructor() {}
  static addRoute<T>(
    path: string,
    pgaeComponent: React.FunctionComponent<any>,
    isDefauult: boolean = false
  ) {
    const pathSanitized = Router.pathSanitazer(path);
    if (isDefauult) {
      defaultCompornet = pgaeComponent;
    }
    addressMap.set(pathSanitized, pgaeComponent);
  }
  static pathSanitazer(path: string) {
    return path ? path.trim().replace("#", "") : "";
  }
  static get(path: string) {
    const pathSanitized = Router.pathSanitazer(path);
    if (addressMap.has(pathSanitized)) {
      return addressMap.get(pathSanitized);
    }
    return defaultCompornet;
  }
}
