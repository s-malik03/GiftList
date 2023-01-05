const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList.json');

function main(){

	console.log(niceList[100]);

	const tree = new MerkleTree(niceList);

	console.log(tree.getRoot());

}

main();
