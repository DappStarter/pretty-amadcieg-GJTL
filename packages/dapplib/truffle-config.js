require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name radar remain clutch gloom enroll flush gift'; 
let testAccounts = [
"0x18eb6a0f9bb02ccf79664b5c6e30c135dba9e265812124a0294106310105c1d0",
"0x052faa4ecfd0fa32b8db80b9c9a5253c79ddf25dde1bb17e0efb19cf784076bf",
"0xa8c5918c7532e3bdca95a7a1d85a8b88f1d3ac2f2695cda1f2e64cf42cea65cf",
"0xd1ba5f7b50e6c94f135dffb7e438955d39e7f7c1ecafdffe695075c12f08754e",
"0xcd38b1c2ed368bdb5f8e08c700ddb1986675319c3bc92e9f44c7f9646e4de7d0",
"0xf72b9a96cdb2aa8be46fd5a6e92eb290db76613a2d89c15c14a5136f3be54173",
"0x3398d9b97397d7f585b580d6c0bd1a13aef97879c9d93338b180df8e30cbb2f3",
"0x52c8a56ea09bee8d527a1bb81ed49c45e614cbd5ac0392861f0599a5fb6cd870",
"0xcbad64cb78a45430d665149393ddd14deb7a96f2cb98e1f703960b03c5d2496d",
"0x6ef086778f6301c9d45054a0f11bd484aa9cdf9083c9ba3f6e7c0d1215d11ffe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


