import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, selector } from 'enzyme';
import { createStore } from 'redux';
import App, { reducers } from './';

import TestComp from './../TestComp';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
    const initState = {user: {name: "Nathan Sainsbury", age: 30}};
    const store = createStore(reducers, initState);
    // use dive
    var wrapper = shallow(<App store={store}/>).dive();
    console.log(wrapper);
    expect(wrapper.find('ul').length).toEqual(1);
    // console.log(wrapper.find('ul').html());

});

test('reducers', () => {
  let state;
  state = reducers({user:{name: 'nathan'},tweets:['a', 'b']}, {type:'ADD_TWEET',payload:'c'});
  expect(state).toEqual({user:{name:'nathan'},tweets:['a', 'b', 'c']});
});

test('reducers', () => {
  let state;
  state = reducers({user:{name: 'nathan'},tweets:[]}, {type:'ADD_TWEET',payload:'c'});
  expect(state).toEqual({user:{name:'nathan'},tweets:['c']});
});

test('reducers', () => {
  let state;
  state = reducers({user:{name: 'nathan'},tweets:[1,2]}, {type:'ADD_TWEET',payload:'c'});
  expect(state).toEqual({user:{name:'nathan'},tweets:[1, 2, 'c']});
});
