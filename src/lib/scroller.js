/* scroller */
export default class Scroller{
  getScrollTop(){
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }

  getClientHeight(){
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    }else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
  }

  getScrollHeight(){
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  constructor() {
    this.scroll = this.getScrollHeight();
    this.client = this.getClientHeight() + this.getScrollTop();
  }
}
