const {h} = require('snabbdom');

export default function template(state, props) {
    return h('div' , [
        h('h1', state.count),
        h('button', {on: { click: events.handleClick}}, 'Add'),
    ]);
}