import{l as s,o as a,c as e,e as t,t as l,n as o}from"./vendor.8dcb4a7d.js";const d={data:()=>({}),props:["current_reduce_stakes_amount","available_tokens_for_withdrawl","denom"],methods:{coinConvert:s,async withdrawModal(){this.$refs.closeBtn.click(),this.$emit("openWithdrawModal")}}},c={class:"modal fade","data-bs-backdrop":"static",id:"ReduceStakesSuccessModal",tabindex:"-1","aria-labelledby":"ScrtModalLabel","aria-hidden":"true"},n={class:"modal-dialog modal-dialog-centered"},i={class:"modal-content deposit-modal-shape"},r={class:"container-fluid success-modal-bg deposit-modal-shape p-3"},u={class:"row mb-5"},m={class:"row g-0 d-flex justify-content-end"},f={type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"closeBtn"},p=t("div",{class:"row g-0 mt-3"},[t("div",{class:"d-flex justify-content-center"},[t("span",{class:"successfully_deposited_amount"},"Successfully Reduced Stakes!")])],-1),_={class:"row g-0 mt-3"},v={class:"d-flex justify-content-center"},b={class:"successfully_deposited_amount pe-2"},w={class:"successfully_deposited_amount_font-size white"},h={class:"row g-0 mt-3"},y={class:"d-flex justify-content-center"},g=t("span",{class:"pe-2 success_modal-local-font-size white"},"Amount Available For Withdraw ",-1),k={class:"\n                    success_modal-local-font-size\n                    successfully_deposited_amount-bg\n                  "},x={key:0,class:"row g-0 mt-3 text-center text-warning btn"};d.render=function(s,d,C,S,j,M){return a(),e("div",c,[t("div",n,[t("div",i,[t("div",r,[t("div",u,[t("div",m,[t("button",f,null,512)]),p,t("div",_,[t("div",v,[t("span",b,l(M.coinConvert(C.current_reduce_stakes_amount,6,"human",2)),1),t("span",w,l(C.denom),1)])]),t("div",h,[t("div",y,[g,t("span",k,l(M.coinConvert(C.available_tokens_for_withdrawl,6,"human",2)),1)])]),"SEFI"==C.denom?(a(),e("div",x,[t("a",{onClick:d[0]||(d[0]=s=>M.withdrawModal())},"CLICK HERE TO WITHDRAW")])):o("",!0)])])])])])};export{d as default};
