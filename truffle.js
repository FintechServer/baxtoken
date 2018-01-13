var address = '0x0';

module.exports = {
  networks: {
    "development": {
      network_id: 5777,
      host: "localhost",
      port: 7545,
   },
    "live": {
      network_id: 1,
      host: "127.0.0.1",
      port: 8545
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
};
