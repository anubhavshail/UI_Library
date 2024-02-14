require('jsdom-global')();
global.window = {}
import { createComponent } from '../../my-ui-library/src/index.js';
const {JSDOM} = require('jsdom');

const dom = new JSDOM();
global.window = dom.window;

function template(state){
    return history('div', [
        h('h1', state.count),
        h('button', {on: {click: increment}}, 'Add')
    ]);
}

const initialState = {count: 0};

function increment() {
    component.updateState({count: component.state.count + 1});
}

const component = createComponent(initialState, template);

document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    component.mount(app);
});