var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/global-header/docs.mdx.js"]=function(e){function t(t){for(var o,n,i=t[0],r=t[1],c=t[2],u=0,m=[];u<i.length;u++)n=i[u],l[n]&&m.push(l[n][0]),l[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(d&&d(t);m.length;)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,i=1;i<a.length;i++){var r=a[i];0!==l[r]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},l={10:0},s=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=r;return s.push([105,0]),a()}({0:function(e,t){e.exports=React},100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SearchResults={option0:{name:"Recent Items",label:!0},option1:{name:"Salesforce - 1,000 Licenses",entityMeta:!0,entityType:"Opportunity",entityField:"Propecting"},option2:{name:"Art Vandelay",entityMeta:!0,entityType:"Contact",entityField:"avandelay@vandelay.com"},option3:{name:"Vandelay Industries",entityMeta:!0,entityType:"Account",entityField:"San Francisco"},option4:{name:"Salesforce UK 2016 Events",entityMeta:!0,entityType:"Event",entityField:"$20,000"},option5:{name:"H.E. Pennypacker",entityMeta:!0,entityType:"Lead",entityField:"Nursing"}},t.SearchResultsTypeahead={option1:{term:"Salesforce",beforeTerm:"",afterTerm:".com",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"},option2:{term:"Salesforce",beforeTerm:"",afterTerm:".org",entityMeta:!0,entityType:"Account",entityLocation:"New York, NY"},option3:{term:"Salesforce",beforeTerm:"",afterTerm:"HQ",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"}}},101:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=a(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l),n=a(16),i=a(15);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"render",value:function(){return s.default.createElement(n.Menu,{className:"slds-dropdown_right slds-nubbin_top-right",style:{right:"-1rem"}},s.default.createElement(n.MenuList,null,s.default.createElement(n.MenuItem,{iconLeft:s.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"event"}),tabIndex:"0"},"New Event"),s.default.createElement(n.MenuItem,{iconLeft:s.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"note"}),tabIndex:"0"},"New Note"),s.default.createElement(n.MenuItem,{iconLeft:s.default.createElement(i.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"email"}),tabIndex:"0"},"New Email")))}}]),t}();t.default=r},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.DynamicMenu=t.Footer=t.ListboxList=void 0;var o=c(a(0)),l=a(50),s=c(a(2)),n=a(30),i=c(a(4)),r=c(a(12));function c(e){return e&&e.__esModule?e:{default:e}}var d=["Acme","Edge SLA","Express Logistics SLA","GenePoint Lab Generators","GenePoint SLA","Pyramid Emergency Generators","United Oil Installations","United Oil Plant Standby Generators","University of AZ Installations","University of AZ Portable Generators"],u=t.ListboxList=function(e){return o.default.createElement(l.Listbox,{className:"slds-dropdown_length-10",vertical:!0,"aria-label":"My Favorites"},o.default.createElement(l.ListboxItem,null,o.default.createElement("div",{className:"slds-media slds-listbox__option slds-listbox__option_plain",role:"presentation"},o.default.createElement("h3",{className:"slds-text-title_caps",role:"presentation"},"My Favorites"))),d.slice(0,e.length).map(function(t,a){return o.default.createElement(l.ListboxItem,{key:t},o.default.createElement(l.EntityOption,{id:r.default.uniqueId("listbox-option-id-"),entityTitle:t,entityMeta:!0,tabIndex:0!==a||e.isCombobox?null:"0"}))}))},m=t.Footer=function(e){return o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("button",{className:"slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1"},o.default.createElement(i.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"add"}),"Favorite this page")),o.default.createElement("li",null,o.default.createElement("button",{className:"slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1"},o.default.createElement(i.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"edit"}),"Edit Favorites")))},f=t.DynamicMenu=function(e){return o.default.createElement(n.Popover,{className:"slds-nubbin_top-left slds-dynamic-menu",bodyClassName:"slds-p-horizontal_none",title:"My Favourites",footer:o.default.createElement(m,null),style:{position:"absolute",left:"0",top:"55px"}},e.children)};t.default=o.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},o.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"favorite",assistiveText:"Show Favorites",title:"Show Favorites"}),o.default.createElement(f,null,o.default.createElement("div",{className:"slds-p-vertical_x-small slds-p-horizontal_small"},o.default.createElement("h3",{className:"slds-text-title_caps slds-m-bottom_x-small",role:"presentation"},"My Favorites"),o.default.createElement("p",null,"You can favorite any page!"))));t.states=[{id:"dynamic-menu-0-items",label:"Dynamic Menu — 0 Items",element:o.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},o.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"favorite",assistiveText:"Show Favorites",title:"Show Favorites"}),o.default.createElement(f,null,o.default.createElement("div",{className:"slds-p-vertical_x-small slds-p-horizontal_small"},o.default.createElement("h3",{className:"slds-text-title_caps slds-m-bottom_x-small",role:"presentation"},"My Favorites"),o.default.createElement("p",null,"You can favorite any page!"))))},{id:"dynamic-menu-1-item",label:"Dynamic Menu — 1 Item",element:o.default.createElement("div",{className:"demo-only",style:{height:"13rem"}},o.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"favorite",assistiveText:"Show Favorites",title:"Show Favorites"}),o.default.createElement(f,null,o.default.createElement(u,{length:"1"})))},{id:"dynamic-menu-sub-10-item",label:"Dynamic Menu — <10 Items",element:o.default.createElement("div",{className:"demo-only",style:{height:"27rem"}},o.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"favorite",assistiveText:"Show Favorites",title:"Show Favorites"}),o.default.createElement(f,null,o.default.createElement(u,{length:"6"})))},{id:"dynamic-menu-over-10-item",label:"Dynamic Menu — >10 Items",element:o.default.createElement("div",{className:"demo-only",style:{height:"34rem"}},o.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"favorite",assistiveText:"Show Favorites",title:"Show Favorites"}),o.default.createElement(f,null,o.default.createElement(l.ComboboxContainer,{autocomplete:!0,isOpen:!0,placeholder:"Search Favorites",hideLabel:!0,inputIcon:"right",inputIconRightSymbol:"search",inputContainerClassName:"slds-m-around_small",listbox:o.default.createElement(u,{length:"12",isCombobox:!0}),staticListbox:!0})))}]},103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={item1:{username:"Val Handerly",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Could I please have a review on my presentation deck",timestamp:"10 hours ago",unread:!0},item2:{username:"Jon Rogers",avatar:"/assets/images/avatar3.jpg",title:"commented on your post",message:"I totally agree with your sentiment",timestamp:"13 hours ago",unread:!0},item3:{username:"Rebecca Stone",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Here's the conversation I mentioned to you",timestamp:"1 day ago",unread:!1}}},104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=a(0),s=r(l),n=r(a(1)),i=r(a(44));function r(e){return e&&e.__esModule?e:{default:e}}var c=[s.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus",key:"1"},"Skip to Navigation"),s.default.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus",key:"2"},"Skip to Main Content")],d=t.Logo=function(){return s.default.createElement("div",{className:"slds-global-header__logo"})},u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toggleFavorite=e.toggleFavorite.bind(e),e.showNotification=e.showNotification.bind(e),e.showIncomingNotification=e.showIncomingNotification.bind(e),e.state={favoritesClicked:!1,showNotification:!1,notificationCount:0},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"toggleFavorite",value:function(){this.setState({favoritesClicked:!this.state.favoritesClicked})}},{key:"showNotification",value:function(){this.setState({showNotification:!this.state.showNotification,notificationCount:1})}},{key:"showIncomingNotification",value:function(){this.setState({notificationCount:++this.state.notificationCount})}},{key:"render",value:function(){var e=this;return s.default.createElement("header",{className:(0,n.default)("slds-global-header_container",this.props.className)},c,s.default.createElement("div",{className:"slds-global-header slds-grid slds-grid_align-spread"},s.default.createElement("div",{className:"slds-global-header__item"},s.default.createElement(d,null)),!this.props.playground&&s.default.createElement("div",{className:"slds-global-header__item slds-global-header__item_search"},this.props.globalSearch),s.default.createElement("div",{className:"slds-global-header__item"},s.default.createElement(i.default,{toggleFavorite:this.toggleFavorite,favoritesClicked:this.state.favoritesClicked,favoritesDisabled:this.props.favoritesDisabled,showFavoritesPopup:this.props.showFavoritesPopup,showNotification:this.state.showNotification,notificationCount:this.state.notificationCount,showNotificationPopup:this.props.showNotificationPopup,showTaskMenu:this.props.showTaskMenu}))),this.props.playground&&s.default.createElement("div",{className:"slds-button-group slds-m-around_medium"},s.default.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showNotification()}},"Toggle Notification"),s.default.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showIncomingNotification()}},"Increase count")))}}]),t}();t.default=u},105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var o=a(0),l=(E(o),a(8)),s=E(l),n=E(a(6)),i=E(a(9)),r=E(a(7)),c=E(a(11)),d=a(104),u=E(d),m=a(44),f=E(m),p=E(a(43)),h=(E(a(42)),a(19)),b=E(a(32)),v=E(a(18)),_=a(10),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(100)),y=E(a(12));E(a(99));function E(e){return e&&e.__esModule?e:{default:e}}var x=l.factories.a,N=l.factories.code,w=l.factories.h2,S=l.factories.h3,C=l.factories.h4,T=l.factories.p,k=t.getElement=function(){return(0,o.createElement)(s.default,{},(0,o.createElement)("div",{className:"lead doc"},"The global header is the anchor for the Salesforce platform and spans all other parts of the UI. The functionality in the header is applicable across all contexts in the Salesforce ecosystem (internal or 3rd party)."),(0,o.createElement)(r.default,{title:"base global header"},(0,o.createElement)(n.default,{style:{position:"relative",height:"21.25rem"}},(0,o.createElement)(u.default,{globalSearch:(0,o.createElement)(h.ComboboxGroup,{id:y.default.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-1",comboboxID:"primary-search-combobox-id-1",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",listbox:(0,o.createElement)(v.default,{id:"search-listbox-id-1","aria-label":"Recent Items",snapshot:g.SearchResults,type:"entity",count:6}),addon:(0,o.createElement)(b.default,{id:y.default.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",hasInteractions:!0,comboboxAriaControls:"primary-search-combobox-id-1",listboxId:y.default.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:(0,o.createElement)(_.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasInteractions:!0})}))),w({id:"Structuring-the-Global-Header"},"Structuring the Global Header"),T({},"The global header is made up of 3 distinct sections, the logo, the global search, and the global actions. Each section is wrapped in a ",N({},"<div>")," with the classname ",N({},"slds-global-header__item"),". The search region gets the modifier class ",N({},"slds-global-header__item_search"),". This class provides particular styling to handle the search box."),(0,o.createElement)(r.default,{title:"global header layout"},(0,o.createElement)(i.default,{toggleCode:!1},(0,o.createElement)("header",{className:"slds-global-header_container"},(0,o.createElement)("div",{className:"slds-global-header"},(0,o.createElement)("div",{className:"slds-global-header__item"},"..."),(0,o.createElement)("div",{className:"slds-global-header__item slds-global-header__item_search"},"..."),(0,o.createElement)("div",{className:"slds-global-header__item"},"..."))))),T({},"In most scenarios, you will want to fixed the global header to the top of the viewport. To achieve this, wrap the global header component in a ",N({},"<div>")," with the classname ",N({},"slds-global-header_container"),"."),(0,o.createElement)(r.default,{title:"global header container"},(0,o.createElement)(i.default,{toggleCode:!1},(0,o.createElement)("header",{className:"slds-global-header_container"},(0,o.createElement)("div",{className:"slds-global-header"},"...")))),(0,o.createElement)(c.default,{type:"a11y",header:"Accessibility Requirement"},"For screen reading users, we need to provide a way to navigate over the global header and directly to content regions. For this scenario, we need to provide two links above the global header that provides navigation to landmarks within the app. These links are visually hidden by default but become visible when focused."),(0,o.createElement)(r.default,{title:"global header jump links"},(0,o.createElement)(i.default,{toggleCode:!1},(0,o.createElement)("header",{className:"slds-global-header_container"},(0,o.createElement)("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Navigation"),(0,o.createElement)("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Main Content"),(0,o.createElement)("div",{className:"slds-global-header"},"...")))),w({id:"Logo"},"Logo"),T({},"The logo region is simply a ",N({},"<div>")," with the classname ",N({},"slds-global-header__logo"),". The logo is applied as a background image with CSS. This allows us to constrain the dimensions of the logo by a max-height of 40px and a max-width of 200px."),(0,o.createElement)(n.default,{toggleCode:!1},(0,o.createElement)("div",{className:"slds-global-header__item"},(0,o.createElement)(d.Logo,null))),w({id:"Global-Search"},"Global Search"),T({},"The global search component is used for application wide search. The form element is implemented as a ",x({href:"/components/combobox"},"Combobox"),", please refer to the accessibility guidelines on the Combobox component page for implementation guidance."),S({id:"Default"},"Default"),(0,o.createElement)(r.default,{title:"Global Header Search Default State"},(0,o.createElement)(n.default,{style:{position:"relative",height:"3.5rem"}},(0,o.createElement)(u.default,{globalSearch:(0,o.createElement)(h.ComboboxGroup,{id:y.default.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-2",comboboxID:"primary-search-combobox-id-2",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",listbox:(0,o.createElement)(v.default,{id:"search-listbox-id-2","aria-label":"Recent Items",snapshot:g.SearchResults,type:"entity",count:6}),addon:(0,o.createElement)(b.default,{id:y.default.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",comboboxAriaControls:"primary-search-combobox-id-2",listboxId:y.default.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:(0,o.createElement)(_.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1})})}))),S({id:"Focused-and-expanded"},"Focused and expanded"),(0,o.createElement)(r.default,{title:"Global Header Search Expanded State"},(0,o.createElement)(n.default,{style:{position:"relative",height:"21rem"}},(0,o.createElement)(u.default,{globalSearch:(0,o.createElement)(h.ComboboxGroup,{id:y.default.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-3",comboboxID:"primary-search-combobox-id-3",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",listbox:(0,o.createElement)(v.default,{id:"search-listbox-id-3","aria-label":"Recent Items",snapshot:g.SearchResults,type:"entity",count:6}),addon:(0,o.createElement)(b.default,{id:y.default.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",comboboxAriaControls:"primary-search-combobox-id-3",listboxId:y.default.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:(0,o.createElement)(_.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasFocus:!0,isOpen:!0})}))),S({id:"Active-and-typing"},"Active and typing"),(0,o.createElement)(r.default,{title:"Global Header Search Active State"},(0,o.createElement)(n.default,{style:{position:"relative",height:"21rem"}},(0,o.createElement)(u.default,{globalSearch:(0,o.createElement)(h.ComboboxGroup,{id:y.default.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-4",comboboxID:"primary-search-combobox-id-4",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",value:"salesforce",listbox:(0,o.createElement)(v.default,{id:"search-listbox-id-4",term:"salesforce",snapshot:g.SearchResultsTypeahead,type:"entity",count:6}),"aria-activedescendant":"option0",addon:(0,o.createElement)(b.default,{id:y.default.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",comboboxAriaControls:"primary-search-combobox-id-4",listboxId:y.default.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:(0,o.createElement)(_.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasFocus:!0,isOpen:!0})}))),w({id:"Global-Actions-Bar"},"Global Actions Bar"),T({},"The global actions bar holds application wide task actions that will persist with the user through their experience."),T({},"The global actions bar is located in the right region of the global header."),(0,o.createElement)("div",{className:"docs-codeblock-example"},(0,o.createElement)("div",{style:{position:"relative",height:"3.125rem"}},(0,o.createElement)(u.default,null))),S({id:"Favorites"},"Favorites"),T({},'The favorites action is used to "favorite" a commonly used page within a user\'s experience. When a user "favorites" a page by pressing the favorites action, the button icon changes color with a small animation to confirm your selection.'),C({id:"Not-pressed"},"Not pressed"),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Favorites,null))),C({id:"Pressed"},"Pressed"),T({},"When pressed, apply the class ",N({},"slds-is-selected")," to the ",N({},"slds-global-actions__favorites-action")," button element."),(0,o.createElement)(c.default,{type:"a11y",header:"Accessibility Requirement"},"When the favorites action is pressed, we need to toggle the ",(0,o.createElement)("code",{className:"doc"},"aria-pressed")," attribute to ",(0,o.createElement)("code",{className:"doc"},"true"),". This will inform a screen reader that the button has been pressed."),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Favorites,{favoritesClicked:!0}))),C({id:"Disabled"},"Disabled"),T({},"If the favorites action needs to become disabled, apply the ",N({},"disabled")," attribute and the class ",N({},"slds-is-disabled")," to the button with ",N({},'class="slds-global-actions_favorites-action"'),"."),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Favorites,{favoritesDisabled:!0}))),C({id:"Favorites-popover"},"Favorites popover"),T({},"The favorites popover is invoked when a user clicks on the dropdown arrow action icon inside of the favorites button group. The favorites popover is implemented as a ",x({href:"/components/dynamic-menu/"},"Popover - Dynamic Menu Variant")," component, please refer to the accessibility guidelines on the Popover component page for implementation guidance."),(0,o.createElement)(n.default,{style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"16rem",minWidth:"400px"}},(0,o.createElement)(f.default,{showFavoritesPopup:!0})),S({id:"Task"},"Task"),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Task,null))),C({id:"Task-menu"},"Task menu"),T({},"When the global task action is invoked, a menu inside of a dropdown becomes visible. Please refer to the accessibility section of the ",x({href:"/components/menus"},"Menus component")," for implementation guidelines."),(0,o.createElement)(n.default,{style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"16rem",minWidth:"400px"}},(0,o.createElement)(f.default,{showTaskMenu:!0})),S({id:"Help"},"Help"),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Help,null))),S({id:"Setup"},"Setup"),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Setup,null))),S({id:"Notifications"},"Notifications"),T({},"Notifications are a way to notify a user about a global change within the application. This is commonly used to communicate a Chatter mention/reply or a status update on an opportunity pipeline."),(0,o.createElement)("div",{className:"docs-codeblock-example",style:{position:"relative",height:"7.5rem"}},(0,o.createElement)(u.default,{playground:!0})),C({id:"No-notifications"},"No notifications"),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Notifications,null))),C({id:"New-notifications"},"New notifications"),T({},"When a notification is coming through, we want to apply the ",N({},"slds-incoming-notification")," class to both the ",N({},"slds-global-actions__notifications")," button, as well as the ",N({},"slds-notification-badge"),". This will initiate the animation that there is a new incoming notification. A notification badge will also need to receive the ",N({},"slds-show-notification")," class, this ensures the badge becomes visible for the incoming animation to work. The ",N({},"slds-show-notification")," class should also be applied if a user has unread notifications upon their return to their application."),(0,o.createElement)(c.default,{type:"a11y",header:"Accessibility Note"},"The notification badge is hidden from screen readers by add the attribute ",(0,o.createElement)("code",{className:"doc"},'aria-hidden="true"'),' so the badge doesn\'t have to be inside the button itself. Since the badge count is hidden, we need to add the count number to the button text via some hidden assisitve text. The assistive text string should be updated with number of new notifications, such as "3 new notification". If there are no notifications, the assistive text should read "No notifications". The button element also requires ',(0,o.createElement)("code",{className:"doc"},'aria-live="assertive"')," to announce any count updates."),(0,o.createElement)(n.default,null,(0,o.createElement)("li",{className:"slds-global-actions__item"},(0,o.createElement)(m.Notifications,{showNotification:!0,notificationCount:"1"}))),C({id:"Notification-Popover"},"Notification Popover"),T({},"The notification popover is invoked when a user clicks on the notification action icon. The notification popover is implemented as a ",x({href:"/components/popovers"},"Popover component"),", please refer to the accessibility guidelines on the Popover component page for implementation guidance."),(0,o.createElement)("div",{className:"docs-codeblock-example",style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"25rem",minWidth:"400px"}},(0,o.createElement)(f.default,{showNotification:!0,notificationCount:"3",showNotificationPopup:!0})),(0,o.createElement)(i.default,null,(0,o.createElement)(p.default,null)),C({id:"Unread-notifications"},"Unread notifications"),T({},"When a notification item is unread, add the class ",N({},"slds-global-header__notification_unread")," to the ",N({},"slds-global-header__notification")," list item. This will provide the unread styles. In addition to adding the classname, please add a dot indicator, ",N({},'<abbr class="slds-text-link slds-m-horizontal_xxx-small" title="unread">●</abbr>'),", to provide visual affordance that the item is unread."))};t.getContents=function(){return(0,l.createTableOfContents)(k())}},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=a(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l),n=a(30),i=a(102);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"render",value:function(){return s.default.createElement(n.Popover,{className:"slds-nubbin_top slds-dynamic-menu",bodyClassName:"slds-p-horizontal_none",title:"My Favorites",footer:s.default.createElement(i.Footer,null),style:{position:"absolute",left:"-8rem",top:"36px"}},s.default.createElement(i.ListboxList,{length:this.props.numberOfFavorites}))}}]),t}();t.default=r},43:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=a(0),s=d(l),n=d(a(1)),i=a(20),r=a(30),c=d(a(103));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return s.default.createElement("li",{className:(0,n.default)("slds-global-header__notification",e.unread&&"slds-global-header__notification_unread",e.className),key:e.index},s.default.createElement("div",{className:"slds-media slds-has-flexi-truncate slds-p-around_x-small"},s.default.createElement("div",{className:"slds-media__figure"},s.default.createElement(i.Avatar,{className:"slds-avatar_small"},s.default.createElement("img",{alt:e.username,src:e.avatar,title:e.username+" avatar"}))),s.default.createElement("div",{className:"slds-media__body"},s.default.createElement("div",{className:"slds-grid slds-grid_align-spread"},s.default.createElement("a",{href:"javascript:void(0);",className:"slds-text-link_reset slds-has-flexi-truncate"},s.default.createElement("h3",{className:"slds-truncate",title:e.username+" "+e.title},s.default.createElement("strong",null,e.username+" "+e.title)),s.default.createElement("p",{className:"slds-truncate",title:e.message},e.message),s.default.createElement("p",{className:"slds-m-top_x-small slds-text-color_weak"},e.timestamp,e.unread&&s.default.createElement("abbr",{className:"slds-text-link slds-m-horizontal_xxx-small",title:"unread"},"●")))))))},m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.renderNotificationItems=e.renderNotificationItems.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"renderNotificationItems",value:function(e){var t=c.default[e];return s.default.createElement(u,{key:e,index:e,avatar:t.avatar,username:t.username,title:t.title,message:t.message,timestamp:t.timestamp,unread:t.unread})}},{key:"render",value:function(){return s.default.createElement(r.Popover,{className:"slds-popover_large slds-nubbin_top-right",bodyClassName:"slds-p-around_none",headerTitle:"Notifications",closeButton:!0,style:{position:"absolute",top:"calc(100% + 12px)",right:"-12px"}},s.default.createElement("ul",null,Object.keys(c.default).map(this.renderNotificationItems)))}}]),t}();t.default=m},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=t.Notifications=t.Setup=t.Help=t.Task=t.Favorites=void 0;var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=d(a(0)),s=d(a(1)),n=d(a(2)),i=d(a(43)),r=d(a(42)),c=d(a(101));function d(e){return e&&e.__esModule?e:{default:e}}var u=t.Favorites=function(e){return l.default.createElement("div",{className:"slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click"},l.default.createElement("div",{className:"slds-button-group"},l.default.createElement(n.default,{className:(0,s.default)("slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small",{"slds-is-disabled":e.favoritesDisabled,"slds-is-selected":e.favoritesClicked}),disabled:e.favoritesDisabled,"aria-pressed":e.favoritesClicked?"true":"false",symbol:"favorite",title:"Toggle Favorites",assistiveText:"Toggle Favorite",onClick:function(){return e.toggleFavorite()}}),l.default.createElement(n.default,{className:(0,s.default)("slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small"),iconClassName:"slds-button__icon_small",symbol:"down",title:"View Favorites",assistiveText:"View Favorites"})),e.showFavoritesPopup&&l.default.createElement(r.default,{numberOfFavorites:"2"}))},m=t.Task=function(e){return l.default.createElement("div",{className:(0,s.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.showTaskMenu&&"slds-is-open")},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action","aria-haspopup":"true",symbol:"add",title:"Global Actions",assistiveText:"Global Actions"}),e.showTaskMenu&&l.default.createElement(c.default,null))},f=t.Help=function(e){return l.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"question",title:"Help and Training",assistiveText:"Help and Training"}))},p=t.Setup=function(e){return l.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},l.default.createElement(n.default,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"setup",title:"Setup",assistiveText:"Setup"}))},h=t.Notifications=function(e){var t=e.notificationCount?e.notificationCount+" new notifications":"no new notifications";return l.default.createElement("div",{className:(0,s.default)("slds-dropdown-trigger slds-dropdown-trigger_click",e.showNotificationPopup&&"slds-is-open")},l.default.createElement(n.default,{className:(0,s.default)("slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action",{"slds-incoming-notification":e.showNotification&&e.notificationCount}),iconClassName:"slds-global-header__icon",symbol:"notification",title:t,assistiveText:t,"aria-live":"assertive","aria-atomic":"true"}),l.default.createElement("span",{"aria-hidden":"true",className:(0,s.default)("slds-notification-badge",e.notificationCount&&"slds-incoming-notification",e.showNotification&&"slds-show-notification")},e.notificationCount),e.showNotificationPopup&&l.default.createElement(i.default,null))},b=t.Avatar=function(e){return l.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},l.default.createElement("button",{className:"slds-button slds-global-actions__avatar slds-global-actions__item-action",title:"person name","aria-haspopup":"true"},l.default.createElement("span",{className:"slds-avatar slds-avatar_circle slds-avatar_medium"},l.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.toggleFavorite,a=e.favoritesClicked,o=e.favoritesDisabled,s=e.showFavoritesPopup,n=e.showNotification,i=e.notificationCount,r=e.showNotificationPopup,c=e.showTaskMenu;return l.default.createElement("ul",{className:"slds-global-actions"},l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(u,{toggleFavorite:t,favoritesClicked:a,favoritesDisabled:o,showFavoritesPopup:s})),l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(m,{showTaskMenu:c})),l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(f,null)),l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(p,null)),l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(h,{showNotification:n,notificationCount:i,showNotificationPopup:r})),l.default.createElement("li",{className:"slds-global-actions__item"},l.default.createElement(b,null)))}}]),t}();t.default=v},5:function(e,t){e.exports=JSBeautify},98:function(e,t){e.exports=".docs-codeblock-example .slds-global-header_container {\n  position: absolute; }\n\n.docs-codeblock-example .slds-global-actions__item {\n  list-style: none; }\n"},99:function(e,t,a){var o=a(98);"string"==typeof o&&(o=[[e.i,o,""]]);var l={hmr:!0,transform:void 0};a(24)(o,l);o.locals&&(e.exports=o.locals)}});