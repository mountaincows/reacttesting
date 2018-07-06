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
<<<<<<< HEAD
    console.log(wrapper)
    console.log(wrapper.state());

    var tweetInput = wrapper.find('input.theInput');
    console.log(tweetInput)

    tweetInput.prop('onChange')({ target: { value: 'cool' } })

    var button = wrapper.find('button.theButton');

    button.simulate('click');
    console.log(wrapper.state());
=======
    console.log(wrapper);
    expect(wrapper.find('ul').length).toEqual(1);
    // console.log(wrapper.find('ul').html());
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b

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
