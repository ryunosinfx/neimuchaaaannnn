interface webkitHTMLElement extends HTMLElement {
  webkitRequestFullScreen(): void;
  requestFullScreen(): void;
}

export class FullScreen {
  // 全画面表示の実行
  static enter() {
    const body: webkitHTMLElement = <webkitHTMLElement>document.body;
    if (body.webkitRequestFullScreen) {
      body.webkitRequestFullScreen();
    } else {
      body.requestFullScreen();
    }
  }
  static exit() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  static toggle() {
    if (!document.fullscreenElement) {
      //   document.documentElement.requestFullscreen();
      FullScreen.enter();
    } else {
      FullScreen.exit();
    }
  }
}
