var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/global-header/base/example.jsx.js"]=function(e){function t(t){for(var l,o,i=t[0],r=t[1],d=t[2],u=0,m=[];u<i.length;u++)o=i[u],s[o]&&m.push(s[o][0]),s[o]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);for(c&&c(t);m.length;)m.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(l=!1)}l&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},s={128:0,6:0,7:0,13:0,14:0,20:0,30:0,36:0,40:0,43:0,51:0,54:0,55:0,59:0,60:0,63:0,66:0,70:0,72:0,75:0,79:0,81:0,82:0,87:0,92:0,93:0,97:0,98:0,106:0,109:0,110:0,114:0,116:0,117:0,118:0,119:0,120:0,121:0,125:0,130:0,136:0,143:0,153:0,157:0,159:0,160:0,161:0,168:0,171:0,172:0},n=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=r;return n.push([191,0]),a()}({0:function(e,t){e.exports=React},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SearchResults={option0:{name:"Recent Items",label:!0},option1:{name:"Salesforce - 1,000 Licenses",entityMeta:!0,entityType:"Opportunity",entityField:"Propecting"},option2:{name:"Art Vandelay",entityMeta:!0,entityType:"Contact",entityField:"avandelay@vandelay.com"},option3:{name:"Vandelay Industries",entityMeta:!0,entityType:"Account",entityField:"San Francisco"},option4:{name:"Salesforce UK 2016 Events",entityMeta:!0,entityType:"Event",entityField:"$20,000"},option5:{name:"H.E. Pennypacker",entityMeta:!0,entityType:"Lead",entityField:"Nursing"}},t.SearchResultsTypeahead={option1:{term:"Salesforce",beforeTerm:"",afterTerm:".com",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"},option2:{term:"Salesforce",beforeTerm:"",afterTerm:".org",entityMeta:!0,entityType:"Account",entityLocation:"New York, NY"},option3:{term:"Salesforce",beforeTerm:"",afterTerm:"HQ",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"}}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(s),o=a(9),i=a(10);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),l(t,[{key:"render",value:function(){return n.default.createElement(o.Menu,{className:"slds-dropdown_right slds-nubbin_top-right",style:{right:"-1rem"}},n.default.createElement(o.MenuList,null,n.default.createElement(o.MenuItem,{iconLeft:n.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"event"}),tabIndex:"0"},"New Event"),n.default.createElement(o.MenuItem,{iconLeft:n.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"note"}),tabIndex:"0"},"New Note"),n.default.createElement(o.MenuItem,{iconLeft:n.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"email"}),tabIndex:"0"},"New Email")))}}]),t}();t.default=r},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(s),o=a(12),i=a(185);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),l(t,[{key:"render",value:function(){return n.default.createElement(o.Popover,{className:"slds-nubbin_top slds-dynamic-menu",bodyClassName:"slds-p-horizontal_none",title:"My Favorites",footer:n.default.createElement(i.Footer,null),style:{position:"absolute",left:"-8rem",top:"36px"}},n.default.createElement(i.ListboxList,{length:this.props.numberOfFavorites}))}}]),t}();t.default=r},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={item1:{username:"Val Handerly",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Could I please have a review on my presentation deck",timestamp:"10 hours ago",unread:!0},item2:{username:"Jon Rogers",avatar:"/assets/images/avatar3.jpg",title:"commented on your post",message:"I totally agree with your sentiment",timestamp:"13 hours ago",unread:!0},item3:{username:"Rebecca Stone",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Here's the conversation I mentioned to you",timestamp:"1 day ago",unread:!1}}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),n=c(s),o=c(a(1)),i=a(15),r=a(12),d=c(a(187));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return n.default.createElement("li",{className:(0,o.default)("slds-global-header__notification",e.unread&&"slds-global-header__notification_unread",e.className),key:e.index},n.default.createElement("div",{className:"slds-media slds-has-flexi-truncate slds-p-around_x-small"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(i.Avatar,{className:"slds-avatar_small"},n.default.createElement("img",{alt:e.username,src:e.avatar,title:e.username+" avatar"}))),n.default.createElement("div",{className:"slds-media__body"},n.default.createElement("div",{className:"slds-grid slds-grid_align-spread"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-text-link_reset slds-has-flexi-truncate"},n.default.createElement("h3",{className:"slds-truncate",title:e.username+" "+e.title},n.default.createElement("strong",null,e.username+" "+e.title)),n.default.createElement("p",{className:"slds-truncate",title:e.message},e.message),n.default.createElement("p",{className:"slds-m-top_x-small slds-text-color_weak"},e.timestamp,e.unread&&n.default.createElement("abbr",{className:"slds-text-link slds-m-horizontal_xxx-small",title:"unread"},"●")))))))},m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.renderNotificationItems=e.renderNotificationItems.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),l(t,[{key:"renderNotificationItems",value:function(e){var t=d.default[e];return n.default.createElement(u,{key:e,index:e,avatar:t.avatar,username:t.username,title:t.title,message:t.message,timestamp:t.timestamp,unread:t.unread})}},{key:"render",value:function(){return n.default.createElement(r.Popover,{className:"slds-popover_large slds-nubbin_top-right",bodyClassName:"slds-p-around_none",headerTitle:"Notifications",closeButton:!0,style:{position:"absolute",top:"calc(100% + 12px)",right:"-12px"}},n.default.createElement("ul",null,Object.keys(d.default).map(this.renderNotificationItems)))}}]),t}();t.default=m},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=t.Notifications=t.Setup=t.Help=t.Task=t.Favorites=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=c(a(0)),n=c(a(1)),o=c(a(2)),i=c(a(188)),r=c(a(186)),d=c(a(184));function c(e){return e&&e.__esModule?e:{default:e}}var u=t.Favorites=function(e){return s.default.createElement("div",{className:"slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click"},s.default.createElement("div",{className:"slds-button-group"},s.default.createElement(o.default,{className:(0,n.default)("slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small",{"slds-is-disabled":e.favoritesDisabled,"slds-is-selected":e.favoritesClicked}),disabled:e.favoritesDisabled,"aria-pressed":e.favoritesClicked?"true":"false",symbol:"favorite",title:"Toggle Favorites",assistiveText:"Toggle Favorite",onClick:function(){return e.toggleFavorite()}}),s.default.createElement(o.default,{className:(0,n.default)("slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small"),iconClassName:"slds-button__icon_small",symbol:"down",title:"View Favorites",assistiveText:"View Favorites"})),e.showFavoritesPopup&&s.default.createElement(r.default,{numberOfFavorites:"2"}))},m=t.Task=function(e){return s.default.createElement("div",{className:(0,n.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.showTaskMenu&&"slds-is-open")},s.default.createElement(o.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action","aria-haspopup":"true",symbol:"add",title:"Global Actions",assistiveText:"Global Actions"}),e.showTaskMenu&&s.default.createElement(d.default,null))},f=t.Help=function(e){return s.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},s.default.createElement(o.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"question",title:"Help and Training",assistiveText:"Help and Training"}))},p=t.Setup=function(e){return s.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},s.default.createElement(o.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"setup",title:"Setup",assistiveText:"Setup"}))},_=t.Notifications=function(e){var t=e.notificationCount?e.notificationCount+" new notifications":"no new notifications";return s.default.createElement("div",{className:(0,n.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.showNotificationPopup&&"slds-is-open")},s.default.createElement(o.default,{className:(0,n.default)("slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action",{"slds-incoming-notification":e.showNotification&&e.notificationCount}),iconClassName:"slds-global-header__icon",symbol:"notification",title:t,assistiveText:t,"aria-live":"assertive","aria-atomic":"true"}),s.default.createElement("span",{"aria-hidden":"true",className:(0,n.default)("slds-notification-badge",e.notificationCount&&"slds-incoming-notification",e.showNotification&&"slds-show-notification")},e.notificationCount),e.showNotificationPopup&&s.default.createElement(i.default,null))},b=t.Avatar=function(e){return s.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},s.default.createElement("button",{className:"slds-button slds-global-actions__avatar slds-global-actions__item-action",title:"person name","aria-haspopup":"true"},s.default.createElement("span",{className:"slds-avatar slds-avatar_circle slds-avatar_medium"},s.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.toggleFavorite,a=e.favoritesClicked,l=e.favoritesDisabled,n=e.showFavoritesPopup,o=e.showNotification,i=e.notificationCount,r=e.showNotificationPopup,d=e.showTaskMenu;return s.default.createElement("ul",{className:"slds-global-actions"},s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(u,{toggleFavorite:t,favoritesClicked:a,favoritesDisabled:l,showFavoritesPopup:n})),s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(m,{showTaskMenu:d})),s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(f,null)),s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(p,null)),s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(_,{showNotification:o,notificationCount:i,showNotificationPopup:r})),s.default.createElement("li",{className:"slds-global-actions__item"},s.default.createElement(b,null)))}}]),t}();t.default=h},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),n=r(s),o=r(a(1)),i=r(a(189));function r(e){return e&&e.__esModule?e:{default:e}}var d=[n.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus",key:"1"},"Skip to Navigation"),n.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus",key:"2"},"Skip to Main Content")],c=t.Logo=function(){return n.default.createElement("div",{className:"slds-global-header__logo"})},u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toggleFavorite=e.toggleFavorite.bind(e),e.showNotification=e.showNotification.bind(e),e.showIncomingNotification=e.showIncomingNotification.bind(e),e.state={favoritesClicked:!1,showNotification:!1,notificationCount:0},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),l(t,[{key:"toggleFavorite",value:function(){this.setState({favoritesClicked:!this.state.favoritesClicked})}},{key:"showNotification",value:function(){this.setState({showNotification:!this.state.showNotification,notificationCount:1})}},{key:"showIncomingNotification",value:function(){this.setState({notificationCount:++this.state.notificationCount})}},{key:"render",value:function(){var e=this;return n.default.createElement("header",{className:(0,o.default)("slds-global-header_container",this.props.className)},d,n.default.createElement("div",{className:"slds-global-header slds-grid slds-grid_align-spread"},n.default.createElement("div",{className:"slds-global-header__item"},n.default.createElement(c,null)),!this.props.playground&&n.default.createElement("div",{className:"slds-global-header__item slds-global-header__item_search"},this.props.globalSearch),n.default.createElement("div",{className:"slds-global-header__item"},n.default.createElement(i.default,{toggleFavorite:this.toggleFavorite,favoritesClicked:this.state.favoritesClicked,favoritesDisabled:this.props.favoritesDisabled,showFavoritesPopup:this.props.showFavoritesPopup,showNotification:this.state.showNotification,notificationCount:this.state.notificationCount,showNotificationPopup:this.props.showNotificationPopup,showTaskMenu:this.props.showTaskMenu}))),this.props.playground&&n.default.createElement("div",{className:"slds-button-group slds-m-around_medium"},n.default.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showNotification()}},"Toggle Notification"),n.default.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showIncomingNotification()}},"Increase count")))}}]),t}();t.default=u},191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=t.GlobalHeaderDeprecated=void 0;var l=_(a(0)),s=_(a(3)),n=_(a(2)),o=a(9),i=_(a(1)),r=_(a(190)),d=a(18),c=_(a(33)),u=_(a(17)),m=a(6),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(183)),p=_(a(5));function _(e){return e&&e.__esModule?e:{default:e}}var b=l.default.createElement(o.Menu,{className:"slds-dropdown_right slds-nubbin_top-right"},l.default.createElement(o.MenuList,null,l.default.createElement("li",{className:"slds-dropdown__header",role:"separator"},l.default.createElement("span",{className:"slds-text-title_caps"},"Setup")),l.default.createElement(o.MenuItem,{tabIndex:"0"},"Setup Home"))),h=l.default.createElement(o.Menu,{className:"slds-dropdown_right slds-nubbin_top-right"},l.default.createElement(o.MenuList,null,l.default.createElement("li",{className:"slds-dropdown__header",role:"separator"},l.default.createElement("span",{className:"slds-text-title_caps"},"Create")),l.default.createElement(o.MenuItem,{tabIndex:"0",title:"New Note"},l.default.createElement(s.default,{className:"slds-icon slds-icon_small slds-icon-standard-note slds-m-right_x-small",sprite:"standard",symbol:"note"})," ","New Note"),l.default.createElement(o.MenuItem,{title:"Log a Call"},l.default.createElement(s.default,{className:"slds-icon slds-icon_small slds-icon-standard-log-a-call slds-m-right_x-small",sprite:"standard",symbol:"log_a_call"})," ","Log a Call"),l.default.createElement(o.MenuItem,{title:"New Event"},l.default.createElement(s.default,{className:"slds-icon slds-icon_small slds-icon-standard-event slds-m-right_x-small",sprite:"standard",symbol:"event"})," ","New Event"))),g=function(e){return l.default.createElement("div",{"aria-expanded":e.expanded?"true":"false","aria-haspopup":"listbox",className:(0,i.default)("slds-form-element slds-lookup",e.expanded?"slds-is-open":null),role:"combobox"},l.default.createElement("label",{className:"slds-assistive-text",htmlFor:"global-search-01"},"Search Salesforce"),l.default.createElement("div",{className:"slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right"},l.default.createElement(s.default,{className:"slds-input__icon slds-input__icon_left",sprite:"utility",symbol:"search"}),l.default.createElement("input",{"aria-activedescendant":e.value?"option-00":null,"aria-autocomplete":"list","aria-controls":"global-search-list-01",autoComplete:"off",className:"slds-input slds-lookup__search-input",id:"global-search-01",placeholder:"Search Salesforce",role:"textbox",type:"text",defaultValue:e.value}),e.value?l.default.createElement("button",{className:"slds-input__icon slds-input__icon_right slds-button slds-button_icon"},l.default.createElement(s.default,{className:"slds-button__icon",sprite:"utility",symbol:"clear"}),l.default.createElement("span",{className:"slds-assistive-text"},"Clear the current search term")):null),l.default.createElement("div",{className:"slds-lookup__menu",role:"listbox",id:"global-search-list-01"},e.value?l.default.createElement(y,null):l.default.createElement(v,null)))},v=function(e){return l.default.createElement("ul",{className:"slds-lookup__list",role:"group","aria-label":"Recent Items"},l.default.createElement("li",{role:"presentation"},l.default.createElement("h3",{role:"presentation",className:"slds-lookup__item_label slds-text-body_small"},"Recent Items")),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-01",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure",sprite:"standard",symbol:"opportunity"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"Salesforce - 1,000 Licenses"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Opportunity • Prospecting")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-02",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-contact slds-icon_small slds-media__figure",sprite:"standard",symbol:"contact"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"Art Vandelay"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Contact • avandelay@vandelay.com")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-03",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-account slds-icon_small slds-media__figure",sprite:"standard",symbol:"account"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"Vandelary Industries"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Account • San Francisco")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-04",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-custom-8 slds-icon_small slds-media__figure",sprite:"custom",symbol:"custom8"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"Salesforce UK 2016 Events"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"General Ledger • $20,000")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-05",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-lead slds-icon_small slds-media__figure",sprite:"standard",symbol:"lead"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"H.E. Pennypacker"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Lead • Nursing")))))},y=function(e){return l.default.createElement("ul",{className:"slds-lookup__list",role:"presentation"},l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-lookup__item-action_label slds-text-body_small slds-has-focus",id:"option-00",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"search"}),l.default.createElement("span",{className:"slds-truncate",title:"'ibm' in Salesforce"},'"ibm" in Salesforce'))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-01",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure",sprite:"standard",symbol:"opportunity"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},l.default.createElement("mark",null,"IBM")," - 1yr/100k"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Opportunity • Proposal/Quote")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-02",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-account slds-icon_small slds-media__figure",sprite:"standard",symbol:"account"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},l.default.createElement("mark",null,"IBM")),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Account • Menlo Park")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-03",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-account slds-icon_small slds-media__figure",sprite:"standard",symbol:"account"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},l.default.createElement("mark",null,"IBM")," Watson"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Account • Menlo Park")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-04",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure",sprite:"standard",symbol:"opportunity"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"200 Service Licenses - ",l.default.createElement("mark",null,"IBM")),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"Opportunity • Close-Won")))),l.default.createElement("li",{role:"presentation"},l.default.createElement("span",{className:"slds-lookup__item-action slds-media",id:"option-05",role:"option"},l.default.createElement(s.default,{className:"slds-icon slds-icon-standard-contact slds-icon_small slds-media__figure",sprite:"standard",symbol:"contact"}),l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-lookup__result-text"},"Art Vandelay (",l.default.createElement("mark",null,"IBM"),")"),l.default.createElement("span",{className:"slds-lookup__result-meta slds-text-body_small"},"User • Latex Salesman")))))},E=t.GlobalHeaderDeprecated=function(e){return l.default.createElement("header",{className:(0,i.default)("slds-global-header_container",e.className)},l.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Navigation"),l.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Main Content"),l.default.createElement("div",{className:"slds-global-header slds-grid slds-grid_align-spread"},l.default.createElement("div",{className:"slds-global-header__item"},l.default.createElement("div",{className:"slds-global-header__logo"})),l.default.createElement("div",{className:"slds-global-header__item slds-global-header__item_search"},l.default.createElement(g,{expanded:e.expanded,value:e.searchingFor})),l.default.createElement("ul",{className:"slds-global-header__item slds-grid slds-grid_vertical-align-center"},l.default.createElement("li",{className:"slds-grid"},l.default.createElement(n.default,{className:(0,i.default)("slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon-favorites",{"slds-is-selected":e.favoritesSelected,"slds-is-disabled":e.favoritesDisabled}),disabled:e.favoritesDisabled,"aria-pressed":e.favoritesSelected?"true":"false",iconClassName:"slds-global-header__icon",symbol:"favorite",title:"Toggle Favorites",assistiveText:"Toggle Favorite"}),l.default.createElement("span",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.actions?"slds-is-open":null)},l.default.createElement(n.default,{className:(0,i.default)("slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon slds-m-left_none"),"aria-haspopup":"true",disabled:e.favoritesDisabled,symbol:"chevrondown",title:"View Favorites",assistiveText:"View Favorites"}))),l.default.createElement("li",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click slds-p-horizontal_xxx-small",e.actions?"slds-is-open":null)},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-small slds-button_icon-container slds-button_icon-x-small slds-global-header__button_icon-actions slds-m-horizontal_xx-small","aria-haspopup":"true",symbol:"add",title:"Global Actions",assistiveText:"Global Actions"}),e.actions?h:null),l.default.createElement("li",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.help?"slds-is-open":null)},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"question",title:"Help and Training",assistiveText:"Help and Training"})),l.default.createElement("li",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.setup?"slds-is-open":null)},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"setup",title:"Setup",assistiveText:"Setup"}),e.setup?b:null),l.default.createElement("li",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.setup?"slds-is-open":null)},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"notification",title:"Notifications",assistiveText:"Notifications"})),l.default.createElement("li",{className:(0,i.default)("slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small",e.setup?"slds-is-open":null)},l.default.createElement("button",{className:"slds-button",title:"person name","aria-haspopup":"true"},l.default.createElement("span",{className:"slds-avatar slds-avatar_circle slds-avatar_medium"},l.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"})))))),e.popoverMenu?e.children:null)};t.Context=function(e){return l.default.createElement("div",{className:"demo-only",style:{height:"340px"}},e.children)};t.default=l.default.createElement(r.default,{globalSearch:l.default.createElement(d.ComboboxGroup,{id:p.default.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-1",comboboxID:"primary-search-combobox-id-1",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",listbox:l.default.createElement(u.default,{id:"search-listbox-id-1","aria-label":"Recent Items",snapshot:f.SearchResults,type:"entity",count:6}),addon:l.default.createElement(c.default,{id:p.default.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",hasInteractions:!0,comboboxAriaControls:"primary-search-combobox-id-1",listboxId:p.default.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:l.default.createElement(m.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasInteractions:!0})});t.states=[{id:"deprecated-default",label:"Deprecated Default",element:l.default.createElement(E,null)},{id:"favorites-selected",label:"Favorites selected",element:l.default.createElement(E,{favoritesSelected:!0})},{id:"favorites-disabled",label:"Favorites disabled",element:l.default.createElement(E,{favoritesDisabled:!0})},{id:"actions-active",label:"Global actions active",element:l.default.createElement(E,{actions:!0})},{id:"global-header-setup-active",label:"Setup active",element:l.default.createElement(E,{setup:!0})},{id:"global-header-search-active",label:"Active",element:l.default.createElement(E,{expanded:!0}),script:"\n      document.getElementById('global-search-01').focus()\n    "},{id:"global-header-search-typeahead",label:"Typeahead",element:l.default.createElement(E,{expanded:!0,searchingFor:"ibm"}),script:"\n      document.getElementById('global-search-01').focus()\n    "}]}});