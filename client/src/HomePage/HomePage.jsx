import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            certificate: '',
            submitted: false
        };
        this.send = this.send.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    send(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        this.props.dispatch(userActions.send(this.state.address, this.state.certificate));
    }

    render() {
        const { address, certificate, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                    <label htmlFor="address">Student Ethereum Address</label>
                    <input type="text"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                    />
                    {submitted && !address &&
                        <div className="help-block">Address is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !certificate ? ' has-error' : '')}>
                    <label htmlFor="certificate">Certificate</label>
                    <input
                        type="certificate"
                        className="form-control"
                        name="certificate"
                        value={certificate}
                        onChange={this.handleChange} />
                    {submitted && !certificate &&
                        <div className="help-block">Certificate is required</div>
                    }
                </div>
                <div className="col">
                    <button
                        className="btn btn-outline-primary btn-block"
                        name="send"
                        onClick={this.send}
                    >Send</button>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    send: (pair, amount, id) => dispatch(userActions.send(pair, amount, id))

})

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };