var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,n=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&r(e,s,t[s]);if(o)for(var s of o(t))i.call(t,s)&&r(e,s,t[s]);return e};import{I as l,k as c,a as d,B as _,J as h,d as f,m as u,r as p,o as w,c as k,b as g,e as m,f as y,g as S,h as v}from"./vendor.8a209fa5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const b={},A=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/Stakepool-Frontend/${e}`)in b)return;b[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};const E={gas:"810000"},M={state:{start_time:void 0,end_time:void 0,current_time:void 0,balance:0,available_tokens_for_withdrawl:0,total_rewards:0,total_deposits:0,vk:void 0,wallet_address:void 0,past_rewards:void 0,user_past_records:void 0,time_left:0,days1:0,days2:0,hours1:0,hours2:0,mins1:0,mins2:0,secs1:0,secs2:0},queries:{async sefiStakepoolPoolViewEntryPoint(){await this.sefiStakepoolGetLotteryInfo(),await this.sefiStakepoolGetTotalSefiRewards()},async sefiStakepoolAccountViewEntryPoint(){this.get_viewing_key_helper(),this.syncer_function_for_vk()},async sefiStakepoolGetLotteryInfo(){const e={lottery_info:{}};let t;try{t=await this.scrtClient.queryContract(this.contractAddress,e)}catch(s){console.log(s)}this.start_time=t.lottery_info.start_height,this.end_time=t.lottery_info.end_height,await this.sefiStakepoolGetLotteryInfoHelper()},async sefiStakepoolGetTotalSefiDeposits(){const e={total_deposits:{}};let t;try{t=await this.scrtClient.queryContract(this.contractAddress,e)}catch(s){console.log(s)}this.total_deposits=t.total_deposits.deposits},async sefiStakepoolGetPublicPastRewards(){const e={past_all_results:{}};let t;try{t=await this.scrtClient.queryContract(this.contractAddress,e)}catch(i){console.log(i)}let s=[];s=t.past_results.past_rewards,console.log(s),this.past_rewards=s;for(var o=0;o<s.length;o++){console.log("working"),this.past_rewards[o][0]=s[o][0];var a=new Date(1e3*s[o][1]).toLocaleDateString("en-US",{month:"long",day:"numeric"});s[o][1]=a}this.past_rewards=s,console.log(this.past_rewards),console.log(s)},async sefiStakepoolGetTotalSefiRewards(){await this.sefiStakepoolGetTotalSefiDeposits(),console.log("Total Sefi staked",typeof this.total_deposits),this.total_deposits>0&&(this.total_rewards=.48*this.total_deposits/365*7,this.total_rewards=this.total_rewards.toString(),console.log("TOTAL rewards",typeof this.total_rewards))},async sefiStakepoolGetBalance(){const e=l().address;this.wallet_address=e,this.vk||await this.get_viewing_key_helper();const t={balance:{address:this.wallet_address,key:this.vk}},s=await this.scrtClient.queryContract(this.contractAddress,t);this.balance=s.balance.amount},async sefiStakepoolGetAvailableForWithdrawl(){const e=l().address;this.wallet_address=e,this.vk||await this.get_viewing_key_helper();const t={available_tokens_for_withdrawl:{address:this.wallet_address,key:this.vk}};let s;try{s=await this.scrtClient.queryContract(this.contractAddress,t),this.available_tokens_for_withdrawl=s.available_tokens_for_withdrawl.amount}catch(o){console.log(o)}},async sefiStakepoolGetUserPastRecords(){const e=l().address;this.wallet_address=e,this.vk||await this.get_viewing_key_helper(),console.log(this.wallet_address),console.log(this.vk);const t={user_past_records:{address:this.wallet_address,key:this.vk}};let s;try{s=await this.scrtClient.queryContract(this.contractAddress,t)}catch(r){console.log(r)}console.log(s);let o=[];o=s.user_past_records.winning_history,console.log(o),this.user_past_records=o;for(var a=0;a<o.length;a++){console.log("working"),this.user_past_records[a][0]=o[a][0];var i=new Date(1e3*o[a][1]).toLocaleDateString("en-US",{month:"long",day:"numeric"});o[a][1]=i}this.user_past_records=o,console.log(this.user_past_records),console.log(o)},async sefiStakepoolGetLotteryInfoHelper(){const e=new Date;e.toUTCString(),e.toISOString(),this.current_time=Math.floor(e/1e3),this.time_left=this.end_time-this.current_time,this.time_left<0&&(this.time_left=0)},async sefiStakepoolSyncTimer(){this.current_time+=1,this.time_left-=1;let e=this.time_left;this.time_left<0&&(e=0,this.time_left<-20&&(this.sefiStakepoolGetLotteryInfo(),this.time_left=0)),this.days1=Math.floor(e/86400/10),this.days2=Math.floor(e/86400%10),this.hours1=Math.floor(e%86400/3600/10),this.hours2=Math.floor(e%86400/3600%10),this.mins1=Math.floor(e%3600/60/10),this.mins2=Math.floor(e%3600/60%10),this.secs1=Math.floor(e%60/10),this.secs2=Math.floor(e%60%10)},async get_viewing_key_helper(){const e=c();let t=await e.getViewingKey(this.contractAddress);this.vk=t},async syncer_function_for_vk(){await this.sefiStakepoolGetBalance(),await this.sefiStakepoolGetUserPastRecords(),await this.sefiStakepoolGetAvailableForWithdrawl()},async syncer_function_for_deposit(){await this.sefiStakepoolGetTotalSefiDeposits(),await this.sefiStakepoolGetBalance()},async syncer_function_for_trigger_withdraw_and_redelegate(){await this.sefiStakepoolGetTotalSefiDeposits(),await this.sefiStakepoolGetBalance(),await this.sefiStakepoolGetAvailableForWithdrawl()},async syncer_function_for_withdraw(){await this.sefiStakepoolGetAvailableForWithdrawl()}},messages:{async sefiStakepoolCreateViewingKey(){if(this.get_viewing_key_helper(),this.vk)console.log(this.vk);else try{const e=c();let t=await e.createViewingKey(this.contractAddress);console.log("Inside set or get viewing #sefi_token_def"),this.vk=t,console.log(this.vk)}catch(e){console.log(e)}this.syncer_function_for_vk()},async sefiStakepoolDeposit(e){let t=(1e6*e).toString();let s;const o={send:{recipient:this.contractAddress,amount:t,msg:btoa(JSON.stringify({deposit:{}}))}};try{return s=await this.scrtClient.executeContract(C,o,void 0,void 0,E),await this.syncer_function_for_deposit(),[!0,t,this.total_deposits,this.balance,"sucess"]}catch(a){return console.log(a),[!1,0,0,0,a]}},async sefiStakepoolWithdraw(e){let t=(1e6*e).toString();if(t>0){const e={withdraw:{amount:t}};try{await this.scrtClient.executeContract(this.contractAddress,e,void 0,void 0,E);return await this.syncer_function_for_withdraw(),[!0,"success"]}catch(s){return console.log("Sefi withdraw ERROR"),[!1,s]}}},async sefiStakepoolTriggerWithdraw(e){const t={trigger_withdraw:{amount:(1e6*e).toString()}};try{const e=await this.scrtClient.executeContract(this.contractAddress,t,void 0,void 0,E);return console.log(e),await this.syncer_function_for_trigger_withdraw_and_redelegate(),[!0,this.available_tokens_for_withdrawl]}catch(s){return console.log(s),[!1,s]}},async sefiStakepoolredelegate(e){let t=(1e6*e).toString(),s={redelegate:{}};e>0&&(s={redelegate:{amount:t}});try{const e=await this.scrtClient.executeContract(this.contractAddress,s,void 0,void 0,E);console.log(e)}catch(o){}}},methods:{}},P={state:{sefi_token_balance:void 0,sefi_token_keys:void 0,sefi_token_current_price:void 0,sefi_token_balance_in_usd:void 0,sefi_token_wallet_adress:void 0},queries:{async getSefiContractKey(){const e=l(),t=c().getViewingKey(this.contractAddress);t||console.log("Key not found");const s=e.address;this.sefi_token_wallet_adress=s,this.sefi_token_key=t},async getSefiContractBalance(){await this.getSefiContractKey(),await this.getCurrentSefiPrice();const e={balance:{address:this.sefi_token_wallet_adress,key:this.sefi_token_key}},t=await this.scrtClient.queryContract(this.contractAddress,e);this.sefi_token_balance=t.balance.amount,this.sefi_token_balance_in_usd=this.sefi_token_balance/1e6*this.sefi_token_current_price},async getCurrentSefiPrice(){await d.get("https://api.coingecko.com/api/v3/simple/price?ids=secret-finance&vs_currencies=usd").then((e=>this.sefi_token_current_price=e.data["secret-finance"].usd))}},messages:{async createOrGetViewingKey(){const e=c(),t=await e.getViewingKey(this.contractAddress);if(t)this.sefi_token_key=t;else{const t=await e.createViewingKey(this.contractAddress);console.log("Inside set or get viewing #sefi_token_def"),this.sefi_token_key=t,console.log(this.sefi_token_key)}await this.getSefiContractBalance()},async createViewingKey(){const e=await vks.createViewingKey(this.contractAddress);console.log("Inside set or get viewing #sefi_token_def"),this.sefi_token_key=e,console.log(this.sefi_token_key)}}},C="secret12q2c5s5we5zn9pq43l0rlsygtql6646my0sqfm",D=_("SefiStakepool","secret1xj3v5q0q0p5khvark9hmcjrdxrjgh9zqsq7lhg",M),R=h("SefiContract",C,P),O={data:()=>({clickOpen:!0,current_deposits:void 0,pool_share:void 0,total_deposits:void 0,denom:void 0,error_message:void 0,current_reduce_stakes_amount:void 0,available_tokens_for_withdrawl:void 0}),components:{Heading:f((()=>A((()=>import("./heading.996469a4.js")),["assets/heading.996469a4.js","assets/vendor.8a209fa5.js"]))),PageContent:f((()=>A((()=>import("./page_content.39d62535.js")),["assets/page_content.39d62535.js","assets/vendor.8a209fa5.js"]))),Footing:f((()=>A((()=>import("./footing.1a2e1590.js")),["assets/footing.1a2e1590.js","assets/vendor.8a209fa5.js"]))),ScrtDepositModal:f((()=>A((()=>import("./scrt_deposit_modal.c0ef7b65.js")),["assets/scrt_deposit_modal.c0ef7b65.js","assets/vendor.8a209fa5.js"]))),SefiDepositModal:f((()=>A((()=>import("./sefi_deposit_modal.b2b48ef4.js")),["assets/sefi_deposit_modal.b2b48ef4.js","assets/vendor.8a209fa5.js","assets/vk.02e351a6.js"]))),DepositSuccessModal:f((()=>A((()=>import("./sefi_success_modal.ee647d16.js")),["assets/sefi_success_modal.ee647d16.js","assets/vendor.8a209fa5.js"]))),SefiWithdrawModal:f((()=>A((()=>import("./sefi_withdraw_modal.55bc15aa.js")),["assets/sefi_withdraw_modal.55bc15aa.js","assets/vendor.8a209fa5.js","assets/vk.02e351a6.js"]))),ScrtReduceStakeModal:f((()=>A((()=>import("./scrt_reducestake_modal.1664b7d8.js")),["assets/scrt_reducestake_modal.1664b7d8.js","assets/vendor.8a209fa5.js"]))),ScrtWithdrawModal:f((()=>A((()=>import("./scrt_withdraw_modal.09f3696b.js")),["assets/scrt_withdraw_modal.09f3696b.js","assets/vendor.8a209fa5.js"]))),SefiReduceStakeModal:f((()=>A((()=>import("./sefi_reducestake_modal.e78919f6.js")),["assets/sefi_reducestake_modal.e78919f6.js","assets/vendor.8a209fa5.js","assets/vk.02e351a6.js"]))),FailedModal:f((()=>A((()=>import("./failture_modal.a1d86974.js")),["assets/failture_modal.a1d86974.js","assets/vendor.8a209fa5.js"]))),ReduceStakedSuccessModal:f((()=>A((()=>import("./reduce_stakes_modal.372a1967.js")),["assets/reduce_stakes_modal.372a1967.js","assets/vendor.8a209fa5.js"])))},created(){this.sefiStakepoolPoolViewEntryPoint(),this.sefiStakepoolAccountViewEntryPoint()},mounted(){this.timer=window.setInterval(this.sefiStakepoolSyncTimer,1e3),this.timer2=window.setTimeout(this.getSefiContractBalance,1e3)},methods:(T=n(n({},u(D,["sefiStakepoolSyncTimer","sefiStakepoolPoolViewEntryPoint","sefiStakepoolAccountViewEntryPoint"])),u(R,["getSefiContractBalance"])),L={async depositSuccessModal({current_deposits:e,denom:t,pool_share:s,total_deposits:o}){this.current_deposits=e,this.pool_share=s,this.total_deposits=o,this.denom=t,this.$refs.DepositSuccessModalBtn.click()},async reduceStakesSuccessModal({current_reduce_stakes_amount:e,denom:t,available_tokens_for_withdrawl:s}){this.current_reduce_stakes_amount=e,this.available_tokens_for_withdrawl=s,this.denom=t,this.$refs.ReduceStakesSuccessModalBtn.click()},async failureModal({error_message:e}){this.error_message=e,this.$refs.failtureModalBtn.click()}},t(T,s(L)))};var T,L;const V={class:"vh-100"},I={"data-bs-toggle":"modal","data-bs-target":"#ReduceStakesSuccessModal",ref:"ReduceStakesSuccessModalBtn"},j={"data-bs-toggle":"modal","data-bs-target":"#sefiSuccessModal",ref:"DepositSuccessModalBtn"},G={"data-bs-toggle":"modal","data-bs-target":"#FailtureModal",ref:"failtureModalBtn"};O.render=function(e,t,s,o,a,i){const r=p("Heading"),n=p("PageContent"),l=p("Footing"),c=p("ScrtDepositModal"),d=p("SefiDepositModal"),_=p("DepositSuccessModal"),h=p("ReduceStakedSuccessModal"),f=p("ScrtWithdrawModal"),u=p("SefiWithdrawModal"),y=p("ScrtReduceStakeModal"),S=p("SefiReduceStakeModal"),v=p("FailedModal");return w(),k("div",V,[g(r),g(n,{class:"overflow-auto"}),g(l),g(c),g(d,{onSucessfulDeposit:i.depositSuccessModal,onFailedDeposit:i.failureModal},null,8,["onSucessfulDeposit","onFailedDeposit"]),g(_,{current_deposits:a.current_deposits,denom:a.denom,pool_share:a.pool_share,total_deposits:a.total_deposits},null,8,["current_deposits","denom","pool_share","total_deposits"]),g(h,{available_tokens_for_withdrawl:a.available_tokens_for_withdrawl,denom:a.denom,current_reduce_stakes_amount:a.current_reduce_stakes_amount},null,8,["available_tokens_for_withdrawl","denom","current_reduce_stakes_amount"]),g(f),g(u,{onFailedWithdraw:i.failureModal},null,8,["onFailedWithdraw"]),g(y),g(S,{onSucessfulReduceStakes:i.reduceStakesSuccessModal,onFailedReduceStake:i.failureModal},null,8,["onSucessfulReduceStakes","onFailedReduceStake"]),g(v,{error_message:a.error_message},null,8,["error_message"]),m("div",I,null,512),m("div",j,null,512),m("div",G,null,512)])};const q="/Stakepool-Frontend",F=[{path:q+"/",name:"Pools",component:()=>A((()=>import("./Pools.ebc77f4f.js")),["assets/Pools.ebc77f4f.js","assets/vendor.8a209fa5.js","assets/logo.45843e63.js","assets/sefi_logo.0b1ac7f5.js","assets/scrt_deposit_modal.c0ef7b65.js"])},{path:q+"/accounts",name:"Accounts",component:()=>A((()=>import("./Accounts.b0c4b6a9.js")),["assets/Accounts.b0c4b6a9.js","assets/vendor.8a209fa5.js","assets/logo.45843e63.js","assets/vk.02e351a6.js","assets/sefi_logo.0b1ac7f5.js","assets/scrt_deposit_modal.c0ef7b65.js","assets/sefi_deposit_modal.b2b48ef4.js"])},{path:q+"/scrtpool",name:"SCRTPOOL",component:()=>A((()=>import("./scrt_pool_sidekick.90ba8472.js")),["assets/scrt_pool_sidekick.90ba8472.js","assets/logo.45843e63.js","assets/vendor.8a209fa5.js"])},{path:q+"/sefipool",name:"Sefi pool",component:()=>A((()=>import("./sefi_pool_sidekick.e795df25.js")),["assets/sefi_pool_sidekick.e795df25.js","assets/sefi_logo.0b1ac7f5.js","assets/vendor.8a209fa5.js"])}],B=y({history:S(),routes:F,linkActiveClass:"active",linkExactActiveClass:"exact-active"});v({restUrl:"https://api.holodeck.stakeordie.com"},O,((e,t)=>{e.use(B)}));export{D as a,R as u};