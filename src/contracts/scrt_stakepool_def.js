import axios from "axios";
import { useViewingKeyStore as useVKs } from "@stakeordie/griptape-vue.js";
import { useWalletStore as useWallet } from "@stakeordie/griptape-vue.js";
const fees = {
  gas: "410000",
};
export const ScrtStakepoolDefinition = {
  state: {
    start_time: undefined,
    end_time: undefined,
    current_time: undefined,
    user_deposits: 0,
    available_tokens_for_withdrawl: 0,
    scrt_total_rewards: 0,
    scrt_total_deposits: 0,
    scrt_token_current_price: 0,
    scrt_token_balance_in_usd: 0,
    vk: undefined,
    wallet_address: undefined,
    past_records: undefined,
    user_past_records: undefined,
    time_left: 0,
    days1: 0,
    days2: 0,
    hours1: 0,
    hours2: 0,
    mins1: 0,
    mins2: 0,
    secs1: 0,
    secs2: 0,
  },
  queries: {
    async scrtStakepoolPoolViewEntryPoint() {
      await this.scrtStakepoolGetScrtCurrentPrice();
      await this.scrtStakepoolGetTotalRewards();
      await this.scrtStakepoolGetLotteryInfo();
      await this.scrtStakepoolGetAvailableForWithdrawl();
    },

    async scrtStakepoolAccountViewEntryPoint() {
      await this.get_viewing_key_helper();
      await this.syncer_function_for_vk();
    },

    //Sets Time and set Timer
    async scrtStakepoolGetLotteryInfo() {
      const msg = { lottery_info: {} };
      let res;
      try {
        res = await this.scrtClient.queryContract(this.contractAddress, msg);
      } catch (e) {
        console.log(e);
      }
      this.start_time = res.lottery_info.start_time;
      this.end_time = res.lottery_info.end_time;

      // console.log(this.start_time, "Start time");
      // console.log(this.end_time, "end time");

      await this.scrtStakepoolGetLotteryInfoHelper();
    },

    async scrtStakepoolGetScrtCurrentPrice() {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=secret&vs_currencies=usd"
        )
        .then(
          (response) =>
            (this.scrt_token_current_price = response.data["secret"].usd)
        );
      // console.log(this.scrt_token_current_price);
    },

    async scrtStakepoolGetTotalscrtDeposits() {
      console.log("Working total scrt deposits");
      const msg = { total_deposits: {} };
      let res;
      try {
        res = await this.scrtClient.queryContract(this.contractAddress, msg);
        this.scrt_total_deposits = res.total_deposits.deposits;
      } catch (err) {
        console.log(err);
      }
    },

    async scrtStakepoolGetPublicPastRewards() {
      const msg = { past_records: {} };
      let res;
      try {
        res = await this.scrtClient.queryContract(this.contractAddress, msg);
      } catch (err) {
        console.log(err);
      }
      let temp_array = [];

      temp_array = res.past_records.past_total_rewards;
      console.log(temp_array);
      this.past_records = temp_array;

      for (var i = 0; i < temp_array.length; i++) {
        // console.log("working");

        this.past_records[i][0] = temp_array[i][0];
        var date = new Date(temp_array[i][1] * 1000);
        var options = {
          month: "long", //to display the full name of the month
          day: "numeric",
        };
        var sDate = date.toLocaleDateString("en-US", options);
        temp_array[i][1] = sDate;
        // this.past_records = sDate;
      }

      this.past_records = temp_array;
    },

    async scrtStakepoolGetTotalRewards() {
      await this.scrtStakepoolGetTotalscrtDeposits();
      if (this.scrt_total_deposits > 0) {
        this.scrt_total_rewards = ((this.scrt_total_deposits * 0.48) / 365) * 7;
        this.scrt_total_rewards = this.scrt_total_rewards.toString();
      }
    },
    async scrtStakepoolGetCurrentTime() {
      await axios
        .get("https://api.stakeordie.com/blocks/latest")
        .then(
          (response) =>
            (this.current_time = parseInt(
              new Date(response.data.block.header.time).valueOf() / 1000
            ))
        );
    },
    async scrtStakepoolGetuser_deposits() {
      const wallet = useWallet();
      const address = wallet.address;
      this.wallet_address = address;

      if (!this.vk) {
        await this.get_viewing_key_helper();
      }

      const msg = {
        balance: {
          address: this.wallet_address,
          key: this.vk,
        },
      };
      try {
        const res = await this.scrtClient.queryContract(
          this.contractAddress,
          msg
        );
        this.user_deposits = res.balance.amount;
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },

    async scrtStakepoolGetAvailableForWithdrawl() {
      await this.scrtStakepoolGetCurrentTime();
      const wallet = useWallet();
      const address = wallet.address;
      this.wallet_address = address;
      if (!this.vk) {
        await this.get_viewing_key_helper();
      }
      const msg = {
        available_for_withdrawl: {
          address: this.wallet_address,
          current_time: this.current_time,
          key: this.vk,
        },
      };
      let res;
      try {
        res = await this.scrtClient.queryContract(this.contractAddress, msg);
        this.available_tokens_for_withdrawl =
          res.available_for_withdrawl.amount;
        // console.log(
        //   "Amount available_tokens_for_withdrawl",
        //   this.available_tokens_for_withdrawl
        // );
      } catch (e) {
        console.log(e);
      }
    },

    async scrtStakepoolGetUserPastRecords() {
      const wallet = useWallet();
      const address = wallet.address;
      this.wallet_address = address;
      if (!this.vk) {
        await this.get_viewing_key_helper();
      }

      const msg = {
        user_past_records: {
          address: this.wallet_address,
          key: this.vk,
        },
      };
      let res;
      try {
        res = await this.scrtClient.queryContract(this.contractAddress, msg);
      } catch (err) {
        console.log(err);
      }
      // console.log(res);
      let temp_array = [];

      temp_array = res.user_past_records.winning_history;
      // console.log(temp_array);
      this.user_past_records = temp_array;

      for (var i = 0; i < temp_array.length; i++) {
        // console.log("working");

        this.user_past_records[i][0] = temp_array[i][0];
        var date = new Date(temp_array[i][1] * 1000);
        var options = {
          month: "long", //to display the full name of the month
          day: "numeric",
        };
        var sDate = date.toLocaleDateString("en-US", options);
        temp_array[i][1] = sDate;
      }

      this.user_past_records = temp_array;

      // console.log(this.user_past_records);
      // console.log(temp_array);
    },

    //HELPER FUNCTIONS
    async scrtStakepoolGetLotteryInfoHelper() {
      const now = new Date();
      now.toUTCString();
      now.toISOString();
      this.current_time = Math.floor(now / 1000);

      this.time_left = this.end_time - this.current_time;
      if (this.time_left < 0) {
        this.time_left = 0;
      }
    },

    async scrtStakepoolSyncTimer() {
      this.current_time += 1;
      this.time_left -= 1;
      let temp_timer = this.time_left;

      //   console.log(this.time_left);
      if (this.time_left < 0) {
        temp_timer = 0;
        if (this.time_left < -20) {
          this.scrtStakepoolGetLotteryInfo();
          this.time_left = 0;
        }
      }

      this.days1 = Math.floor(temp_timer / (3600 * 24) / 10);
      this.days2 = Math.floor((temp_timer / (3600 * 24)) % 10);

      this.hours1 = Math.floor((temp_timer % (3600 * 24)) / 3600 / 10);
      this.hours2 = Math.floor(((temp_timer % (3600 * 24)) / 3600) % 10);

      this.mins1 = Math.floor((temp_timer % 3600) / 60 / 10);
      this.mins2 = Math.floor(((temp_timer % 3600) / 60) % 10);

      this.secs1 = Math.floor((temp_timer % 60) / 10);
      this.secs2 = Math.floor((temp_timer % 60) % 10);
    },

    async get_viewing_key_helper() {
      const vks = useVKs();
      let vkey = await vks.getViewingKey(this.contractAddress);
      this.vk = vkey;
    },

    async syncer_function_for_vk() {
      await this.scrtStakepoolGetuser_deposits();
      await this.scrtStakepoolGetUserPastRecords();
      await this.scrtStakepoolGetAvailableForWithdrawl();
    },

    async syncer_function_for_deposit() {
      await this.scrtStakepoolGetTotalRewards();
      await this.scrtStakepoolGetuser_deposits();
    },
    async syncer_function_for_trigger_withdraw_and_redelegate() {
      console.log("called");
      await this.scrtStakepoolGetTotalscrtDeposits();
      await this.scrtStakepoolGetuser_deposits();
      await this.scrtStakepoolGetAvailableForWithdrawl();
    },
    async syncer_function_for_withdraw() {
      await this.scrtStakepoolGetAvailableForWithdrawl();
    },
  },
  messages: {
    async scrtStakepoolCreateViewingKey() {
      this.get_viewing_key_helper();

      if (!this.vk) {
        try {
          const vks = useVKs();
          let vkey = await vks.createViewingKey(this.contractAddress);
          console.log("Inside set or get viewing #scrt_token_def");
          this.vk = vkey;
          console.log(this.vk);
        } catch (err) {
          console.log(err);
        }
      } else {
        // console.log(this.vk);
      }
      this.syncer_function_for_vk();
      console.log(this.vk);
    },
    async scrtStakepoolDeposit(depositAmount) {
      let final_withdraw_amount_in_uscrt = depositAmount.toString();
      const msg = { deposit: {} };
      const transferAmount = [
        {
          amount: final_withdraw_amount_in_uscrt,
          denom: "uscrt",
        },
      ];
      try {
        const res = await this.scrtClient.executeContract(
          this.contractAddress,
          msg,
          "memo",
          transferAmount
        );

        console.log(res);
        console.log(this.user_deposits);
        console.log(this.scrt_total_deposits);

        await this.syncer_function_for_deposit();

        return [
          true,
          final_withdraw_amount_in_uscrt,
          this.scrt_total_deposits,
          this.user_deposits,
          "success",
        ];
      } catch (e) {
        await this.syncer_function_for_deposit();

        console.log(e);
        return [false, 0, 0, 0, e];
      }
    },

    async scrtStakepoolWithdraw(amount) {
      const fees = {
        gas: "140000",
      };
      let final_withdraw_amount_in_uscrt = amount.toString();
      if (final_withdraw_amount_in_uscrt > 0) {
        const msg = { withdraw: { amount: final_withdraw_amount_in_uscrt } };
        try {
          const res = await this.scrtClient.executeContract(
            this.contractAddress,
            msg,
            undefined,
            undefined,
            fees
          );
          await this.syncer_function_for_withdraw();

          return [true, "success"];
        } catch (e) {
          console.log(e);
          await this.syncer_function_for_withdraw();
          return [false, e];
        }
      }
    },

    async scrtStakepoolTriggerWithdraw(amount) {
      const fees = {
        gas: "450000",
      };
      let final_trigger_amount_in_uscrt = amount.toString();
      const msg = {
        trigger_withdraw: { amount: final_trigger_amount_in_uscrt },
      };
      try {
        const res = await this.scrtClient.executeContract(
          this.contractAddress,
          msg,
          undefined,
          undefined,
          fees
        );
        console.log(res);
        await this.syncer_function_for_trigger_withdraw_and_redelegate();
        return [true, this.available_tokens_for_withdrawl];
      } catch (e) {
        await this.syncer_function_for_trigger_withdraw_and_redelegate();
        console.log(e);
        return [false, e];
      }
    },
    async scrtStakepoolredelegate(amount) {
      let final_deposit_amount_in_uscrt = amount.toString();
      let msg = { redelegate: {} };
      if (amount > 0) {
        msg = { redelegate: { amount: final_deposit_amount_in_uscrt } };
      }
      try {
        const res = await this.scrtClient.executeContract(
          this.contractAddress,
          msg,
          undefined,
          undefined,
          fees
        );
        // console.log(res);
      } catch (e) {}
    },
    async claimSscrtStakepoolRewards() {
      const msg = { claim_rewards: {} };
      const res = await this.scrtClient.executeContract(
        this.contractAddress,
        msg
      );
      console.log(res);
    },
  },

  methods: {},
};
