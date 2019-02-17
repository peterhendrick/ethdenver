const { ABI, contractAddress } = require('./config');
// const Web3 = require('web3');


async function receiveRequest(req, res) {
    try {
        // const { address, certificate } = req.body;
        // const uniqueInt = new Date().getTime();
        // //   const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
        // const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/4d2d6e061aba4c268300596d28fc69a8"));
        // // const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io')
        // // const web3 = new Web3(provider)
        // // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'))
        // // let res = await web3.net.listening()
        // // console.log(web3.isConnected())
        // // res = await web3.eth.getAccounts()
        // const options = {
        //     data: 'blah',
        //     from: '0xd779edd6BAcB6e9692B4dB581aAd5c6c2F0C3984',
        //     gas: 6000,
        //     gasPrice: '500000'
        // };
        // // console.log(contractAddress)
        // const contract = new web3.eth.Contract(
        //     ABI,
        //     contractAddress,
        //     options
        //     // {}
        // );

        // const test = await contract.methods
        //     .balanceOf('0xd779edd6BAcB6e9692B4dB581aAd5c6c2F0C3984')
        //     //   .ownerOf(2)
        //     .call();
        // //   .then((res) => {
        // //     console.log('done',res)
        // //   })
        // //   .catch((err) => {
        // //     console.log('error',err)
        // //   })
        // // .encodeABI()
        // // .then(console.log)

        // //await test
        // console.log('here', test);
        res.status(200).json({message: 'Success'});

        // let test2 = contract.methods
        //   .mintWithTokenURI('0xbb59782ca73b8B0A0A9707F8724c2D1d841Dc789',11,'bloop')

        // console.log('here2',test2)

        // const ethBackpack = web3.eth.Contract(
        //   {},
        //   contractAddress,
        //   options
        // )
    } catch (error) {
        res.status(500).json({ message: error.message });
        throw error;
    }
}


module.exports = {
    receiveRequest
};
