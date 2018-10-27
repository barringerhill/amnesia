/* DOM */

// CONST
const body = document.getElementById('app');

// CLASS
export default class DOM {
  //@method 'c' - create
  c(tag, text, options = {}, methods = {}) {
    let el = document.createElement(tag);
    el.textContent = text;

    // set attributes
    Object.entries(options).reduce(
      (element, [field, value]) => {
        element.setAttribute(field, value);
        return element;
      }, el);

    // set methods
    return Object.entries(methods).reduce(
      (element, [event, method]) => {
        element.addEventListener(event, method);
        return element;
      }, el);
  }

  //@method 't' - batch
  b(o) {
    let that = this;
    return Object.entries(o).map(([tag, options]) => {
      return that.c(tag, ...options);
    });
  }  

  //@method 't' - tree
  t(box, els) {
    els.forEach(e => box.appendChild(e))
    app.appendChild(box)
  }
}
