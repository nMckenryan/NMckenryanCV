(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var l=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){var t,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+l?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),l)):(t=n,e())}};t.default=l},Ijbi:function(e,t,a){var l=a("WkPL");e.exports=function(e){if(Array.isArray(e))return l(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var l=a("Ijbi"),n=a("EbDI"),i=a("ZhPi"),r=a("Bnag");e.exports=function(e){return l(e)||n(e)||i(e)||r()}},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("FdF9"),n=a("7oih");function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r=a("dI71"),s=a("YIkO"),o=a.n(s),c=a("dwco"),u=a.n(c),m=function(e){return e.children},f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(i(t)),t}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,l=this.props,n=l.type,i=l.element,r=l.offset,s=l.timeout;if(n&&i)switch(n){case"class":a=!!(t=document.getElementsByClassName(i)[0]);break;case"id":a=!!(t=document.getElementById(i))}a?this.scrollTo(t,r,s):console.log("Element not found: "+i)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:l+t,left:0,behavior:"smooth"})}),a):window.scroll({top:l+t,left:0,behavior:"smooth"})},a.render=function(){return l.default.createElement(m,null,"object"==typeof this.props.children?l.default.cloneElement(this.props.children,{onClick:this.handleClick}):l.default.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.default.Component),d=a("aQrd"),p=a.n(d),h=a("obyI"),v=a.n(h),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Contact Me",href:"contact"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(i(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return l.default.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.default.createElement("a",{className:"navbar-brand",href:"#page-top"},l.default.createElement("span",{className:"d-block d-lg-none"},v.a.firstName," ",v.a.lastName),l.default.createElement("span",{className:"d-none d-lg-block"},l.default.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:""}))),l.default.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},l.default.createElement("span",{className:"navbar-toggler-icon"})),l.default.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},l.default.createElement(o.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return l.default.createElement("li",{className:"nav-item",key:a},l.default.createElement(f,{type:"id",element:a},l.default.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(l.Component);t.default=function(){return l.default.createElement(n.a,null,l.default.createElement(E,null),l.default.createElement("div",{className:"container-fluid p-0"},l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h1",{className:"mb-0"},v.a.firstName,l.default.createElement("span",{className:"text-primary"},v.a.lastName)),l.default.createElement("div",{className:"subheading mb-5"},v.a.address," ·",l.default.createElement("a",{name:"email",href:"mailto:"+v.a.email},v.a.email)),l.default.createElement("p",{className:"lead mb-5"},"Graduate of Computing and Information Sciences, Aspiring Web and Mobile Developer Former Radio Major/Journalist."),l.default.createElement("p",{className:"lead mb-5"},"My Goal is to attain an intermediate level of experience in the Technology Field within the next five years."),l.default.createElement("div",{className:"social-icons"},v.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.default.createElement("a",{name:"social",key:a,href:a},l.default.createElement("i",{className:"fab "+t}))}))))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Experience"),l.default.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.default.createElement("div",{className:"resume-content"},l.default.createElement("h3",{className:"mb-0"},"Chief Invoicing Systems Administrator"),l.default.createElement("div",{className:"subheading mb-3"},"Ecotricity NZ"),l.default.createElement("ul",null,l.default.createElement("li",null,"Initialising Monthly Invoicing Processes"),l.default.createElement("li",null,"Resolving Invoicing and System Errors"),l.default.createElement("li",null,"Establishing and Maintaining Workstations"),l.default.createElement("li",null,"Maintaining Ecotricity's Data Servers through SQL Queries"),l.default.createElement("li",null,"Improving efficiency for the Customer Service Team"),l.default.createElement("li",null,"Advising the Metering, Customer Service, Sales and Reporting Teams"),l.default.createElement("li",null,"Co-ordinating with the external support team to resolve technical issues"))),l.default.createElement("div",{className:"resume-date text-md-right"},l.default.createElement("span",{className:"text-primary"},"August 2019 - August 2020"))),l.default.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.default.createElement("div",{className:"resume-content"},l.default.createElement("h3",{className:"mb-0"},"Chief Complaints Resolution Manager"),l.default.createElement("div",{className:"subheading mb-3"},"Ecotricity NZ"),l.default.createElement("p",null,l.default.createElement("ul",null,l.default.createElement("li",null,"Responding to client complaints and reaching resolutions with customers."),l.default.createElement("li",null,"Co-ordinating with Utilities Disputes"),l.default.createElement("li",null,"Establishing and Maintaining Workstations"),l.default.createElement("li",null,"Maintaining Ecotricity's Data Servers through SQL Queries"),l.default.createElement("li",null,"Relaying Customer Feedback to change makers in Ecotricity."),l.default.createElement("li",null,"Solving Customers' account problems.")))),l.default.createElement("div",{className:"resume-date text-md-right"},l.default.createElement("span",{className:"text-primary"},"February 2019 - August 2019"))),l.default.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.default.createElement("div",{className:"resume-content"},l.default.createElement("h3",{className:"mb-0"},"Digital Marketing and Web Development Intern"),l.default.createElement("div",{className:"subheading mb-3"},"Screenies International Children's Film Festival"),l.default.createElement("ul",null,l.default.createElement("li",null,"Composing and scheduling Social Media updates"),l.default.createElement("li",null,"Editing the Screenies Wordpress Website"),l.default.createElement("li",null,"Conducting Outreach with Community"),l.default.createElement("li",null,"Providing Technical Support - Collating Media Packages"))),l.default.createElement("div",{className:"resume-date text-md-right"},l.default.createElement("span",{className:"text-primary"},"March 2018 - June 2018"))))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Education"),l.default.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.default.createElement("div",{className:"resume-content"},l.default.createElement("h3",{className:"mb-0"},"Auckland University of Technlogy"),l.default.createElement("div",{className:"subheading mb-3"},"Graduate Diploma of Computing and Information Sciences"),l.default.createElement("div",null,"Computer Science - Web Development Track")),l.default.createElement("div",{className:"resume-date text-md-right"},l.default.createElement("span",{className:"text-primary"},"February 2017 - July 2018"))),l.default.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.default.createElement("div",{className:"resume-content"},l.default.createElement("h3",{className:"mb-0"},"Auckland University of Technlogy"),l.default.createElement("div",{className:"subheading mb-3"},"Bachelor of Communications"),l.default.createElement("div",null,"Radio Major")),l.default.createElement("div",{className:"resume-date text-md-right"},l.default.createElement("span",{className:"text-primary"},"March 2012 - November 2014"))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Certifications"),l.default.createElement("ul",{className:"fa-ul mb-0"},l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Google Academy"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"CCNA 1: Introduction to Networks"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"HubSpot Academy: Emailing Marketing"))))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Skills"),l.default.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.default.createElement("ul",{className:"list-inline dev-icons"},l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-html5"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-css3-alt"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-bootstrap"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-js-square"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-react"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-sass"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-wordpress"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-git-alt"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-github"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-java"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-android"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{className:"fab fa-npm"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-bitcoin"})),l.default.createElement("li",{className:"list-inline-item"},l.default.createElement("i",{class:"fab fa-linux"}))),l.default.createElement("div",{className:"subheading mb-3"},"Skills"),l.default.createElement("ul",{className:"fa-ul mb-0"},l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Social Media Management and Marketing"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Usability Testing and Documentation"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Project Management: Agile Development & Scrum"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Proficiency with Adobe Photoshop and Premier"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Recording and Editing Audio"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Client Side Hardware Setup"),l.default.createElement("li",null,l.default.createElement("i",{className:"fa-li fa fa-check"}),"Device Repair and Maintenance")))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Interests"),l.default.createElement("p",null,"Apart from developing my Web Development skils, I enjoy learning about History, Political Science and related subjects. In addition, I've always had a deep appreciate for Comedy, Satire and Fantasy/Science Fiction."),l.default.createElement("p",null,"As either a Player or a Game Master, I enjoy roleplaying games such as Dungeons and Dragons. I've also developed a proficiency for painting Miniatures for use in board games."),l.default.createElement("p",{className:"mb-0"},"I also enjoy writing in a Variety of styles including Media Reviews, Comedy Skits, Radio Reports and Essays. My Articles have been included in publications such as Debate and The SpeakEasy."),l.default.createElement("p",null,"After short detour in Chinese and Russian.Recently, I've returned to learning French, J'ai un vocabulaire pratique, mais je développe toujours mes compétences d'écoute et de grammaire"))),l.default.createElement("hr",{className:"m-0"}),l.default.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"contact"},l.default.createElement("div",{className:"w-100"},l.default.createElement("h2",{className:"mb-5"},"Contact Me"),l.default.createElement("form",{action:"https://getform.io/f/7524d987-a89c-4e2a-9d12-d8dfca315754",method:"POST"},l.default.createElement("div",{className:"p-3 col-md-6"},l.default.createElement("h4",null,"Name"),l.default.createElement("input",{type:"text",name:"name",required:!0})),l.default.createElement("div",{className:"p-3 col-md-6"},l.default.createElement("h4",null,"Email Address"),l.default.createElement("input",{type:"email",name:"email",required:!0})),l.default.createElement("div",{className:"w-50 p-3"},l.default.createElement("h4",null,"Message"),l.default.createElement("textarea",{type:"text",name:"message",cols:"40",rows:"5",required:!0}),l.default.createElement("br",null),l.default.createElement("small",null,"Form powered by GetForm, Messages go directly to my Email Address"),l.default.createElement("br",null),l.default.createElement("button",{type:"submit",class:"btn btn-primary"},"Send")))))))}},SksO:function(e,t){function a(t,l){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,l)}e.exports=a},TSYQ:function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l)&&l.length){var r=n.apply(null,l);r&&e.push(r)}else if("object"===i)for(var s in l)a.call(l,s)&&l[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}e.exports=function(e,t,l){return t&&a(e.prototype,t),l&&a(e,l),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}},YIkO:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("pVnL")),i=l(a("lSNA")),r=l(a("RIqP")),s=l(a("lwsE")),o=l(a("a1gu")),c=l(a("Nsbk")),u=l(a("PJYZ")),m=l(a("W8MJ")),f=l(a("7W2i")),d=l(a("17x9")),p=l(a("FdF9")),h=l(a("TSYQ")),v=l(a("Fxm3"));var E=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,o.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,f.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],l=0,n=e.length;l<n;l++)a[l]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],l=[],n=e||this.state.targetItems,i=!1,s=0,o=n.length;s<o;s++){var c=n[s],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):a.push(c);var m=s===o-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&m&&f&&(a.pop(),a.push.apply(a,(0,r.default)(t)),t=[c],l=this._fillArray(l,!1),u=!0),l.push(u)}return{inView:t,outView:a,viewStatusList:l,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(l)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,l=a.rootEl,n=a.offset;l&&(t=document.querySelector(l).getBoundingClientRect());var i=e.getBoundingClientRect(),r=l?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,o=s+r,c=l?i.top+s-t.top+n:i.top+s+n,u=c+e.offsetHeight;return c<o&&u>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,l=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=l}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),l=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(l)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,l=a.children,r=a.className,s=a.scrolledPastClassName,o=a.style,c=0,u=p.default.Children.map(l,(function(t,a){var l;if(!t)return null;var r=t.type,o=s&&e.state.isScrolledPast[a],u=(0,h.default)((l={},(0,i.default)(l,"".concat(t.props.className),t.props.className),(0,i.default)(l,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,i.default)(l,"".concat(e.props.scrolledPastClassName),o),l));return p.default.createElement(r,(0,n.default)({},t.props,{className:u,key:c++}),t.props.children)})),m=(0,h.default)((0,i.default)({},"".concat(r),r));return p.default.createElement(t,{className:m,style:o},u)}}]),t}(p.default.Component);t.default=E},ZhPi:function(e,t,a){var l=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}},a1gu:function(e,t,a){var l=a("cDf5"),n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?n(e):t}},aQrd:function(e,t,a){e.exports=a.p+"static/avatar-f9c948da7488bee334ddadfbc38250d7.png"},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||s,scrollIntoView:l.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(o(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==o(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==o(arguments[0])){var a=f(this),l=a.getBoundingClientRect(),i=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+i.left-l.left,a.scrollTop+i.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function u(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function m(e){var t=c(e,"Y")&&u(e,"Y"),a=c(e,"X")&&u(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function d(t){var a,l,n,r,s=(i()-t.startTime)/468;r=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*r)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(d.bind(e,t))}function p(a,l,r){var o,c,u,m,f=i();a===t.body?(o=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=n.scroll):(o=a,c=a.scrollLeft,u=a.scrollTop,m=s),d({scrollable:o,method:m,startTime:f,startX:c,startY:u,x:l,y:r})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Nigel Mckenzie-Ryan Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#6a0001",manifestThemeColor:"#6a0001",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/nMckenryanResume/",firstName:"Nigel",lastName:"Mckenzie-Ryan",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/nMckenryan"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/nmckenryan/"}],email:"n.mckenryan@gmail.com",phone:"Inquire for my Phone Number",address:"Auckland Central, New Zealand"}}}]);
//# sourceMappingURL=component---src-pages-index-js-7d4de5b4acec9726e192.js.map