import React from "react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import {Form, Button} from "semantic-ui-react";

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onchange = (e) => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length===0){
            this.props.submit(this.state.data);
        }

    };

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Can't be Blank";
        return errors;
    };

    render() {
        const {data, errors} = this.state;

        return (
            <div className="row" style={{alignItems: 'center', height: '80vh'}}>
                <div className="col-md-4 offset-md-4">
                <div className="ui segment">
                    <h1 style={{textAlign: 'center'}}>Login Page</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field error={!!errors.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.data.email}
                                onChange={this.onchange}
                            />
                            {errors.email && <InlineError text={errors.email}/>}
                        </Form.Field>
                        <Form.Field error={!!errors.password}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Make it Secure"
                                value={data.password}
                                onChange={this.onchange}
                            />
                            {errors.password && <InlineError text={errors.password}/>}
                        </Form.Field>

                        <Button primary>Login</Button>
                    </Form>
                </div>
                </div>

            </div>
        );
    }

}

export default LoginForm;