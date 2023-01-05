const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

	const name = 'idiot';

	const tree = new MerkleTree(niceList);

	const proof = JSON.stringify(tree.getProof(100));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
	  name, proof
  });

  console.log({ gift });
}

main();
