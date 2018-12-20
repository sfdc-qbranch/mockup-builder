var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/badges/docs.mdx.js"]=function(e){function t(t){for(var a,o,r=t[0],i=t[1],c=t[2],u=0,g=[];u<r.length;u++)o=r[u],s[o]&&g.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);g.length;)g.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={21:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=i;return l.push([235,0]),n()}({0:function(e,t){e.exports=React},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=n(0),s=(d(a),n(8)),l=d(s),o=n(55),r=n(10),i=d(n(7)),c=d(n(6));function d(e){return e&&e.__esModule?e:{default:e}}var u=s.factories.code,g=s.factories.h2,h=s.factories.p,f=s.factories.table,m=s.factories.tbody,p=s.factories.td,b=s.factories.th,y=s.factories.thead,_=s.factories.tr,x=t.getElement=function(){return(0,a.createElement)(l.default,{},(0,a.createElement)("div",{className:"lead"},"Badges are labels which hold small amounts of information."),(0,a.createElement)(i.default,{title:"Base badge"},(0,a.createElement)(c.default,{toggleCode:!1},(0,a.createElement)(o.Badge,null,"I am Badge"))),g({id:"Badge-Colors"},"Badge Colors"),h({},"There are three different color badges you can use."),f({},y({},_({},b({},"Badge"),b({},"class"),b({},"description"))),m({},_({},p({},(0,a.createElement)(o.Badge,{key:"1"},"Default Badge")),p({},u({},".slds-badge")),p({},"This is the default badge. You probably want to use this one unless you fall into a specific use-case.")),_({},p({},(0,a.createElement)(o.InverseBadge,{key:"2"},"Darker Badge")),p({},u({},".slds-badge_inverse")),p({},"This badge is used when you need higher contrast than our default badge.")),_({},p({},(0,a.createElement)(o.LightestBadge,{key:"3"},"Lightest Badge")),p({},u({},".slds-badge_lightest")),p({},"This badge is used when you want to include an icon.")))),g({id:"Badges-with-Icons"},"Badges with Icons"),h({},"You can include an icon in your badge. The icon can be aligned to the left or right side of the text. You may also choose to put an icon in a badge without text, but in that case, be sure to include assitive text."),(0,a.createElement)(i.default,{title:"Badge with icon on the left"},(0,a.createElement)(c.default,{toggleCode:!1},(0,a.createElement)(o.LightestBadge,null,(0,a.createElement)(r.UtilityIcon,{containerClassName:"slds-m-right_xx-small",className:"slds-icon_xx-small slds-icon-text-default",assistiveText:!1,symbol:"world"}),"Icon on the left"))),(0,a.createElement)(i.default,{title:"Badge with icon on the right"},(0,a.createElement)(c.default,{toggleCode:!1},(0,a.createElement)(o.LightestBadge,null,"Icon on the right",(0,a.createElement)(r.UtilityIcon,{containerClassName:"slds-m-left_xx-small",className:"slds-icon_xx-small slds-icon-text-default",assistiveText:!1,symbol:"world"})))),g({id:"Badges-with-Nested-Elements"},"Badges with Nested Elements"),h({},"Along with icons, you can have nested textual elements, such as ",u({},"strong"),", ",u({},"em"),", and ",u({},"span")," elements, within a badge. Only ",u({},"inline")," and ",u({},"inline-block")," elements are supported at this time."),(0,a.createElement)(i.default,{title:"Badge with nested element"},(0,a.createElement)(c.default,{toggleCode:!1},(0,a.createElement)(o.Badge,null,"Component In: ",(0,a.createElement)("strong",null,"Lightning")))))};t.getContents=function(){return(0,s.createTableOfContents)(x())}},5:function(e,t){e.exports=JSBeautify}});