const Web3 = require('web3')
const { contractAddress, httpProvider, ABI } = require('./ethBackpackContractConfig')

async function balanceOf(addressToCheck) {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider))
    const contract = new web3.eth.Contract(
      ABI,
      contractAddress
    )

    const res = await contract.methods
      .balanceOf(addressToCheck)
      .call()
  } catch (e) {
    return 'Error in call to balanceOf ' + e
  }
  return res
}

async function ownerOf(tokenID) {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider))
    const contract = new web3.eth.Contract(
      ABI,
      contractAddress
    )

    const res = await contract.methods
      .ownerOf(tokenID)
      .call()
  } catch (e) {
    return 'Error in call to balanceOf ' + e
  }
  return res
}

async function tokenURI(tokenID) {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider))
    const contract = new web3.eth.Contract(
      ABI,
      contractAddress
    )

    const res = await contract.methods
      .tokenURI(tokenID)
      .call()
  } catch (e) {
    return 'Error in call to balanceOf ' + e
  }
  return res
}
