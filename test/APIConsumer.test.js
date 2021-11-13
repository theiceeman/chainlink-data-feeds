const APIConsumer = artifacts.require("APIConsumer");

contract(
  "APIConsumer",
  ([deployer, wallet, investor1, investor2, investor3]) => {
    describe("API Consumer contract", function () {
      it("gets volume of eth/usd using chainlink any-api", async () => {
        //   get contract at this address
        let API = await APIConsumer.at(
          "0x0E199F42C362580303c34020fA7544E48590b9a0"
        );
        let current_count = await API.volume();
        console.log(Number(current_count));
      });
    });
  }
);
