import{l as s,o as a,c as e,e as t,t as l}from"./vendor.8a209fa5.js";const o={data:()=>({}),props:["current_reduce_stakes_amount","available_tokens_for_withdrawl","denom"],methods:{coinConvert:s,async withdrawModal(){this.$refs.closeBtn.click(),this.$emit("openWithdrawModal")}}},d={class:"modal fade","data-bs-backdrop":"static",id:"ReduceStakesSuccessModal",tabindex:"-1","aria-labelledby":"ScrtModalLabel","aria-hidden":"true"},c={class:"modal-dialog modal-dialog-centered"},n={class:"modal-content deposit-modal-shape"},i={class:"container-fluid success-modal-bg deposit-modal-shape p-3"},r={class:"row mb-5"},u={class:"row g-0 d-flex justify-content-end"},m={type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"closeBtn"},f=t("div",{class:"row g-0 mt-3"},[t("div",{class:"d-flex justify-content-center"},[t("span",{class:"successfully_deposited_amount"},"Successfully Reduced Stakes!")])],-1),p={class:"row g-0 mt-3"},_={class:"d-flex justify-content-center"},v={class:"successfully_deposited_amount pe-2"},w={class:"successfully_deposited_amount_font-size white"},b={class:"row g-0 mt-3"},h={class:"d-flex justify-content-center"},y=t("span",{class:"pe-2 success_modal-local-font-size white"},"Amount Available For Withdraw ",-1),g={class:"\n                    success_modal-local-font-size\n                    successfully_deposited_amount-bg\n                  "},k={class:"row g-0 mt-3 text-center text-warning btn"};o.render=function(s,o,x,C,j,M){return a(),e("div",d,[t("div",c,[t("div",n,[t("div",i,[t("div",r,[t("div",u,[t("button",m,null,512)]),f,t("div",p,[t("div",_,[t("span",v,l(M.coinConvert(x.current_reduce_stakes_amount,6,"human",2)),1),t("span",w,l(x.denom),1)])]),t("div",b,[t("div",h,[y,t("span",g,l(M.coinConvert(x.available_tokens_for_withdrawl,6,"human",2)),1)])]),t("div",k,[t("a",{onClick:o[0]||(o[0]=s=>M.withdrawModal())},"CLICK HERE TO WITHDRAW")])])])])])])};export{o as default};