var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/text/example.jsx.js"]=function(e){function l(l){for(var a,s,r=l[0],i=l[1],d=l[2],c=0,m=[];c<r.length;c++)s=r[c],n[s]&&m.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(l);m.length;)m.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,l=0;l<o.length;l++){for(var t=o[l],a=!0,r=1;r<t.length;r++){var i=t[r];0!==n[i]&&(a=!1)}a&&(o.splice(l--,1),e=s(s.s=t[0]))}return e}var a={},n={33:0,6:0,7:0,13:0,14:0,20:0,30:0,36:0,40:0,43:0,51:0,54:0,55:0,59:0,60:0,63:0,66:0,70:0,72:0,75:0,79:0,81:0,82:0,87:0,92:0,93:0,97:0,98:0,106:0,109:0,110:0,114:0,116:0,117:0,118:0,119:0,120:0,121:0,125:0,130:0,136:0,143:0,153:0,157:0,159:0,160:0,161:0,168:0,171:0,172:0},o=[];function s(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,l,t){s.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:t})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(l,"a",l),l},s.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},s.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=r.push.bind(r);r.push=l,r=r.slice();for(var d=0;d<r.length;d++)l(r[d]);var u=i;return o.push([95,0]),t()}({0:function(e,l){e.exports=React},95:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(t(0));var n=function(e){return a.default.createElement("div",{className:e.className},"The quick brown fox jumps over the lazy dog.")};l.examples=[{id:"body-default",label:"Body size - default",element:a.default.createElement(n,{className:"slds-text-body_regular"}),description:"This default helper sets regular body copy. You usually don&rsquo;t need this class since most components will inherit this globally from the `body` element. However, it exists if you still need to specifically set it."},{id:"body-small",label:"Body size - Small",element:a.default.createElement(n,{className:"slds-text-body_small"}),description:"This body-small text helper sets smaller, subtler body copy. It is typically used as supportive text."},{id:"heading-large",label:"Heading size - Large",element:a.default.createElement(n,{className:"slds-text-heading_large"})},{id:"heading-medium",label:"Heading size - Medium",element:a.default.createElement(n,{className:"slds-text-heading_medium"})},{id:"heading-small",label:"Heading size - Small",element:a.default.createElement(n,{className:"slds-text-heading_small"})},{id:"heading-title",label:"Title",element:a.default.createElement(n,{className:"slds-text-title"})},{id:"heading-title--caps",label:"Title uppercase",element:a.default.createElement(n,{className:"slds-text-title_caps"})},{id:"longform",label:"Longform",element:a.default.createElement("div",{className:"slds-text-longform"},a.default.createElement("p",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("p",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("h3",{className:"slds-text-heading_small"},"Heading"),a.default.createElement("ul",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.",a.default.createElement("ul",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.",a.default.createElement("ul",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.")))))),a.default.createElement("h3",{className:"slds-text-heading_small"},"Heading"),a.default.createElement("ol",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.",a.default.createElement("ol",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.",a.default.createElement("ol",null,a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog."),a.default.createElement("li",null,"The quick brown fox jumps over the lazy dog.")))))))},{id:"align-left",label:"Align left",element:a.default.createElement(n,{className:"slds-text-align_left"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"align-right",label:"Align right",element:a.default.createElement(n,{className:"slds-text-align_right"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"align-center",label:"Align center",element:a.default.createElement(n,{className:"slds-text-align_center"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"text-color-default",label:"Color - Default",element:a.default.createElement(n,{className:"slds-text-color_default"})},{id:"text-color-success",label:"Color - Success",element:a.default.createElement(n,{className:"slds-text-color_success"})},{id:"text-color-weak",label:"Color - Weak",element:a.default.createElement(n,{className:"slds-text-color_weak"})},{id:"text-color-error",label:"Color - Error",element:a.default.createElement(n,{className:"slds-text-color_error"})},{id:"text-color-destructive",label:"Color - Destructive Actions",element:a.default.createElement(n,{className:"slds-text-color_destructive"})},{id:"text-color-inverse",label:"Color - Inverse",element:a.default.createElement("div",{className:"demo-only",style:{padding:"0.5rem",background:"#16325c"}},a.default.createElement(n,{className:"slds-text-color_inverse"}))},{id:"text-color-inverse-weak",label:"Color - Inverse - Weak",element:a.default.createElement("div",{className:"demo-only",style:{padding:"0.5rem",background:"#16325c"}},a.default.createElement(n,{className:"slds-text-color_inverse-weak"}))},{id:"text-font-monospace",label:"Font - Monospace",element:a.default.createElement(n,{className:"slds-text-font_monospace"})}]}});