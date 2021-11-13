// 0x58353337EC65A420b9f0172310C86C9E64449BE4
// 0x44f990ADF70185808CBC721b8d5f2A73F6D3C3e0
// https://keepers.chain.link/
const KeepersCounter = artifacts.require("KeepersCounter");

contract(
  "KeepersCounter",
  ([deployer, wallet, investor1, investor2, investor3]) => {
    describe("Keepers counter contract", function () {
      it("checks if upkeep is still running", async () => {
        //   get contract at this address
        let Keeper = await KeepersCounter.at(
          "0x58353337EC65A420b9f0172310C86C9E64449BE4"
        );
        let current_count = await Keeper.counter();
        console.log(Number(current_count));
      });
    });
  }
);
