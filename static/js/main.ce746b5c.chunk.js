(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(12),s=n.n(a),o=(n(17),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===c})))return{v:{x:n,y:c}}};;){var c=n();if("object"===typeof c)return c.v}}),r=function(t,e){for(var n=[],c=0;c<t;c++){var i=new Array(t).fill("");n.push(i)}n[e.y][e.x]="snake";var a=o(t,[e]);return n[a.y][a.x]="food",n},l={x:17,y:17},u=r(35,l),d=[1e3,500,100,50,10],b=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),f=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),j=Object.freeze({37:f.left,38:f.up,39:f.right,40:f.down}),h=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),m=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),O=n(0),v=function(t){var e=t.length,n=t.difficulty,c=void 0===n?3:n,i=t.onChangeDifficulty,a=c<d.length?"":"is-hidden",s=c>1?"":"is-hidden";return Object(O.jsxs)("div",{className:"navigation",children:[Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(O.jsx)("div",{className:"navigation-item-number-container",children:Object(O.jsx)("div",{className:"num-board",children:e})})]}),Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(O.jsxs)("div",{className:"navigation-item-number-container",children:[Object(O.jsx)("span",{className:"num-board",children:c}),Object(O.jsxs)("div",{className:"difficulty-button-container",children:[Object(O.jsx)("div",{className:"difficulty-button difficulty-up ".concat(a),onClick:function(){return i(c+1)}}),Object(O.jsx)("div",{className:"difficulty-button difficulty-down ".concat(s),onClick:function(){return i(c-1)}})]})]})]})]})},x=function(t){var e=t.fields;return Object(O.jsx)("div",{className:"field",children:e.map((function(t){return t.map((function(t){return Object(O.jsx)("div",{className:"dots ".concat(t)})}))}))})},p=function(t){var e=t.status,n=t.onStart,c=t.onStop,i=t.onRestart;return Object(O.jsxs)("div",{className:"button",children:[e===b.gameover&&Object(O.jsx)("button",{className:"btn btn-gameover",onClick:i,children:"gameover"}),e===b.init&&Object(O.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===b.suspended&&Object(O.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),e===b.playing&&Object(O.jsx)("button",{className:"btn btn-playing",onClick:c,children:"stop"})]})},g=n(5),y=n(7),N=function(t){var e=t.onChange;return Object(O.jsxs)("div",{className:"manipulation-panel",children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(f.left)},children:Object(O.jsx)(g.a,{icon:y.b})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(f.up)},children:Object(O.jsx)(g.a,{icon:y.d})}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(f.down)},children:Object(O.jsx)(g.a,{icon:y.a})})]}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(f.right)},children:Object(O.jsx)(g.a,{icon:y.c})})]})},k=n(11),w=n(3),C=null,S=function(){C&&clearInterval(C)},D=function(){var t=Object(c.useState)(u),e=Object(w.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),s=Object(w.a)(a,2),O=s[0],v=s[1],x=Object(c.useState)(b.init),p=Object(w.a)(x,2),g=p[0],y=p[1],N=Object(c.useState)(f.up),D=Object(w.a)(N,2),E=D[0],z=D[1],M=Object(c.useState)(3),I=Object(w.a)(M,2),L=I[0],A=I[1],B=Object(c.useState)(0),J=Object(w.a)(B,2),R=J[0],W=J[1];Object(c.useEffect)((function(){return v([l]),C=setInterval((function(){W((function(t){return t+1}))}),d[L-1]),S}),[L]),Object(c.useEffect)((function(){0!==O.length&&g===b.playing&&(q()||(S(),y(b.gameover)))}),[R]);var G=Object(c.useCallback)((function(t){g===b.playing&&h[E]!==t&&z(t)}),[E,g]),$=Object(c.useCallback)((function(t){g===b.init&&(t<1||t>d.length||A(t))}),[g]);Object(c.useEffect)((function(){var t=function(t){var e=j[t.keyCode];e&&G(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[G]);var q=function(){var t=O[0],e=t.x,c=t.y,a=m[E],s={x:e+a.x,y:c+a.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(n.length,s)||function(t,e){return"snake"===t[e.y][e.x]}(n,s))return!1;var r=Object(k.a)(O);if("food"!==n[s.y][s.x]){var l=r.pop();n[l.y][l.x]=""}else{var u=o(n.length,[].concat(Object(k.a)(r),[s]));n[u.y][u.x]="food"}return n[s.y][s.x]="snake",r.unshift(s),v(r),i(n),!0};return{body:O,difficulty:L,fields:n,status:g,start:function(){return y(b.playing)},stop:function(){return y(b.suspended)},reload:function(){C=setInterval((function(){W((function(t){return t+1}))}),100),y(b.init),v([l]),z(f.up),i(r(n.length,l))},updateDirection:G,updateDifficulty:$}};var E=function(){var t=D(),e=t.body,n=t.difficulty,c=t.fields,i=t.start,a=t.stop,s=t.reload,o=t.status,r=t.updateDirection,l=t.updateDifficulty;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(O.jsx)(v,{length:e.length,difficulty:n,onChangeDifficulty:l})]}),Object(O.jsx)("main",{className:"main",children:Object(O.jsx)(x,{fields:c})}),Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsx)(p,{status:o,onStop:a,onStart:i,onRestart:s}),Object(O.jsx)(N,{onChange:r})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ce746b5c.chunk.js.map