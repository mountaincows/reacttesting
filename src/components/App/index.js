import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import TestComp from './../TestComp';
<<<<<<< HEAD
import FormikComp from './../FormikComp';
=======
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b

const userReducer = (state = {}, action) => {
    switch (action.type){
        case "ADD_USER":
            state = {...state, name: action.payload}
            break;
        case "ADD_AGE":
            state = {...state, age: action.payload}
            break;
    }
    return state;
}

const tweetsReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TWEET":
            state = [...state, action.payload]
            break;
    }
    return state;
}

export const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

<<<<<<< HEAD
export const store = createStore(reducers, {user: {name: "Nathan Sainsbury", age: 21} },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
=======
const store = createStore(reducers, {user: {name: "Nathan Sainsbury", age: 21} },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b

export class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textVal: '',
            ageVal: null,
            tweetVal: ''
        }
        this.changeText = this.changeText.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeTweet = this.changeTweet.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addAge = this.addAge.bind(this);
        this.addTweet = this.addTweet.bind(this);
    }

    changeText(event){
        this.setState({
            textVal: event.target.value
        })
    }

    changeAge(event){
        this.setState({
            ageVal: event.target.value
        })
    }

    changeTweet(event){
        this.setState({
            tweetVal: event.target.value
        })
    }

    addUser(){
        const newName = this.state.textVal;
        store.dispatch({type: "ADD_USER", payload: newName})
        console.log(store.getState());
    }

    addAge(){
        const newAge = this.state.ageVal;
        store.dispatch({type: "ADD_AGE", payload: newAge})
<<<<<<< HEAD

=======
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b
        console.log(store.getState());
    }

    addTweet(){
        const newTweet = this.state.tweetVal;
        store.dispatch({type: "ADD_TWEET", payload: newTweet})
<<<<<<< HEAD
=======
        console.log(store.getState());
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b
    }

    render() {
        const list = store.getState().tweets;
        const listItems = list.map((lists, key) =>
          <li key={key}>{key}) {lists}</li>
        );
        const name = store.getState().user.name;
        const age = store.getState().user.age;
        const { state, actions } = this.props;
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                <TestComp />
                <h3>Hello, {name} who is {age} years old</h3>
                <input type="text" onChange={this.changeText} value={this.state.textVal} />
                <button onClick={this.addUser}>
                    Add Name
                </button><br /><br />
                <input type="number" onChange={this.changeAge} value={this.state.ageVal} />
                <button onClick={this.addAge}>
                    Add Age
                </button><br /><br />
<<<<<<< HEAD
                <input type="text" onChange={this.changeTweet} className='theInput' value="{this.state.tweetVal}" />
                <button onClick={this.addTweet} className='theButton'>
=======
                <input type="text" onChange={this.changeTweet} value={this.state.tweetVal} />
                <button onClick={this.addTweet}>
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b
                    Add Tweet
                </button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state;
}

export default connect(mapStateToProps)(App);
