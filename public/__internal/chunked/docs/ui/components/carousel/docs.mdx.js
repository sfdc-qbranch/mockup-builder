var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/carousel/docs.mdx.js"]=function(e){function t(t){for(var s,n,o=t[0],r=t[1],c=t[2],u=0,p=[];u<o.length;u++)n=o[u],l[n]&&p.push(l[n][0]),l[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==l[r]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},l={5:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;return i.push([77,0]),a()}({0:function(e,t){e.exports=React},5:function(e,t){e.exports=JSBeautify},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CarouselPlayToggle=t.indicatorId03=t.indicatorId02=t.indicatorId01=t.contentId03=t.contentId02=t.contentId01=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),l=a(0),i=r(l),n=r(a(2)),o=r(a(1));function r(e){return e&&e.__esModule?e:{default:e}}var c=t.contentId01="content-id-01",d=t.contentId02="content-id-02",u=t.contentId03="content-id-03",p=t.indicatorId01="indicator-id-01",f=t.indicatorId02="indicator-id-02",h=t.indicatorId03="indicator-id-03",m=function(e){return i.default.createElement("li",{className:"slds-carousel__indicator",role:"presentation"},i.default.createElement("a",{id:e.id,className:(0,o.default)("slds-carousel__indicator-action",e.isActive&&"slds-is-active",e.className),href:"javascript:void(0);",role:"tab",tabIndex:e.isActive?"0":"-1","aria-selected":e.isActive?"true":"false","aria-controls":e.contentId,title:e.title},i.default.createElement("span",{className:"slds-assistive-text"},e.title)))},b=function(e){return i.default.createElement("div",{id:e.id,className:(0,o.default)("slds-carousel__panel",e.className),role:"tabpanel","aria-hidden":e.isActive?"false":"true","aria-labelledby":e.indicatorId},i.default.createElement("a",{href:"javascript:void(0);",className:"slds-carousel__panel-action slds-text-link_reset",tabIndex:e.isActive?"0":"-1"},i.default.createElement("div",{className:"slds-carousel__image"},i.default.createElement("img",{src:e.src,alt:e.title})),i.default.createElement("div",{className:"slds-carousel__content"},i.default.createElement("h2",{className:"slds-carousel__content-title"},e.title),i.default.createElement("p",null,e.description))))},v=t.CarouselPlayToggle=function(e){return i.default.createElement("span",{className:"slds-carousel__autoplay"},i.default.createElement(n.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:e.stop?"right":"pause","aria-controls":e["aria-controls"],"aria-pressed":e.stop,disabled:e.disabled,title:"Stop auto-play",assistiveText:"Stop auto-play"}))},_=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),s(t,[{key:"render",value:function(){return i.default.createElement("div",{className:(0,o.default)("slds-carousel",this.props.className)},i.default.createElement("div",{className:"slds-carousel__stage"},this.props.autoPlay&&i.default.createElement(v,{stop:"stop"===this.props.autoPlay}),i.default.createElement("div",{className:"slds-carousel__panels",style:{transform:"translateX(-"+100*(this.props.panelActive-1)+"%)"}},i.default.createElement(b,{isActive:"1"===this.props.panelActive,id:c,indicatorId:p,title:"Visit App Exchange",description:"Extend Salesforce with the #1 business marketplace.",src:"/assets/images/carousel/carousel-01.jpg"}),i.default.createElement(b,{isActive:"2"===this.props.panelActive,id:d,indicatorId:f,title:"Click to Customize",description:"Use the Object Manager to add fields, build layouts, and more.",src:"/assets/images/carousel/carousel-02.jpg"}),i.default.createElement(b,{isActive:"3"===this.props.panelActive,id:u,indicatorId:h,title:"Download SalesforceA",description:"Get the mobile app that's just for Salesforce admins.",src:"/assets/images/carousel/carousel-03.jpg"})),i.default.createElement("ul",{className:"slds-carousel__indicators",role:"tablist"},i.default.createElement(m,{isActive:"1"===this.props.panelActive,id:p,contentId:c,title:"Visit App Exchange tab"}),i.default.createElement(m,{isActive:"2"===this.props.panelActive,id:f,contentId:d,title:"Click to Customize tab"}),i.default.createElement(m,{isActive:"3"===this.props.panelActive,id:h,contentId:u,title:"Download SalesforceA tab"}))))}}]),t}();t.default=_},77:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var s=a(0),l=(p(s),a(8)),i=p(l),n=p(a(6)),o=p(a(9)),r=p(a(11)),c=p(a(7)),d=a(76),u=p(d);function p(e){return e&&e.__esModule?e:{default:e}}var f=l.factories.code,h=l.factories.h2,m=l.factories.h3,b=l.factories.li,v=l.factories.p,_=l.factories.ul,y=t.getElement=function(){return(0,s.createElement)(i.default,{},(0,s.createElement)("div",{className:"lead"},"A carousel allows multiple pieces of featured content to occupy an allocated amount of space."),(0,s.createElement)(c.default,{title:"carousel"},(0,s.createElement)(n.default,{style:{width:"480px",maxWidth:"100%"}},(0,s.createElement)(u.default,{panelActive:"1",autoPlay:!0}))),v({},"A Carousel can accept a maximum number of 5 panels where only 1 panel is visible at a time."),h({id:"Navigating-between-panels"},"Navigating between panels"),v({},"You are able to navigate between panels but interacting with the ",f({},"slds-carousel__indicator")," elements that sit below the panel."),m({id:"Panel-1-active"},"Panel 1 active"),(0,s.createElement)(c.default,{title:"carousel-panel-transition-panel-1"},(0,s.createElement)(n.default,{style:{width:"480px",maxWidth:"100%"}},(0,s.createElement)(u.default,{panelActive:"1",autoPlay:!0}))),m({id:"Panel-2-active"},"Panel 2 active"),(0,s.createElement)(c.default,{title:"carousel-panel-transition-panel-2"},(0,s.createElement)(n.default,{style:{width:"480px",maxWidth:"100%"}},(0,s.createElement)(u.default,{panelActive:"2",autoPlay:!0}))),(0,s.createElement)(o.default,{toggleCode:!1},(0,s.createElement)("div",{className:"slds-carousel"},(0,s.createElement)("div",{className:"slds-carousel__stage"},(0,s.createElement)("div",{className:"slds-carousel__panels",style:{transform:"translateX(-100%)"}},(0,s.createElement)("div",{id:"content-id-01",className:"slds-carousel__panel","aria-hidden":"false",role:"tabpanel","aria-labelledby":"indicator-id-01",tabIndex:"-1"},"..."),(0,s.createElement)("div",{id:"content-id-02",className:"slds-carousel__panel","aria-hidden":"true",role:"tabpanel","aria-labelledby":"indicator-id-02",tabIndex:"0"},"...")),(0,s.createElement)("ul",{className:"slds-carousel__indicators",role:"tablist"},(0,s.createElement)("li",{className:"slds-carousel__indicator",role:"presentation"},(0,s.createElement)("a",{id:"indicator-id-01",className:"slds-carousel__indicator-action",href:"javascript:void(0);",role:"tab",tabIndex:"-1","aria-selected":"false","aria-controls":"content-id-01",title:"Visit App Exchange tab"},"...")),(0,s.createElement)("li",{className:"slds-carousel__indicator",role:"presentation"},(0,s.createElement)("a",{id:"indicator-id-02",className:"slds-carousel__indicator-action slds-is-active",href:"javascript:void(0);",role:"tab",tabIndex:"0","aria-selected":"true","aria-controls":"content-id-02",title:"Click to Customize tab"},"...")))))),(0,s.createElement)(r.default,{header:"Accessibility",type:"a11y"},"A panel becomes visible by toggling the ",(0,s.createElement)("code",{className:"doc"},"aria-hidden")," attribute from ",(0,s.createElement)("code",{className:"doc"},"false")," to ",(0,s.createElement)("code",{className:"doc"},"true")," on the ",(0,s.createElement)("code",{className:"doc"},"slds-carousel__panel")," element. When a panel becomes active, the `tabindex` of the other non-visible panels should be set to -1 while the active panel remains at 0."),v({},"When a panel becomes active, apply an inline style to ",f({},"slds-carousel__panel")," to move the panels left to right. We do this by updating the location of the panel on its Y axis using transforms. The first panel should be ",f({},"transform: translateX(0%)")," but when any precedding panel becomes active it can be subtracted by 100%, moving 100% of each panel to the left. For example, panel 1 would be visible at ",f({},"transform: translateX(0%)"),", while panel 3 would be visible at ",f({},"transform: translateX(-200%)"),"."),v({},"When making the ",f({},"slds-carousel__panel")," active, the indicator should be updated with the ",f({},"slds-is-active")," class. This provides visual feedback showing which carousel panel is active."),h({id:"Auto-play"},"Auto-play"),v({},"If the Carousel is set to auto-play, a pause button is required to be first in the HTML before the tab set."),(0,s.createElement)(r.default,{header:"Accessibility",type:"a11y"},"When that pause button is interacted with, the ",(0,s.createElement)("code",{className:"doc"},"aria-pressed")," role needs to be toggled to ",(0,s.createElement)("code",{className:"doc"},"true"),"."),(0,s.createElement)(c.default,{title:"carousel-autoplay"},(0,s.createElement)(o.default,{toggleCode:!1},(0,s.createElement)("div",{className:"slds-carousel"},(0,s.createElement)("div",{className:"slds-carousel__stage"},(0,s.createElement)(d.CarouselPlayToggle,{stop:!0}),(0,s.createElement)("div",{className:"slds-carousel__panels"},"..."))))),h({id:"Accessibility"},"Accessibility"),v({},"A Carousel is built using a tabbed UI specification and requires the following to meet accessibility requirements:"),_({},b({},"The tab list, which should have ",f({},'role="tablist"')),b({},"The tabs in that list, which should each be an ",f({},'<a role="tab">')," anchor wrapped in a ",f({},'<li role="presentation">')," list item"),b({},"The tab panels, which display each tab’s content and should each have ",f({},'role="tabpanel"'))),m({id:"Expected-markup:"},"Expected markup:"),_({},b({},"Selected tab’s anchor has ",f({},'aria-selected="true"'),", all other tabs’ anchors have ",f({},'aria-selected="false"')),b({},"Selected tab’s anchor has ",f({},'tabindex="0"'),", all other tabs have ",f({},'tabindex="-1"')),b({},"Each tab’s anchor has an ",f({},"aria-controls")," attribute whose value is the id of the associated ",f({},'<div role="tabpanel">')),b({},"Each tab panel has an ",f({},"aria-labelledby")," attribute whose value is the id of its associated ",f({},'<a role="tab">')),b({},"Each tab panel has an ",f({},"aria-hidden")," attribute whose value is toggled based on which panel is visible"),b({},"When the Carousel is set to auto-play, the HTML for the pause button is required to precede the HTML of the tab set")),m({id:"Expected-keyboard-interactions:"},"Expected keyboard interactions:"),_({},b({},"Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab"),b({},"Tab key, when focus is before the tab list, moves focus to the selected tab panel"),b({},"Tab key, when focus is on selected tabpanel, moves focus into the selected tabpanel's associated tab or to the next focusable element on the page if that panel has no focusable elements"),b({},"Shift+Tab keys, when focus is on first element in a tab panel, move focus focus entirely from tabset")))};t.getContents=function(){return(0,l.createTableOfContents)(y())}}});