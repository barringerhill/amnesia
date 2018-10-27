import DOM from '../lib/dom';

// const
const d = new DOM();

// DOM
let content = d.c('section', '');
let title = d.c('h1', 'Hello, World!');

d.t(content, [title]);
