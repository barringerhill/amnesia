/* Transactions */
import '../styles/txs.css';
import { DOM, Element } from '../lib';
import { search, read } from '../controllers/api';
import { Model_Post } from './model';

// const
const d = new DOM();
const e = new Element();
const amnesia = d.id('amnesia');

// reset
amnesia.innerHTML = '';  

// DOM
// structure
let page_txs = e.i('section', {'class': 'page_txs'}).t(amnesia);
let wing_txs = e.i('div', {'class': 'wing_txs'}).t(page_txs);
let core_txs = e.i('div', {'class': 'core_txs'}).t(wing_txs);
let cw_c = e.i('div', {'class': 'cw_c'}).t(core_txs);

// test

read(0, res => {
  res.map(data => {
    data = JSON.parse(data);
    Model_Post(data.Number, data.Data, data.Hash).t(cw_c)
  })  
});
