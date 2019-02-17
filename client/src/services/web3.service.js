const Web3 = require('web3')
const {
    contractAddress,
    httpProvider,
    ABI
} = require('./ethBackpackContractConfig');
const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider))
const contract = new web3.eth.Contract(
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

function mint(addressToSend, tokenId, tokenURI) {
    return contract.methods
        .mintWithTokenURI(
            addressToSend,
            tokenId,
            tokenURI
        )
        .call();
}