import { processTest, populateTransaction } from "../test.fixture";

const contractName = "SquidRouterProxy";

const testLabel = "ethereum_callBridgeCall_normal_flow";
const testDirSuffix = "callBridgeCall_normal_flow";
const testNetwork = "ethereum";
const signedPlugin = false;

const contractAddr = "0xce16f69375520ab01377ce7b88f5ba8c48f8d666";   // <= Address of the smart contract
const chainID = 1;

// From : https://etherscan.io/tx/0x5daf6374b712f249e8c7087839db8d94b7bbf0d79313f65e88b4adc738c2312b
const inputData = "0x8ca3bf68000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000071afd498d000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000b9f3b3809b730d436896e76aeb9c363c9de7954d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007506f6c79676f6e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000455534443000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e47ff36ab500000000000000000000000000000000000000000000000000000000002682250000000000000000000000000000000000000000000000000000000000000080000000000000000000000000ce16f69375520ab01377ce7b88f5ba8c48f8d66600000000000000000000000000000000000000000000000000000184d3c8af2f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000750e4c4984a9e0f12978ea6742bc1c5d248f40ed0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000750e4c4984a9e0f12978ea6742bc1c5d248f40ed000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b3000000000000000000000000a522deb6f17853f3a97a65d0972a50bdc3b1afff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000750e4c4984a9e0f12978ea6742bc1c5d248f40ed00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a522deb6f17853f3a97a65d0972a50bdc3b1afff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000c41a4c1ca3000000000000000000000000fba3b7bb043415035220b1c44fb4756434639392000000000000000000000000750e4c4984a9e0f12978ea6742bc1c5d248f40ed0000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000000000000000000000000000000000000026dbc4000000000000000000000000000000000000000000000000000000000026dbd3000000000000000000000000b9f3b3809b730d436896e76aeb9c363c9de7954d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000750e4c4984a9e0f12978ea6742bc1c5d248f40ed0000000000000000000000000000000000000000000000000000000000000003";

// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

const devices = [
    {
        name: "nanos",
        label: "Nano S",
        steps: 5, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanox",
        label: "Nano X",
        steps: 5, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanosp",
        label: "Nano S+",
        steps: 5, // <= Define the number of steps for this test case and this device
    }
];

devices.forEach((device) =>
    processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork)
);
