"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[624],{1624:(P,l,i)=>{i.r(l),i.d(l,{HomePage:()=>b});var g=i(467),n=i(4438),u=i(70),e=i(2801),d=i(5079),r=i(5873),_=i(6234);function h(a,c){if(1&a&&(n.j41(0,"ion-buttons",1)(1,"ion-button",16),n.nrm(2,"ion-icon",17),n.j41(3,"ion-badge",11)(4,"ion-text",18),n.EFF(5),n.k0s()()()()),2&a){const s=n.XpG();n.R7$(5),n.SpI(" ",s.totalItems," ")}}let b=(()=>{var a;class c{constructor(){this.isToast=!1,this.toastData={},this.totalItems=0,this.cartService=(0,n.WQX)(_.m),(0,d.a)({cartOutline:r.jSK,scanOutline:r.uzz,listOutline:r.PFj,checkmarkCircle:r.AUS,bagHandleOutline:r.lrW})}ngOnInit(){this.cartSub=this.cartService.cart.subscribe({next:o=>{console.log(o),this.totalItems=o?null==o?void 0:o.totalItem:0}})}scanBarcode(){var o=this;return(0,g.A)(function*(){try{const t=yield o.cartService.startScan();if(!t)return o.isToast=!0,void(o.toastData={color:"danger",message:"No such barcode is available"});console.log(t),o.cartService.addItemByBarcode(t)}catch(t){console.log(t)}})()}scanAndPay(){var o=this;return(0,g.A)(function*(){try{const t=yield o.cartService.startScan(0);if(console.log(t),!t)return o.isToast=!0,void(o.toastData={color:"danger",message:"Error: Please try again"});o.isToast=!0,o.toastData={color:"success",message:"Payment successful"}}catch(t){console.log(t)}})()}ngOnDestroy(){this.cartSub&&this.cartSub.unsubscribe()}}return(a=c).\u0275fac=function(o){return new(o||a)},a.\u0275cmp=n.VBU({type:a,selectors:[["app-home"]],standalone:!0,features:[n.aNF],decls:46,vars:17,consts:[[1,"ion-no-border"],["slot","end"],["lines","none",1,"ion-margin-vertical"],["color","dark"],[3,"src"],[1,"ion-margin"],["size","6",1,"ion-text-centered"],["color","light",3,"click"],["name","scan-outline","color","danger"],["color","light","routerLink","products"],["name","list-Outline","color","warning"],["color","light"],["name","checkmark-circle","color","success"],["name","bag-handle-outline","color","primary"],["name","scan-outline","color","tertiary"],[3,"didDismiss","isOpen","message","position","color","duration"],["color","dark","fill","clear","routerLink","cart"],["name","cart-outline","slot","icon-only"],["color","danger"]],template:function(o,t){1&o&&(n.j41(0,"ion-header",0)(1,"ion-toolbar"),n.DNE(2,h,6,1,"ion-buttons",1),n.k0s()(),n.j41(3,"ion-content")(4,"ion-item",2)(5,"ion-label"),n.EFF(6," Hello "),n.j41(7,"p")(8,"ion-text",3),n.EFF(9," Naruto Uzumaki "),n.k0s()()(),n.j41(10,"ion-thumbnail",1),n.nrm(11,"img",4),n.k0s()(),n.j41(12,"ion-list-header"),n.EFF(13," Your Insights "),n.k0s(),n.j41(14,"ion-row",5)(15,"ion-col",6)(16,"ion-card",7),n.bIt("click",function(){return t.scanBarcode()}),n.j41(17,"ion-thumbnail"),n.nrm(18,"ion-icon",8),n.k0s(),n.j41(19,"ion-label"),n.EFF(20,"Scan product barcode"),n.k0s()()(),n.j41(21,"ion-col",6)(22,"ion-card",9)(23,"ion-thumbnail"),n.nrm(24,"ion-icon",10),n.k0s(),n.j41(25,"ion-label"),n.EFF(26,"Produts"),n.k0s()()(),n.j41(27,"ion-col",6)(28,"ion-card",11)(29,"ion-thumbnail"),n.nrm(30,"ion-icon",12),n.k0s(),n.j41(31,"ion-label"),n.EFF(32,"Transactions"),n.k0s()()(),n.j41(33,"ion-col",6)(34,"ion-card",11)(35,"ion-thumbnail"),n.nrm(36,"ion-icon",13),n.k0s(),n.j41(37,"ion-label"),n.EFF(38,"Orders"),n.k0s()()(),n.j41(39,"ion-col",6)(40,"ion-card",7),n.bIt("click",function(){return t.scanAndPay()}),n.j41(41,"ion-thumbnail"),n.nrm(42,"ion-icon",14),n.k0s(),n.j41(43,"ion-label"),n.EFF(44,"Scan QR Code & pay"),n.k0s()()()(),n.j41(45,"ion-toast",15),n.bIt("didDismiss",function(){return t.isToast=!1}),n.k0s()()),2&o&&(n.R7$(2),n.vxM(t.totalItems>0?2:-1),n.R7$(9),n.Y8G("src","assets/imgs/naruto.jpg",n.B4B),n.R7$(6),n.xc7("background","rgba(240,94,112,0.2)"),n.R7$(6),n.xc7("background","rgba(255,152,0,0.2)"),n.R7$(6),n.xc7("background","rgba(46, 255, 144, 0.2)"),n.R7$(6),n.xc7("background","rgba(94,155,240,0.2)"),n.R7$(6),n.xc7("background","rgba(112, 68, 255,0.2)"),n.R7$(4),n.Y8G("isOpen",t.isToast)("message",null==t.toastData?null:t.toastData.message)("position","bottom")("color",null==t.toastData?null:t.toastData.color)("duration",3e3))},dependencies:[e.eU,e.ai,e.QW,e.Jm,e.iq,e.W9,e.uz,e.he,e.IO,e.Zx,e.AF,e.ln,e.hU,e.b_,e.op,e.In,u.Wk],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;top:0;right:0;border-radius:50%;height:1rem;width:1rem;margin:0 -.3rem 0 0;display:flex;align-items:center;justify-content:center}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:5px;font-size:.9rem;font-weight:400}ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px}ion-list-header[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700}ion-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;box-shadow:none;margin:10px 5px;height:15vh}ion-card[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:10px;width:3rem;height:3rem;margin-bottom:1.3vh}ion-card[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2rem}ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1rem;font-weight:500}"]}),c})()}}]);