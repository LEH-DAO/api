const express = require("express");
const path = require("path");
const cors = require("cors");
const {Connection, Keypair, PublicKey,} = require("@solana/web3.js")
const {MangoClient, MANGO_V4_ID,MANGO_V4_MAIN_GROUP,getEquityForMangoAccounts} = require("@lehman-brothers-holdings/markets")
const PORT = process.env.PORT || 5001;
const { AnchorProvider, Wallet } = require('@coral-xyz/anchor');
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const getClient = async () => {
  const admin = new Keypair()

  const options = AnchorProvider.defaultOptions();
  const connection = new Connection("https://florinda-nryifr-fast-mainnet.helius-rpc.com/", options);

  const adminWallet = new Wallet(admin);
  const adminProvider = new AnchorProvider(connection, adminWallet, options);

  return MangoClient.connect(
    adminProvider,
    'mainnet-beta',
    MANGO_V4_ID['mainnet-beta'],
    {
      idsSource: 'get-program-accounts',
    }
  );

}
getSymbol = (token_index)=>{
  return "SOL";
}
getTokenDataItem = (token_index)=>{
}


express()
  .use(cors({ origin: "*" }))
  .get("/data/v4/group-metadata", (req, res) =>
  res.send({
    "banks": [
    {
    "publicKey": "3tXzJsEsoobufPTQNy1STrRCG558tveLfESvXYVycs5m",
    "tokenIndex": 0,
    "tokenName": "USDC",
    "vault": "EKfsB6dq5NHK9bBjENt7JfhDz2K274QG5wv62JeAp4Fw",
    "mintDecimals": 6,
    "oracle": "Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD",
    "price": 0.99959988999999893622,
    "uiPrice": 0.99959989,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 0,
    "indexedBorrows": 0,
    "indexLastUpdated": "Sun Feb 25 2024 20:58:43 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Sun Feb 25 2024 20:58:43 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0,
    "maxRate": 0.50999999046325683594,
    "util0": 0,
    "rate0": 0,
    "util1": 0,
    "rate1": 0,
    "loanFeeRate": 0,
    "loanOriginationFeeRate": 0,
    "maintAssetWeight": 0,
    "initAssetWeight": 0,
    "maintLiabWeight": 1,
    "initLiabWeight": 1,
    "liquidationFee": 0,
    "uiDeposits": 0,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0
    },
    {
    "publicKey": "DdX9qXypNoESZM2Z35SKfqC1x96PumwAUbkiYRHZYL98",
    "tokenIndex": 2,
    "tokenName": "UXD",
    "vault": "81FAA8CfSQV4L4ABms5QsKMcefq7sRSB9121Z15EJuLp",
    "mintDecimals": 6,
    "oracle": "5Q2eJrnikAw1UBd3cJoBdkjB9Gqq8xjRjYhT3FiBqjPN",
    "price": 0.99970115499922229674,
    "uiPrice": 0.999701154999225,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 0,
    "indexedBorrows": 0,
    "indexLastUpdated": "Thu Feb 29 2024 22:37:19 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Thu Feb 29 2024 22:37:19 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 0.94999998807907104492,
    "initAssetWeight": 0.89999997615814208984,
    "maintLiabWeight": 1.04999995231628417969,
    "initLiabWeight": 1.10000002384185791016,
    "liquidationFee": 0.02500000037252902985,
    "uiDeposits": 0,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.00050000002374872565
    },
    {
    "publicKey": "9rrDGQpD5LqHJXamMSK1LyvhQKKkv4T4XexdvU8WwoTh",
    "tokenIndex": 4,
    "tokenName": "SOL",
    "vault": "8sDk9R8puFWgpZyTT8vBmjwQo2yXDmvnzsKX62di134c",
    "mintDecimals": 9,
    "oracle": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG",
    "price": 0.16417141250000000241,
    "uiPrice": 164.1714125,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 2086.02156192247506893978,
    "indexedBorrows": 0,
    "indexLastUpdated": "Thu Feb 29 2024 23:54:24 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Thu Feb 29 2024 23:54:24 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 0.89999997615814208984,
    "initAssetWeight": 0.80000001192092895508,
    "maintLiabWeight": 1.10000002384185791016,
    "initLiabWeight": 1.20000004768371582031,
    "liquidationFee": 0.05000000074505805969,
    "uiDeposits": 2.086021561922472,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.00050000002374872565
    },
    {
    "publicKey": "FvSuwWFv66824KpVKK3faVmUS3G8L82hgn1uD5vTDqpx",
    "tokenIndex": 5,
    "tokenName": "MSOL",
    "vault": "7usaJhpoMHqgKnG3RyGaDPGfv7HJgaKfivz6skoxsZ2Z",
    "mintDecimals": 9,
    "oracle": "E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9",
    "price": 0.19246881649999991737,
    "uiPrice": 192.4688165,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 0,
    "indexedBorrows": 0,
    "indexLastUpdated": "Thu Feb 29 2024 23:55:54 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Thu Feb 29 2024 23:55:54 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 0.89999997615814208984,
    "initAssetWeight": 0.80000001192092895508,
    "maintLiabWeight": 1.10000002384185791016,
    "initLiabWeight": 1.20000004768371582031,
    "liquidationFee": 0.05000000074505805969,
    "uiDeposits": 0,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.00050000002374872565
    },
    {
    "publicKey": "SyUFjHTNe7Uu5DSkVbyyUDA41B9LVjwx8Dotx2QvLTy",
    "tokenIndex": 6,
    "tokenName": "LEH",
    "vault": "25moJXk8AdcJPd5F1gdCW8dPxG3Pzgzg1TmR6tzLoSak",
    "mintDecimals": 6,
    "oracle": "FGewqemEmbayN6eyWByz3JuHtZkkaRgFfSTMFejqaFys",
    "price": 0.0043901665253400779,
    "uiPrice": 0.0043901665253409,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 1092553.87013586553722177541,
    "indexedBorrows": 0,
    "indexLastUpdated": "Fri Mar 01 2024 16:16:07 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Fri Mar 01 2024 16:16:07 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 0.89999997615814208984,
    "initAssetWeight": 0.80000001192092895508,
    "maintLiabWeight": 1.10000002384185791016,
    "initLiabWeight": 1.20000004768371582031,
    "liquidationFee": 0.05000000074505805969,
    "uiDeposits": 1092553.8701358656,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.00050000002374872565
    },
    {
    "publicKey": "62DDYZfZhpEEuyUxwfWCvdM9eWgwANB4AiLLZX1QUqbJ",
    "tokenIndex": 7,
    "tokenName": "LST",
    "vault": "ByeEbUnACSs3nQsCgD6QHy8SEuRYjYR58CWqqNYoH8h1",
    "mintDecimals": 9,
    "oracle": "2H6gWKxJuoFjBS4REqNm4XRa7uVFf9n9yKEowpwh7LML",
    "price": 0.2104071854599993685,
    "uiPrice": 210.40718546,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 1891.54616800000000154114,
    "indexedBorrows": 0,
    "indexLastUpdated": "Sat Mar 02 2024 09:50:01 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Sat Mar 02 2024 09:50:01 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 1,
    "initAssetWeight": 1,
    "maintLiabWeight": 1,
    "initLiabWeight": 1,
    "liquidationFee": 0,
    "uiDeposits": 1.8915461679999979,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.00050000002374872565
    },
    {
    "publicKey": "FNc8AWt7yS1k1RAjWY5yiEoUFGYytx1pTVfLdxwkqMrz",
    "tokenIndex": 8,
    "tokenName": "BTC",
    "vault": "CewThd76ZGJkmwnUEVXZFztbnBiKcChFX6LXhCoYA1g9",
    "mintDecimals": 8,
    "oracle": "GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU",
    "price": 730.56309999999996307452,
    "uiPrice": 73056.31,
    "depositIndex": 1000000,
    "borrowIndex": 1000000,
    "indexedDeposits": 0,
    "indexedBorrows": 0,
    "indexLastUpdated": "Sun Mar 03 2024 13:21:09 GMT-0500 (Eastern Standard Time)",
    "bankRateLastUpdated": "Sun Mar 03 2024 13:21:09 GMT-0500 (Eastern Standard Time)",
    "avgUtilization": 0,
    "adjustmentFactor": 0.00400000018998980522,
    "maxRate": 0.5,
    "util0": 0.5,
    "rate0": 0.01799999922513961792,
    "util1": 0.80000001192092895508,
    "rate1": 0.05000000074505805969,
    "loanFeeRate": 0.00050000002374872565,
    "loanOriginationFeeRate": 0.00499999988824129105,
    "maintAssetWeight": 1,
    "initAssetWeight": 1,
    "liquidationFee": 0,
    "uiDeposits": 0,
    "uiBorrows": 0,
    "getDepositRate": 0,
    "getBorrowRate": 0.0000
    }]}))
  .get("data/v4/stats/liqors-over_period", (req, res) => {
    return res.json([]);
  })
  .get("/data/v4/user-data/profile-details", (req, res) => {
    const walletPk = req.query["wallet-pk"];
    if (!walletPk) {
      return res
        .status(400)
        .json({ error: "wallet-pk query parameter is required" });
    }
    const responseData = {
      wallet_pk: walletPk,
      profile_name: "",
      trader_category: "Trader",
      profile_image_url: null,
    };
    res.json(responseData);
  })
  
  .get("/data/v4/user-data/following", (req, res) => {
    const walletPk = req.query["wallet-pk"];
    if (!walletPk) {
      return res
        .status(400)
        .json({ error: "wallet-pk query parameter is required" });
    }
    res.json({  });
  })

  .get("/whitelist/v1/isWhiteListed", (req, res) => {
    const walletPk = req.query["wallet"];
    if (!walletPk) {
      return res
        .status(400)
        .json({ error: "wallet-pk query parameter is required" });
    }
    res.json({ found: false });
  })
  .get("/data/health/redis", (req, res) => {
    res.send("200");
  })
  .get("/data/v4/stats/perp-market-summary", (req, res) => {
    res.send({});
  })
  .get("/data/v4/stats/performance_account", (req, res) => {
    res.json({});
  })
  .get("/data/v4/stats/swap-history", (req, res) => {
    res.json([]);
  })
  .get("/data/v4/stats/activity-feed", (req, res) => {
    res.json([]);
  })
  .get("/data/v4/stats/interest-account-total", (req, res) => {
    res.json({});
  })  
  .get("/data/v4/perp-historical-stats", (req, res) => {
    const walletPk = req.query["mango-group"];

    res.json({});
  })
  .get("/data/v4/token-historical-stats", async (req, res) => {
      try {
        // Example usage of the program
        const client = await getClient();
        const admin=[new PublicKey("ESEmCDgu4qjdxbpoVrvUsaiLbLhd3N6xwEqbeAnqykNo")]
        const groupAccount=await client.getGroup(new PublicKey(MANGO_V4_MAIN_GROUP))    
        const tokens = groupAccount.tokens;
        console.log(Object.keys(groupAccount),"GROUP");
        console.log(groupAccount.banksMapByTokenIndex)
        const symbols = ["USDC","USDT","USDX","","SOL","MSOL","LEH","LST","BTC","LEH","WIF","BONK"];
        const data = Array.from(groupAccount.banksMapByTokenIndex.values()).map(([x])=>({   
          deposit_rate:x.getDepositRate().toNumber(),mango_group:MANGO_V4_MAIN_GROUP, ...x,collected_fees:x.collectedFeesNative.toNumber(),total_borrows:x.indexedBorrows.toNumber(),total_deposits:x.indexedDeposits.toNumber(),stable_price:x.price.toNumber(),price:x.price.toNumber(),symbol:symbols[x.tokenIndex],token_index:x.tokenIndex.toString()}))
        // const data = {
        //   token_index:
        //     symbol,
        //     dateHour,
        //     price: tokenStats.price,
        //     stablePrice: tokenStats.stablePrice,
        //     totalDeposits: tokenStats.totalDeposits,
        //     totalBorrows: tokenStats.totalBorrows,
        //     collectedFees: tokenStats.collectedFees,
        //     depositApr: tokenStats.depositApr,
        //     borrowApr: tokenStats.borrowApr,
        //     depositRate: tokenStats.depositRate,
        //     borrowRate: tokenStats.borrowRate
        // };    
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })
.get("/data/v4/token-historical-stats", (req, res) => {
    const walletPk = req.query["mango-group"];
    res.json({});
  }).get("/data/v4/perp-historical-stats", (req, res) => {
    const walletPk = req.query["mango-group"];
    res.json({});
  })
  .get("/data/v4/stats/performance_account",(req,res) =>{
    res.json({})
  })
  .get("/data/v4/stats/spot-market-summary", (req, res) => {
    fetch("https://api.mngo.cloud/data/v4/stats/spot-market-summary").then((response) => {
    response.json().then((data) => {
      res.json(data);
    })
    })
  })
  .get("/data/v4/stats/perp-market-summary", (req, res) => {
    fetch("https://api.mngo.cloud/data/v4/stats/perp-market-summary").then((response) => {
    response.json().then((data) => {
      res.json(data);
    })
    })
  })
  .get("/data/health/redis", (req, res) => {
    res.send("200");
  })
  .get("/data/v4/seasons/season-id",(req,res)=>{
    res.send("200");
  })
  .get("/data/health/db", (req, res) => {
    res.send("200");
  })
  .get("/data/health/server", (req, res) => {
    res.send("200");
  })
  .get("/data/v4/risk/listed-tokens-one-week-price-impacts", (req, res) => {
    fetch("https://api.mngo.cloud/data/v4/risk/listed-tokens-one-week-price-impacts").then((response) => {
    response.json().then((data) => {
      res.json(data);
    })
    })
  })
  .get("data/v4/token-leaderboard",async ()=>{
    try {
      const { mintId, limit } = req.query;
  
      // Create a connection to the Solana cluster
      const connection = new Connection('https://api.mainnet-beta.solana.com');
  
      // Create a Mango client instance
      const mangoClient = new MangoClient(connection);
  
      // Get the Mango group
      const mangoGroup = await mangoClient.getMangoGroup(new PublicKey(MANGO_V4_MAIN_GROUP));
  
      // Get the token index for the specified mint ID
      const tokenIndex = mangoGroup.getTokenIndex(new PublicKey(mintId));
  
      // Get the root banks for the Mango group
      const rootBanks = await mangoGroup.loadRootBanks(connection);
  
      // Get the node banks for the specified token index
      const nodeBanks = await rootBanks[tokenIndex].loadNodeBanks(connection);
  
      // Retrieve the top holders
      const topHolders = [];
      for (const nodeBank of nodeBanks) {
        const [publicKey, accountInfo] = await nodeBank.loadLargestTokenAccounts(connection, limit);
        topHolders.push(...accountInfo.map((account, index) => ({
          publicKey: publicKey[index].toString(),
          amount: account.amount.toNumber()
        })));
      }
  
      // Sort the top holders by amount in descending order
      topHolders.sort((a, b) => b.amount - a.amount);
  
      // Send the top holders as the response
      res.json(topHolders.slice(0, limit));
    } catch (error) {
      console.error('Error retrieving top holders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }  
  })
  .get("/data/v4/user-data/private-accounts", (req, res) => {
    res.send({ private_accounts: [] });
  })
  .get("/data/v4/user-data/private-accounts", (req, res) => {
    res.send({ private_accounts: [] });
  })
  .get("/data/v4/leaderboard-token-deposits",async (req,res)=>{
    const index = parseInt(req.query["token-index"]);
    try {
      // Example usage of the program
      const client = await getClient();
      const admin=[new PublicKey("ESEmCDgu4qjdxbpoVrvUsaiLbLhd3N6xwEqbeAnqykNo")]
      const groupAccount=await client.getGroup(new PublicKey(MANGO_V4_MAIN_GROUP))    
      const tokens = groupAccount.tokens;
      console.log(index,"INDEX");
      const [bank] = groupAccount.banksMapByTokenIndex.get(index) ;
      console.log(bank,"BANK");
      const info= await client.getAllMangoAccounts(groupAccount,false)
      const depositors=info.map(x=>({token_index:index,price:bank.uiPrice,value:x.getTokenDepositsUi(bank)*(bank.uiPrice),wallet_pk:x.owner,mango_account:x.publicKey})).filter(x=>x.value!==0).sort((a, b) => b.value - a.value)
      res.json(depositors)
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .get("/data/v4/leaderboard-token-borrows",async (req,res)=>{
    const index = parseInt(req.query["token-index"]);
    try {
      // Example usage of the program
      const client = await getClient();
      const admin=[new PublicKey("ESEmCDgu4qjdxbpoVrvUsaiLbLhd3N6xwEqbeAnqykNo")]
      const groupAccount=await client.getGroup(new PublicKey(MANGO_V4_MAIN_GROUP))    
      const tokens = groupAccount.tokens;
      console.log(index,"INDEX");
      const [bank] = groupAccount.banksMapByTokenIndex.get(index) ;
      console.log(bank,"BANK");
      const info= await client.getAllMangoAccounts(groupAccount,false)
      const borrowers=info.map(x=>({token_index:index,price:bank.uiPrice,value:x.getTokenBorrowsUi(bank)*(bank.uiPrice),wallet_pk:x.owner,mango_account:x.publicKey})).filter(x=>x.value!==0).sort((a, b) => b.value - a.value)
      res.json(borrowers)
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .get("/data/v4/user-data/following",(req,res)=>{
    res.send([])
  })
  .post("/lite-rpc/v1/", (req, res) => {
    fetch("https://api.mngo.cloud/lite-rpc/v1/",{method:"POST"}).then((response) => {
    response.json().then((data) => {
      res.json(data);
    })
    })
  })
  .get("/data/v4/seasons/season-leaderboard-position",()=>{
    const walletPk = req.query["mango-account"];
    res.send({"mango_account":walletPk,"tier":"seed","total_points_pre_multiplier":0,"total_points":0,"rank":294,"tier_rank":205,"total_season_accounts":336,"tier_season_accounts":246})
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
