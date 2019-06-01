export class FullScreen {
  // 全画面表示の実行
  static enter() {
    const body = document.body;
    body.requestFullscreen();
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
