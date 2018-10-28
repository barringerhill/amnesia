/* Element */

export default class Element {
  //@static 'b' - batch
  static b(o) {
    return Object.entries(o).map(([tag, options]) => {
      return new Element().i(tag, ...options);
    });
  }
  
  //@static 'c' - create
  static c(tag, options = {}, methods = {}) {
    let el = document.createElement(tag);

    // set attributes
    Object.entries(options).reduce(
      (element, [field, value]) => {
        element.setAttribute(field, value);
        return element;
      }, el);

    // set methods
    Object.entries(methods).reduce(
      (element, [event, method]) => {
        element.addEventListener(event, method);
        return element;
      }, el);

    return el;
  }  
  
  constructor(tag, options = {}, methods = {}) {
    this.tag = tag;
    this.options = options;
    this.methods = methods;
    this.element = Element.c(tag, options, methods);
  }

  //@method 'i' - init
  i(tag, options = {}, methods = {}) {
    return new Element(tag, options, methods);
  }

  //@method 'a' - append
  a(...els) {
    els.forEach(e => this.element.appendChild(e.element));
  }

  //@method 't' - tree
  t(father) {
    father.appendChild(this.element);
  }

  //@method 'p' - place
  p(text) {
    this.element.textContent = text;
  }
}
