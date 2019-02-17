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
        this.mint = this.mint.bind(this);
        this.lookUp = this.lookUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    mint() {
        this.props.dispatch(web3Actions.mint(this.state.tokenReceiver, this.state.tokenId, this.state.certMeta));
    }

    lookUp() {
        this.props.dispatch(web3Actions.ownerOf(this.state.tokenIDLookup));
        this.props.dispatch(web3Actions.tokenURI(this.state.tokenIDLookup));
    }


    render() {
        const { address, certificate, tokenId, submitted, tokenIDLookup, tokenReceiver, certMeta } = this.props.web3;
        return (
          <div>
              <div align="center">
                  <img style={{ width: 300, height: 300 }} src={'https://www.ethdenver.com/wp-content/themes/understrap/img/bufficorn_magic_geometri1.jpg'} alt="boohoo" className="img-responsive" />
              </div>
              <table width="100%" align="center">
                <tr>
                    <th class="text-center"><h3>Mint</h3></th>
                    <th class="text-center"><h3>LookUp</h3></th>
                </tr>
                <tr>
                <td width="50%">
                    <div className="col-md-offset-2">
                        <div className={'form-group' + (submitted && !tokenReceiver ? ' has-error' : '')}>
                            <label htmlFor="tokenReceiver">Address To Mint For</label>
                            <input type="text"
                                className="form-control"
                                name="tokenReceiver"
                                value={tokenReceiver}
                                onChange={this.handleChange}
                            />
                            {submitted && !address &&
                                <div className="help-block">Address is required</div>
                            }
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="certMeta">Certificate Metadata</label>
                            <input
                                type="certMeta"
                                className="form-control"
                                name="certMeta"
                                value={certMeta}
                                onChange={this.handleChange} />
                            {submitted && !certificate &&
                                <div className="help-block">Certificate is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !certificate ? ' has-error' : '')}>
                            <label htmlFor="tokenId">Token ID</label>
                            <input
                                type="tokenId"
                                className="form-control"
                                name="tokenId"
                                value={tokenId}
                                onChange={this.handleChange} />
                            {submitted && !certificate &&
                                <div className="help-block">Certificate is required</div>
                            }
                        </div>
                        <div className="col">
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
                <td width="50%">
                    <div className="col-md-offset-2">
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
                        {address && <div className={'form-group'}>
                            <label htmlFor="lookUpID">OwnerID</label>
                            <p>{address}</p>
                        </div>}
                        {certificate && <div className={'form-group'}>
                            <label htmlFor="lookUpID">Cert ID</label>
                            <p>{certificate}</p>
                        </div>}
                    </div>
                </td>
                </tr>
              </table>
          </div>
        );
    }
}

function mapStateToProps(state) {
    // this.state = state;
    return state;
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    send: (pair, amount, id) => dispatch(userActions.send(pair, amount, id))

})

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
