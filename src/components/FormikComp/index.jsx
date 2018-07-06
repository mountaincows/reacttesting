import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { Button } from 'reactstrap';
import Yup from 'yup';
import axios from 'axios';
import { connect } from 'react-redux';
import TestComp from './../TestComp';

export class FormikComp extends Component{

    constructor(props){
        super(props);
        this.consoleMe = this.consoleMe.bind(this);

    }

    consoleMe(){
        console.log(this.state);
    }

    render(){

        return(
            <div>
            <TestComp>
            <Formik
                enableReinitialize= {true}
                initialValues={ {
                    user_name: '',
                    user_city: '',
                }}
                onSubmit={(values, {}) => {
                    console.log(values);
                    this.setState({
                        values
                    })
                }}
                render= {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    touched
                  }) => (
                    <div>
                    <form onSubmit={handleSubmit}>
                    <label>
                        <Field name="user_name" type="date"/>
                        {touched.user_name && <p>{values.user_name}</p>}
                    </label>
                    <label>
                        <Field name="user_city" />
                        {touched.user_city && <p>{values.user_city}</p>}
                    </label>
                        <Button
                            color="info"
                            type="submit"
                        >
                            Click me!
                        </Button>
                        <Button
                            onClick={this.consoleMe}
                        >
                        Do not click me!
                        </Button>
                    </form>
                    </div>
                  )}
            /></TestComp>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state;
}

export default connect(mapStateToProps)(FormikComp)
