import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, selector } from 'enzyme';
import { createStore } from 'redux';
import { reducers } from './../App';
import FormikComp from './';
const initState = {user: {name: "Nathan Sainsbury", age: 30}};
const store = createStore(reducers, initState);

Enzyme.configure({ adapter: new Adapter() });

test('Cool', () => {
    const wrapper = shallow(<FormikComp store={store} />).find('Button')
    console.log(wrapper);
})
