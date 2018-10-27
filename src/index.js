import DOM from './lib/dom';
import Router from './lib/router';
import './styles/main.css';

// STYLES
window.document.body.style = `
  height: ${window.innerHeight}px;
`;

// MAIN DOM
const d = new DOM();
let a = d.c('app', '', {'id': 'app'});
document.body.appendChild(a);

// Router
const r = new Router();
const popstate = () => {
  let hash = window.location.hash.match(/#.*/)[0].slice(1);
  r.route(hash);
}

popstate();
window.addEventListener('popstate', popstate);
