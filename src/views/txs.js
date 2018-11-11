/* Transactions */
import '../styles/txs.css';
import { DOM, Element } from '../lib';
import { search, read } from '../controllers/api';
import { Model_Post, Model_Search_Button } from './model';
import Scroller from '../lib/scroller';

// const
const d = new DOM();
const e = new Element();
const s = new Scroller();
const amnesia = d.id('amnesia');

// reset
amnesia.innerHTML = '';

// DOM
// structure
let page_txs = e.i('section', {'class': 'page_txs'}).t(amnesia);
let wing_txs = e.i('div', {'class': 'wing_txs'}).t(page_txs);
let core_txs = e.i('div', {'class': 'core_txs'}).t(wing_txs);
let cw_c = e.i('div', {'class': 'cw_c'}).t(core_txs);

/* render function */
function render_search(page, text) {
  search(text, page, res => {
    res?
      res.map(data => {
        data = JSON.parse(data);
        Model_Post(data.Number, data.Data, data.Hash).t(cw_c)
      }):
      Model_Post(42, 'Nothing, Keep Exploring!', '0x101010').t(cw_c)
  });
}

function render_read(page) {
  read(page, res => {
    res.map(data => {
      data = JSON.parse(data);
      Model_Post(data.Number, data.Data, data.Hash).t(cw_c)
    })  
  });  
}

// render
let hash = window.location.hash;
let text = 'hello';
let page = 0;
let render_model = render_search;

try {
  if(hash.match(/page=.*/)) {
    text = hash.match(/text=(.*)(&page)/)[1];
    page = hash.match(/page=(\d*)/)[1];
  }

  if(!hash.match(/&page/)) {
    text = hash.match(/text=(.*)/)[1];
  }
} catch(e) {throw(e)};

render_model(page, text);

window.onscroll = function() {
  let minus = s.getScrollHeight() - s.getClientHeight() - s.getScrollTop();
  if(minus < 200){
    page -= 0;
    page += 1;
    render_model(page, text);
  }
}
