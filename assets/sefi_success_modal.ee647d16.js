import{l as s,o as e,c as a,e as o,t,q as d}from"./vendor.8a209fa5.js";const l={data:()=>({}),props:["current_deposits","pool_share","total_deposits","denom"],methods:{coinConvert:s}},n={class:"modal fade","data-bs-backdrop":"static",id:"sefiSuccessModal",tabindex:"-1","aria-labelledby":"ScrtModalLabel","aria-hidden":"true"},c={class:"modal-dialog modal-dialog-centered"},i={class:"modal-content deposit-modal-shape"},r={class:"container-fluid success-modal-bg deposit-modal-shape p-3"},u={class:"row"},p=d('<div class="row g-0 d-flex justify-content-end"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="row g-0 mt-3"><div class="d-flex justify-content-center"><span class="\n                    d-flex\n                    justify-content-center\n                    successfully_deposited_amount\n                  ">Succesfully deposited!</span></div></div>',2),m={class:"row g-0 mt-3"},f={class:"d-flex justify-content-center"},v={class:"successfully_deposited_amount pe-2"},_={class:"successfully_deposited_amount_font-size white"},h={class:"row g-0 mt-3"},b={class:"d-flex justify-content-center"},y=o("span",{class:"pe-2 success_modal-local-font-size white"},"Your share of the pool is ",-1),w={class:"\n                    success_modal-local-font-size\n                    successfully_deposited_amount-bg\n                  "},g={class:"row g-0 mt-3 mb-5"},x={class:"d-flex justify-content-center"},j={class:"pe-2 success_modal-local-font-size white"};l.render=function(s,d,l,C,z,S){return e(),a("div",n,[o("div",c,[o("div",i,[o("div",r,[o("div",u,[p,o("div",m,[o("div",f,[o("span",v,t(S.coinConvert(l.current_deposits,6,"human",1)),1),o("span",_,t(l.denom),1)])]),o("div",h,[o("div",b,[y,o("span",w,t(S.coinConvert(l.pool_share,6,"human",2))+"%",1)])]),o("div",g,[o("div",x,[o("span",j,"You now have "+t(S.coinConvert(l.total_deposits,6,"human",1))+" "+t(l.denom)+" in the Stake Pool! ",1)])])])])])])])};export{l as default};