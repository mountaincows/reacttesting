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
        this.state = {}

    }

    consoleMe(values){
        this.setState({
            values
        })
        console.log(this.state)
    }

    render(){

        return(
            <div>
            <Formik
                enableReinitialize= {true}
                validationOnChange={true}
                initialValues={ {
                    user_name: '',
                    user_city: '',
                }}
                onSubmit={(values, {}) => {
                    this.consoleMe(values)
                }}
                render= {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    touched,
                    ...props
                  }) => (
                    <div>
                    <form onSubmit={handleSubmit}>
                    <label>
                        <Field name="user_name" type="text" id="one" onChange={handleChange} value={values.user_name}/>
                        <p>{values.user_name}</p>
                    </label>
                    <label>

                    </label>
                        <Button
                            id="three"
                            color="info"
                            type="submit"
                        >
                            Click me!
                        </Button>
                    </form>
                    </div>
                  )}
            />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state;
}

export default connect(mapStateToProps)(FormikComp)
