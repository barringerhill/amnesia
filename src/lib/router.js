/* ROUTER */

export default class Router {
  route(path){
    try {
      require(`../views/${path}.js`);
    } catch(e) {
      console.error(e);
      require(`../views/home.js`);
    }
  }
}
