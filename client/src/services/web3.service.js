import Web3 from 'web3';
let web3js;

if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(window.web3.currentProvider);
    console.log('MetaMask Detected');
} else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
async function getAccounts() {
    const account = await web3js.eth.getAccounts();
    return account[0];
}


const {
    contractAddress,
    httpProvider,
    ABI
} = require('./ethBackpackContractConfig');

const contract = new web3js.eth.Contract(
    ABI,
    contractAddress
)

export const web3Service = {
    balanceOf,
    ownerOf,
    tokenURI,
    mint
};



function balanceOf(addressToCheck) {
    return contract.methods
        .balanceOf(addressToCheck)
        .call()
}

function ownerOf(tokenID) {
    return contract.methods
        .ownerOf(tokenID)
        .call()
}

function tokenURI(tokenID) {
    return contract.methods
        .tokenURI(tokenID)
        .call()
};

async function mint(addressToSend, tokenId, tokenURI) {
    let account = await getAccounts();
    return await contract.methods
        .mintWithTokenURI(
            addressToSend,
            tokenId,
            tokenURI
        )
        .send({from: account, gas: 5500000});
}