import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Web3 from 'react-web3';

import { alertActions, userActions, web3Actions } from '../actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            certificate: '',
            submitted: false,
            ownerID: '',
            tokenIDLookup: ''
        };
        this.send = this.send.bind(this);
        this.mint = this.mint.bind(this);
        this.lookUp = this.lookUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        // // Modern DApp Browsers
        // if (window.ethereum) {
        //     const web3 = Web3(window.ethereum);
        //     try {
        //         window.ethereum.enable().then(function () {
        //             // User has allowed account access to DApp...
        //         });
        //     } catch (e) {
        //         // User has denied account access to DApp...
        //     }
        // }
        // // Legacy DApp Browsers
        // else if (window.web3) {
        //     const web3 = new Web3(web3.currentProvider);
        // }
        // // Non-DApp Browsers
        // else {
        //     this.props.dispatch(alertActions.error('You have to install MetaMask !'));
        // }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    mint() {
        this.props.dispatch(web3Actions.mint('0x41FF2c09C4fAE81267Bd4feA1814Bac711C19004', 20, 'peterKicksAss'));
    }

    lookUp() {
        const ownerID = this.props.dispatch(web3Actions.ownerOf(5));
        this.props.dispatch(web3Actions.tokenURI(5));
        console.log('ownerID:',ownerID)
        this.setState({ownerId: ownerID})
    }

    send(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        // this.props.dispatch(userActions.send(this.state.address, this.state.certificate));
        this.props.dispatch(web3Actions.ownerOf(5));
    }

    render() {
        const { address, certificate, submitted, ownerID, tokenIDLookup } = this.state;
        return (
          <div>
              <div className="d-flex justify-content-md-center">
                  <img style={{ width: 300, height: 300 }} src={'https://www.ethdenver.com/wp-content/themes/understrap/img/bufficorn_magic_geometri1.jpg'} alt="boohoo" className="img-responsive" />
              </div>
              <table>
                <tr>
                    <th>Mint</th>
                    <th>LookUp</th>
                </tr>
                <tr>
                <td>
                    <div className="col-md-6 col-md-offset-3">
                        <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                            <label htmlFor="address">Address To Mint For</label>
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
                            <label htmlFor="certificate">Certificate Deets</label>
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
                        <div className={'form-group' + (submitted && !certificate ? ' has-error' : '')}>
                            <label htmlFor="certificate">Certificate ID</label>
                            <input
                                type="certificateID"
                                className="form-control"
                                name="certificateID"
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
                            <div className="col">
                                <button
                                    className="btn btn-outline-primary btn-block"
                                    name="mint"
                                    onClick={this.mint}
                                >Mint</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="col-md-6 col-md-offset-3">
                        <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                            <label htmlFor="lookUpID">Token ID to LookUp</label>
                            <input type="text"
                                className="form-control"
                                name="tokenIDLookup"
                                value={tokenIDLookup}
                                onChange={this.handleChange}
                            />
                            {submitted && !address &&
                                <div className="help-block">Address is required</div>
                            }
                        </div>
                        <div className="col">
                            <button
                                className="btn btn-outline-primary btn-block"
                                name="lookUp"
                                onClick={this.lookUp}
                            >LookUp</button>
                        </div>
                        <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                            <label htmlFor="lookUpID">OwnerID</label>
                            <input type="text"
                                className="form-control"
                                name="ownerID"
                                value={ownerID}
                                onChange={this.handleChange}
                            />
                            {submitted && !address &&
                                <div className="help-block">Address is required</div>
                            }
                        </div>
                    </div>
                </td>
                </tr>
              </table>
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
