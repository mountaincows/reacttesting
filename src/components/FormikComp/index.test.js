import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field } from 'formik';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { reducers } from './../App';
import FormikComp from './';

// const initState = {user: {name: "Nathan Sainsbury", age: 30}};
const initState = {}
const store = createStore(reducers, initState);

const noop = () => {};
Enzyme.configure({ adapter: new Adapter() });

test('Cool', async () => {
    const wrapper = mount(<FormikComp store={store} />)
    const dateInput = wrapper.find('input')
    const button = wrapper.find('form')
    const text = "nathan"
    await dateInput.simulate('change', {persist: noop, target : {name: 'user_name', value: text}})
    await button.simulate('submit')
    await button.simulate('submit')
    console.log(wrapper.html())
    expect(wrapper.html().indexOf(`<p>${text}</p>`) != -1).toEqual(true)
})
// <Field name="user_city" id="two" onChange={handleChange}/>
// <p>{values.user_city}</p>
