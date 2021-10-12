var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,l=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(s)for(var n of s(t))i.call(t,n)&&o(e,n,t[n]);return e};import{i as r,l as c,m as d,o as u,c as m,e as p,t as f,n as g,p as w,v as h,j as _}from"./vendor.8dcb4a7d.js";import{a as v,b}from"./index.72671413.js";import{B as y}from"./bignumber.f9784317.js";import{_ as k}from"./sefi_logo.0b1ac7f5.js";const j={data:()=>({reduceStakesAmount:void 0,overflow_warning:!1,underflow_warning:!1,on_going_transaction:void 0,successful:void 0,current_reduce_stakes_amount:void 0}),computed:l(l({},r(v,["sefi_token_current_price"])),r(b,["balance","available_tokens_for_withdrawl"])),methods:(x=l({coinConvert:c},d(b,["sefiStakepoolTriggerWithdraw","sefiStakepoolCreateViewingKey","syncer_function_for_trigger_withdraw_and_redelegate"])),S={async reduce_stakes_check(e){let t=new y(e);t=t.multipliedBy(1e6).decimalPlaces(0);let n=new y(this.balance);if(t.isGreaterThan(n))this.overflow_warning=!0;else if(t.isLessThanOrEqualTo(0)||t.isNaN())this.underflow_warning=!0;else{this.on_going_transaction=!0,this.overflow_warning=!1,this.underflow_warning=!1;let e=await this.sefiStakepoolTriggerWithdraw(t);this.successful=e[0],this.successful?(this.on_going_transaction=!1,this.successful=!1,this.$refs.closeBtn.click(),this.clearFields(),this.$emit("sucessfulReduceStakes",{available_tokens_for_withdrawl:this.available_tokens_for_withdrawl,denom:"SEFI",current_reduce_stakes_amount:t.toNumber()})):(await setTimeout(this.syncer_function_for_trigger_withdraw_and_redelegate,5e3),this.clearFields(),this.on_going_transaction=!1,this.$refs.closeBtn.click(),this.$emit("failedReduceStake",{error_message:e[1]}))}},async clearFields(){this.reduceStakesAmount="",this.overflow_warning=!1,this.underflow_warning=!1},async removeWarning(){this.overflow_warning=!1,this.underflow_warning=!1},async Percentage(e){this.reduceStakesAmount=c(c(this.balance,6,"human",6)*e,0,"human",6)}},t(x,n(S)))};var x,S;const C={class:"modal fade","data-bs-backdrop":"static",id:"sefiReduceStakeModal",tabindex:"-1","aria-labelledby":"ScrtModalLabel","aria-hidden":"true"},O={class:"modal-dialog modal-dialog-centered"},P={class:"modal-content deposit-modal-shape"},F={class:"container-fluid deposit-modal-bg deposit-modal-shape p-4"},I={class:"row m-0 p-0 deposit-modal-shape"},A={class:"row m-0 p-0 g-0"},E=p("div",{class:"col-6 d-flex justify-content-start align-items-center"},[p("span",{class:"deposit-modal-heading"},"Reduce Staked")],-1),T={class:"\n                  col-6\n                  d-flex\n                  justify-content-end\n                  align-items-center\n                  white\n                "},B={class:"row m-0 p-0 mt-3 g-0"},R=p("div",{class:"col-4 d-flex justify-content-start align-items-center"},[p("span",{class:"deposit-modal-available"},"Deposited")],-1),V={key:0,class:"\n                  col-8\n                  d-flex\n                  justify-content-end\n                  align-items-center\n                  white\n                "},W={class:"deposit-modal-amount pe-1"},$=p("span",{class:"d-flex align-items-center"},[p("img",{src:k,alt:"LOGO Image",class:"img-fluid mini-logo-size"})],-1),K=_(" SEFI "),L={class:"pool_past_prizes ps-2"},z={key:1,class:"\n                  col-8\n                  d-flex\n                  justify-content-end\n                  align-items-center\n                  white\n                "},D={class:"deposit-modal-amount"},G=p("span",{class:"col-2",style:{"font-size":"20px"}},"🔍",-1),N=p("div",{class:"row m-0 p-0 mt-3 g-0 text-white fw-lighter"},[p("span",{class:""}," This will remove your SEFI tokens from the rewards contract. You will have to withdraw your SEFI to see it in your wallet ")],-1),M={key:0,class:"row m-0 p-0 mt-3"},Y=[p("span",{class:"text-danger"},"*You are trying to Withdraw more than Deposited ",-1)],q={key:1,class:"row m-0 p-0 mt-3"},U=[p("span",{class:"text-danger"},"*Invalid number ",-1)],H={class:"\n                row\n                m-0\n                p-0\n                mt-3\n                deposit-modal-deposit-field deposit-modal-deposit-field-shape\n              "},J={class:"col-9 d-flex justify-content-start align-items-center"},Q=p("div",{class:"\n                  col-3\n                  d-flex\n                  justify-content-end\n                  align-items-center\n                  white\n                "},[p("span",{class:"deposit-modal-deposit-field-tokens"},"SEFI")],-1),X={class:"row g-0 d-flex justify-content-between mt-2"},Z={key:2,class:"row m-0 p-0 mt-3 deposit-modal-deposit-button"},ee={key:3,class:"\n                row\n                m-0\n                p-0\n                mt-3\n                deposit-modal-deposit-button\n                d-flex\n                justify-content-center\n                align-items-center\n              "},te=[p("div",{class:"spinner-border text-light",role:"status"},[p("span",{class:"visually-hidden"},"Loading...")],-1)];j.render=function(e,t,n,s,a,i){return u(),m("div",C,[p("div",O,[p("div",P,[p("div",F,[p("div",I,[p("div",A,[E,p("div",T,[p("button",{type:"button",class:"btn-close white","data-bs-dismiss":"modal","aria-label":"Close",ref:"closeBtn",onClick:t[0]||(t[0]=e=>i.clearFields())},null,512)])]),p("div",B,[R,e.balance?(u(),m("div",V,[p("span",W,f(i.coinConvert(e.balance,6,"human",2)),1),$,K,p("span",L," ($"+f(i.coinConvert(i.coinConvert(e.balance,6,"human",2)*e.sefi_token_current_price,0,"human",2))+")",1)])):(u(),m("div",z,[p("span",D,[G,p("a",{onClick:t[1]||(t[1]=t=>e.sefiStakepoolCreateViewingKey()),class:"createViewingKey"}," Create or Get Viewing Key ")])]))]),N,a.overflow_warning?(u(),m("div",M,Y)):g("",!0),a.underflow_warning?(u(),m("div",q,U)):g("",!0),p("div",H,[p("div",J,[p("span",null,[w(p("input",{class:"deposit-modal-deposit-field -none",type:"number",placeholder:"0.00","placeholder-default":"white","onUpdate:modelValue":t[2]||(t[2]=e=>a.reduceStakesAmount=e),overflow_warning:"false",onClick:t[3]||(t[3]=e=>i.removeWarning())},null,512),[[h,a.reduceStakesAmount]])])]),Q]),p("div",X,[p("button",{class:"\n                  col-2\n                  d-flex\n                  justify-content-center\n                  deposit-modal-amount-percentage\n                ",onClick:t[4]||(t[4]=e=>i.Percentage(.25))}," 25% "),p("button",{class:"\n                  col-2\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                  deposit-modal-amount-percentage\n                ",onClick:t[5]||(t[5]=e=>i.Percentage(.5))}," 50% "),p("button",{class:"\n                  col-2\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                  deposit-modal-amount-percentage\n                ",onClick:t[6]||(t[6]=e=>i.Percentage(.75))}," 75% "),p("button",{class:"\n                  col-2\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                  deposit-modal-amount-percentage\n                ",onClick:t[7]||(t[7]=e=>i.Percentage(1))}," 100% ")]),a.on_going_transaction?(u(),m("div",ee,te)):(u(),m("div",Z,[p("button",{onClick:t[8]||(t[8]=e=>i.reduce_stakes_check(a.reduceStakesAmount)),id:"depositAmount",class:"btn text-white",type:"submit",value:"Submit",min:"0",max:"sefi_token_balance"}," Reduce Stakes ")]))])])])])])};export{j as default};
