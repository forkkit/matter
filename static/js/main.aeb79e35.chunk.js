(this.webpackJsonpdots=this.webpackJsonpdots||[]).push([[0],{13:function(e,n,t){e.exports=t(20)},18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(18),t(3)),u=t(7),l=t(1),d=(t(19),t(2));var s=function(e,n){var t=Object(r.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.log(r),n}})),a=Object(c.a)(t,2),o=a[0],i=a[1];return[o,function(n){try{var t=n instanceof Function?n(o):n;i(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.log(r)}}]};function m(){var e=Object(l.a)(["\n  &.headerButtons + .headerButtons {\n    margin-left: 1rem;\n  }\n  @media (min-width: 799px) {\n    &.headerButtons + .headerButtonsRight {\n      margin-left: auto;\n    }\n  }\n  @media (max-width: 800px) {\n    &.fontButtons {\n      display: none;\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(l.a)(["\n  ",";\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n  font: inherit;\n  font-weight: 500;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  \n  &:focus {\n    border-color: var(--accent);\n    outline: ",";\n  }\n\n  & .ToggleButtonOption + .ToggleButtonOption:before {\n    content: '/';\n    color: var(--dimmed);\n    margin: 0 0.5em;\n  }\n\n  &.optionsButton {\n    margin-right: 0.5rem;\n  }\n"]);return f=function(){return e},e}var g=d.a.button(f(),(function(e){return e.isAccent?"white":"inherit"}),(function(e){return e.isAccent?"var(--accent)":"transparent"}),(function(e){return e.isAccent?"transparent":"var(--xDimmed)"}),(function(e){return e.isAccent?"4px solid var(--accentLight)":"none"})),h=d.a.span(p(),(function(e){return e.isActive?"":"color: var(--dimmed)"})),v=d.a.div(m()),b=g;var k=function(e){return r.createElement("svg",Object.assign({width:24,height:16,viewBox:"0 0 24 16",fill:"none"},e),r.createElement("path",{d:"M1 7l8 8L23 1",stroke:"currentColor",strokeLinecap:"round"}))},y=t(12);function x(){var e=Object(l.a)(["\n  border: 1px solid var(--border);\n  background-color: ",";\n  color: ",";\n  width: ",";\n  height: ",";\n  max-width: 3rem;\n  max-height: 3rem;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n    border-color: var(--accent);\n  }\n  \n  &:active {\n    border-color: transparent;\n    background-color: ",";\n    color: ",";\n  }\n"]);return x=function(){return e},e}var O=d.a.button(x(),(function(e){return e.isChecked?"var(--body)":"transparent"}),(function(e){return e.isChecked?"var(--background)":"var(--body)"}),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.isChecked?"transparent":"var(--body)"}),(function(e){return e.isChecked?"var(--body)":"var(--background)"})),E=function(e){var n=e.icon,t=e.isChecked,r=Object(y.a)(e,["icon","isChecked"]);return(a.a.createElement(O,Object.assign({className:"IconButton",isChecked:t},r),n))};E.defaultProps={size:"3rem"};var w=E;var j=function(e){return r.createElement("svg",Object.assign({width:18,height:18,viewBox:"0 0 18 18",fill:"none"},e),r.createElement("path",{d:"M1 17L17 1M17 17L1 1",stroke:"currentColor",strokeLinecap:"round"}))};function B(){var e=Object(l.a)(["\n  display: flex;\n  padding-left: 1rem;\n  margin-left: auto;\n\n  .IconButton + .IconButton {\n    margin-left: 0.5rem;\n  }\n"]);return B=function(){return e},e}function C(){var e=Object(l.a)(["\n  width: 100%;\n"]);return C=function(){return e},e}function A(){var e=Object(l.a)(["\n  -webkit-appearance: none;\n  width: 100%;\n  height: 22px;\n  border-radius: 0px;\n  background: none;\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%; \n    background: var(--body);\n    cursor: pointer;\n    top: 3px;\n    position: relative;\n  }\n\n  &::-moz-range-thumb {\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: var(--body);\n    cursor: pointer;\n    top: 3px;\n    position: relative;\n  }\n\n  &:focus::-webkit-slider-thumb {\n    box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 4px var(--background);\n  }\n  &:focus::-moz-range-thumb {\n    box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 4px var(--background);\n  }\n"]);return A=function(){return e},e}function T(){var e=Object(l.a)(["\n  width: 100%;\n  max-width: 30rem;\n  margin-right: 1rem;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: calc(100% - 18px);\n    height: 2px;\n    background-image: linear-gradient(90deg, var(--body), var(--body) 90%, transparent 90%, transparent 100%);\n    background-size: 11.1111% 1px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 2px;\n    z-index: -1;\n  }\n"]);return T=function(){return e},e}function S(){var e=Object(l.a)(["\n  display: flex;\n  min-height: 22px;\n  align-items: center;\n  justify-content: space-between;\n  ",";\n\n  .ToggleButton {\n    margin-left: auto;\n  }\n"]);return S=function(){return e},e}function z(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  \n  ",";\n"]);return z=function(){return e},e}function D(){var e=Object(l.a)(["\n  font: inherit;\n  font-size: var(--titleSize);\n  color: inherit;\n  border: none;\n  padding: 1px 0 0 0;\n  font-family: var(--themeFont);\n  letter-spacing: var(--themeFontLS);\n  background-color: transparent;\n  margin-right: 1rem;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"]);return D=function(){return e},e}function N(){var e=Object(l.a)(["\n  width: var(--maxDotSize);\n  height: var(--maxDotSize);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  @media (min-width: 960px) {\n    position: absolute;\n    left: calc(var(--maxDotSize) * -1 - 1rem);\n  }\n  \n  @media (max-width: 959px) {\n    margin-right: 1rem;\n  }\n"]);return N=function(){return e},e}function L(){var e=Object(l.a)(["\n  width: var(--dotSize);\n  height: var(--dotSize);\n  border-radius: 100%;\n  background-color: var(--accent);\n  cursor: pointer;\n"]);return L=function(){return e},e}function P(){var e=Object(l.a)(["\n  width: var(--maxDotSize);\n  height: var(--maxDotSize);\n  border-radius: 100%;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:focus {\n    outline: none;\n  }\n"]);return P=function(){return e},e}function F(){var e=Object(l.a)(["\n  font: inherit;\n  font-size: var(--titleSize);\n  color: inherit;\n  border: none;\n  cursor: text;\n  padding: 0;\n  font-family: var(--themeFont);\n  letter-spacing: var(--themeFontLS);\n  background-color: transparent;\n  ","\n  text-align: left;\n\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0 1px var(--accent);\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(l.a)(["\n"]);return I=function(){return e},e}function R(){var e=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background: var(--backdrop);\n  top: 0;\n  left: 0;\n  z-index: 10;\n"]);return R=function(){return e},e}function V(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  min-height: var(--taskPaddingY);\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n  background-color: var(--background);\n  ",";\n  ",";\n  ",";\n"]);return V=function(){return e},e}function M(){var e=Object(l.a)(["\n  width: 1px;\n  height: 1px;\n  display: block;\n  position: absolute;\n  top: -30vh;\n"]);return M=function(){return e},e}var G=d.a.div(M()),J=d.a.li(V(),(function(e){return e.isVisible&&"display: none"}),(function(e){return e.editorIsOpen?"z-index: 11":"z-index: 0"}),(function(e){return e.editorIsOpen&&"\n    box-shadow:\n    calc(50rem * -1 + 1rem*2) 0 var(--background),\n    calc(50rem - 1rem*2) 0 var(--background),\n    2rem 0 var(--background),\n    -2rem 0 var(--background);\n  "})),W=d.a.div(R()),H=d.a.div(I()),X=d.a.button(F(),(function(e){return e.isCompleted&&"text-decoration: line-through;"})),Y=d.a.button(P()),$=d.a.div(L()),q=d.a.div(N()),K=d.a.input(D()),Q=d.a.form(z(),(function(e){return e.isVisible?"":"\n    opacity: 0;\n    position: absolute;\n    left: -100vw;\n    width: 0;\n    height: 0"})),U=d.a.form(S(),(function(e){return e.isVisible?"":"\n    opacity: 0;\n    position: absolute;\n    left: -100vw;\n    width: 0;\n    height: 0"})),Z=d.a.div(T()),_=d.a.input(A()),ee=d.a.div(C()),ne=d.a.div(B()),te=function(e){var n=e.prority,t=e.onClick;return(a.a.createElement(Y,{onClick:t},a.a.createElement($,{prority:n,style:{"--dotSize":"calc(".concat(n,"rem / var(--dotRatio))")}})))},re=function(e){var n=e.task,t=e.titleInputOnChange,o=e.completeOnCLick,i=e.deleteOnCLick,u=e.isVisible,l=e.makeEditedPriority,d=e.setTasks,s=e.toggleRemoveFocus,m=Object(r.useState)(!1),p=Object(c.a)(m,2),f=p[0],g=p[1],h=Object(r.useState)(!1),v=Object(c.a)(h,2),y=v[0],x=v[1],O=Object(r.useState)(n.prority),E=Object(c.a)(O,2),B=E[0],C=E[1],A=f||y,T=Object(r.useRef)(null),S=Object(r.useRef)(null),z=Object(r.useRef)(null),D=function(e,t){t.preventDefault(),g(!1),x(!1),C(e),d(l(n.id,e)),d(s()),T.current.blur()};return Object(r.useEffect)((function(){var e=setTimeout((function(){y||C(n.prority)}),20);return function(){return clearTimeout(e)}}),[y,B,n.prority]),Object(r.useEffect)((function(){var e=setTimeout((function(){n.focused&&(console.log(n),g(!0),T.current.select(),z.current.scrollIntoView({behavior:"smooth"}))}),30);return function(){return clearTimeout(e)}}),[n,n.focused,n.id]),a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{editorIsOpen:A,isVisible:u},a.a.createElement(G,{ref:z}),a.a.createElement(q,null,a.a.createElement(te,{prority:A?B:n.prority,onClick:function(){return x(!0),void S.current.focus()}})),a.a.createElement(H,null,!f&&!y&&a.a.createElement(X,{onClick:function(){return g(!0),void T.current.select()},isCompleted:n.completed},n.title)),a.a.createElement(ee,{style:{width:f||y?"100%":"unset"}},a.a.createElement(Q,{isVisible:f&&!y},a.a.createElement(K,{value:n.title,onChange:t,ref:T}),a.a.createElement(b,{isAccent:!0,onClick:function(e){return D(B,e)}},"Done")),a.a.createElement(U,{isVisible:y},a.a.createElement(Z,null,a.a.createElement(_,{type:"range",min:1,max:10,value:B,onChange:function(e){return C(e.target.value)},ref:S})),a.a.createElement(b,{isAccent:!0,onClick:function(e){return D(B,e)}},"Done"))),!A&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,a.a.createElement(w,{icon:a.a.createElement(k,null),size:"var(--maxDotSize)",onClick:o,isChecked:n.completed}),a.a.createElement(w,{icon:a.a.createElement(j,null),size:"var(--maxDotSize)",onClick:i})))),A&&a.a.createElement(W,{onClick:function(e){return D(B,e)}}))},ae=t(5),oe=t.n(ae);function ie(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 1rem;\n"]);return ie=function(){return e},e}function ce(){var e=Object(l.a)(["\n  max-width: 50rem;\n  padding: 1rem 1rem 8rem 1rem;\n  margin: 0 auto;\n"]);return ce=function(){return e},e}function ue(){var e=Object(l.a)(["\n  max-width: 50rem;\n  padding: 2rem var(--pagePaddingX);\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  overflow: auto;\n\n  @media (max-width: 799px) {\n    padding: var(--pagePaddingX);\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object(l.a)(["\n  border-bottom: 1px solid var(--border);\n  background-color: var(--background);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n"]);return le=function(){return e},e}function de(){var e=Object(l.a)(["\n  .headerButtonsSpacer {\n    width: var(--pagePaddingX);\n    height: 1rem;\n    flex-shrink: 0;\n  }\n"]);return de=function(){return e},e}var se=d.a.div(de()),me=d.a.header(le()),pe=d.a.div(ue()),fe=d.a.ul(ce()),ge=d.a.div(ie()),he=[{id:1,title:"Buy tool to change pedals",prority:4,completed:!1,dateAdded:new Date("11/14/2019 00:01")},{id:2,title:"Clean the bike",prority:2,completed:!1,dateAdded:new Date("11/14/2013 00:02")},{id:3,title:"Get reel tape",prority:10,completed:!0,dateAdded:new Date("11/14/2013 00:03")},{id:4,title:"Buy center table",prority:1,completed:!0,dateAdded:new Date("11/14/2018 00:04")},{id:5,title:"Wash the bike",prority:7,completed:!1,dateAdded:new Date("11/14/2013 00:05")},{id:6,title:"Get reel tape",prority:3,completed:!0,dateAdded:new Date("11/14/2013 00:06")},{id:7,title:"Buy center table",prority:1,completed:!0,dateAdded:new Date("11/14/2013 00:07")},{id:8,title:"Get reel tape",prority:8,completed:!0,dateAdded:new Date("11/14/2013 00:08")},{id:9,title:"Buy center table",prority:1,completed:!0,dateAdded:new Date("11/14/2013 00:09")},{id:10,title:"Wash the bike",prority:6,completed:!1,dateAdded:new Date("11/14/2013 00:10")},{id:11,title:"Get reel tape",prority:3,completed:!0,dateAdded:new Date("11/14/2013 00:11")},{id:12,title:"Buy center table",prority:1,completed:!0,dateAdded:new Date("11/14/2013 00:12")}],ve=function(e){var n=e.tasks,t=e.setTasks,r=e.makeEditedTitle,o=e.makeEditedPriority,i=e.toggleCompleteTask,c=e.deleteTask,l=e.taskCompleted,d=e.order,s=e.toggleRemoveFocus;return a.a.createElement(a.a.Fragment,null,("highestPriority"===d?Object(u.a)(n).sort((function(e,n){return n.prority-e.prority})):Object(u.a)(n).sort((function(e,n){return n.dateAdded-e.dateAdded}))).map((function(e,n){return a.a.createElement(re,{isVisible:e.completed===l,task:e,key:n,titleInputOnChange:function(n){return t(r(e.id,n.target.value))},priorityInputOnChange:function(n){return t(o(e.id,n.target.value))},completeOnCLick:function(){return t(i(e.id))},deleteOnCLick:function(){return t(c(e.id))},prorityOnSave:function(n){return t(o(e.id,n.target.value))},makeEditedPriority:o,setTasks:t,storedTaskPrority:e.prority,toggleRemoveFocus:s})})))};var be=function(){var e=s("tasks",he),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(!0),u=Object(c.a)(i,2),l=u[0],d=u[1],m=s("order","dateAdded"),p=Object(c.a)(m,2),f=p[0],g=p[1],k=s("darkModeOn",!1),y=Object(c.a)(k,2),x=y[0],O=y[1],E=s("monoOn",!1),w=Object(c.a)(E,2),j=w[0],B=w[1],C=s("smallTextOn",!1),A=Object(c.a)(C,2),T=A[0],S=A[1];x?document.body.classList.add("dark"):document.body.classList.remove("dark"),j?document.body.classList.add("mono"):document.body.classList.remove("mono"),T?document.body.classList.add("smallText"):document.body.classList.remove("smallText");var z=function(){var e=[];return t.map((function(n){return e.push(n.id)})),e.length>0?Math.max.apply(Math,e):0},D=function(){var e=[];return e.push({id:z()+1,title:"New task",prority:1,completed:!1,dateAdded:new Date,focused:!0}),t.map((function(n){return e.push(n)})),e},N=t.filter((function(e){return!1===e.completed})).length,L=t.filter((function(e){return!0===e.completed})).length;return Object(r.useEffect)((function(){return oe.a.bind("alt+n",(function(e){e.preventDefault(),o(D())})),function(){oe.a.unbind("alt+n")}})),Object(r.useEffect)((function(){return oe.a.bind("shift+c+l",(function(e){e.preventDefault(),localStorage.clear()})),function(){oe.a.unbind("shift+c+l")}})),a.a.createElement(se,null,a.a.createElement(me,null,a.a.createElement(pe,null,a.a.createElement(v,{className:"headerButtons"},a.a.createElement(b,{onClick:function(){return d(!l)},className:"ToggleButton"},a.a.createElement(h,{isActive:l,className:"ToggleButtonOption"},"Pending ",a.a.createElement("span",{style:{color:"var(--dimmed)"}},N)),a.a.createElement(h,{isActive:!l,className:"ToggleButtonOption"},"Completed ",a.a.createElement("span",{style:{color:"var(--dimmed)"}},L)))),a.a.createElement(v,{className:"headerButtons"},a.a.createElement(b,{onClick:function(){return g("highestPriority"===f?"dateAdded":"highestPriority")},className:"ToggleButton"},a.a.createElement(h,{isActive:"highestPriority"===f,className:"ToggleButtonOption"},"Highest Priority"),a.a.createElement(h,{isActive:"dateAdded"===f,className:"ToggleButtonOption"},"Latest"))),a.a.createElement(v,{className:"headerButtons headerButtonsRight"},a.a.createElement(b,{onClick:function(){return O(!x)},className:"ToggleButton"},a.a.createElement(h,{isActive:!x,className:"ToggleButtonOption"},"Light"),a.a.createElement(h,{isActive:x,className:"ToggleButtonOption"},"Dark"))),a.a.createElement(v,{className:"headerButtons"},a.a.createElement(b,{onClick:function(){return B(!j)},className:"ToggleButton"},a.a.createElement(h,{isActive:!j,className:"ToggleButtonOption"},a.a.createElement("span",{style:{fontFamily:"var(--mono)",lineHeight:1}},"A")),a.a.createElement(h,{isActive:j,className:"ToggleButtonOption"},a.a.createElement("span",{style:{fontFamily:"var(--sans)",lineHeight:1}},"A")))),a.a.createElement(v,{className:"headerButtons fontButtons"},a.a.createElement(b,{onClick:function(){return S(!T)},className:"ToggleButton"},a.a.createElement(h,{isActive:!T,className:"ToggleButtonOption"},a.a.createElement("span",null,"T")),a.a.createElement(h,{isActive:T,className:"ToggleButtonOption"},a.a.createElement("span",{style:{fontSize:"70%"}},"T")))),a.a.createElement("div",{className:"headerButtonsSpacer"}))),a.a.createElement(fe,{key:f},l&&a.a.createElement(ge,null,a.a.createElement(b,{isAccent:!0,onClick:function(){return o(D())}},"New",a.a.createElement("span",{style:{opacity:.7,paddingLeft:"0.5em"}}," (alt + n)"))),a.a.createElement(ve,{tasks:t,order:f,setTasks:o,makeEditedTitle:function(e,n){var r=[];return t.map((function(t){return e===t.id&&(t.title=n),r.push(t)})),r},makeEditedPriority:function(e,n){var r=[];return t.map((function(t){return e===t.id&&(t.prority=n),r.push(t)})),r},toggleCompleteTask:function(e){var n=[];return t.map((function(t){return e===t.id&&(t.completed=!t.completed),n.push(t)})),n},deleteTask:function(e){return t.filter((function(n){return n.id!==e}))},taskCompleted:l,toggleRemoveFocus:function(){var e=[];return t.map((function(n){return n.focused&&(n.focused=!1),e.push(n)})),e}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.aeb79e35.chunk.js.map