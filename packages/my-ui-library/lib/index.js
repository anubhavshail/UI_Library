import { init } from 'snabbdom';
const {
  JSDOM
} = require('jsdom');
const dom = new JSDOM();
global.window = dom.window;
const patch = init([]);
export const createComponent = (initialState, templateFun) => {
  const state = initialState;
  const vnode = templateFun(state);
  function updateState(newState) {
    state = {
      ...state,
      ...newState
    };
    const newVnode = templateFun(state);
    patch(vnode, newVnode);
    vnode = newVnode;
    console.log('state Updated: ', state);
  }
  function mount(pNode) {
    patch(pNode, vnode);
    console.log('Component Mounted');
  }
  return {
    updateState,
    mount
  };
};
module.exports = {
  createComponent
};