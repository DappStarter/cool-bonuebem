require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom kiwi swallow food cheap rescue stereo proof grace hat army gesture'; 
let testAccounts = [
"0x5eb61bc9b031502a0ebf962ea4e6943f3210d8544a72ded64605b5520d26424c",
"0x469de46bd4df6a0cc8d2a40b3baae8c71bf1cf1ee4f9c5ef7529dc6ad7595432",
"0x059b27be0421bbad4bc184de61f0e48da68db2f873683b026808de72e9491539",
"0x26664a4a19941ac7e1ae23209a5c2cef965fc08e2e4c2d34ffec18c878f5c2bb",
"0x9ea38362f42b8e2ea1020a3478b472e468a7382c402ac79cf0e3ef60601ec370",
"0xb1c87f3b4e51e596101097219b5d0d7f075ec14936c58487c2e80c4f30a84aab",
"0x5187a2c74b0522e5cf80b7f1fb201498324fd835a3c77b9d74786584bf2f7b86",
"0xd987472ac0811d988e9e11048c61ec373a3a876785a26d46cf0c285aeaab7efd",
"0xe7fb6f5943664c977b752765d5aa64dfd46c0a2bf72ec449c82dba47e613ba70",
"0xd55c98bd7caeaa293eecc2d903e29bdf4ea628c2aa094569332a74926d140e60"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

