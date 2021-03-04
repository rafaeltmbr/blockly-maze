(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(8),s=n.n(a),r=n(2),c=n(7),l=n(3),u=n.n(l),y=(n(21),n(1)),p=Object(i.memo)((function(t){var e=t.blocklyConfig,n=t.blocklyToolboxConfig,o=t.blocklyWorkspaceRef,a=t.setRemainingBlocks,s=t.style,l=Object(i.useState)(null),p=Object(r.a)(l,2),h=p[0],f=p[1],x=n.blocks;Object(i.useEffect)((function(){window.Blockly=u.a}),[]),Object(i.useEffect)((function(){x.custom&&x.custom.forEach((function(t){u.a.Blocks[t.type]={init:function(){this.jsonInit(t)}},u.a.JavaScript[t.type]=t.generatorCallback}))}),[h,x]),Object(i.useEffect)((function(){h&&(h.addChangeListener((function(){a(h.remainingCapacity())})),a(h.remainingCapacity()))}),[h,a]);var m=Object(i.useMemo)((function(){if(!x.builtin&&!x.custom)return{kind:"",contents:[]};var t={kind:"flyoutToolbox",contents:[]};return x.builtin&&Array.isArray(x.builtin)&&x.builtin.forEach((function(e){return t.contents.push({kind:"block",type:e})})),x.custom&&Array.isArray(x.custom)&&x.custom.forEach((function(e){var n=e.type;return t.contents.push({kind:"block",type:n})})),t}),[x]);return Object(i.useEffect)((function(){var t=Object(c.a)(Object(c.a)({},e||{}),{},{toolbox:m,trashcan:!0}),n=document.querySelector(".blockly-div");if(n){var i=u.a.inject(n,t);return f(i),u.a.JavaScript.STATEMENT_PREFIX="highlightBlock(%1);\n",u.a.JavaScript.addReservedWords("highlightBlock"),i.dispose.bind(i)}}),[m,e]),Object(i.useEffect)((function(){o.current=h}),[h,o]),Object(y.jsx)("div",{className:"blockly-div",style:s})})),h=(n(23),{type:"movement_forward",message0:"forward",previousStatement:null,nextStatement:null,colour:285,tooltip:"Moves one step forward",helpUrl:"",generatorCallback:function(){return"forward();\n"}}),f={type:"movement_rotate",message0:"turn %1 %2",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["left \u21ba","L"],["right \u21bb","R"]]}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:285,tooltip:"Turn to the specified direction",helpUrl:"",generatorCallback:function(t){return"L"===t.getFieldValue("direction")?"turnLeft();\n":"turnRight();\n"}},x={type:"controls_if_path",message0:"if path %1 %2 %3 do %4",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["ahead","A"],["to the left \u21ba","L"],["to the right \u21bb","R"]]},{type:"input_dummy"},{type:"input_statement",name:"statement"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:210,tooltip:"Execute the 'do' statement if is possible to go to the specified direction",helpUrl:"",generatorCallback:function(t){var e=t.getFieldValue("direction");return"if (".concat("A"===e?"isPathForward()":"L"===e?"isPathToLeft()":"isPathToRight()",") {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"statement")||"","\n}")}},m={type:"controls_if_else_path",message0:"if path %1 %2 %3 do %4 else %5",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["ahead","A"],["to the left \u21ba","L"],["to the right \u21bb","R"]]},{type:"input_dummy"},{type:"input_statement",name:"truthy_statement"},{type:"input_statement",name:"falsy_statement"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:210,tooltip:"Execute the 'do' statement if is possible to go to the specified direction. Otherwise, it executes the 'else' statement.",helpUrl:"",generatorCallback:function(t){var e=t.getFieldValue("direction");return"if (".concat("A"===e?"isPathForward()":"L"===e?"isPathToLeft()":"isPathToRight()",") {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"truthy_statement")||"","\n} else {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"falsy_statement")||"","\n}")}},d={type:"controls_repeat_until_reach_end",message0:"repeat until \u2690 %1 do %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"statement"}],previousStatement:null,nextStatement:null,colour:120,tooltip:"Repeat the inside code until end is reached",helpUrl:"",generatorCallback:function(t){return"while (notDone()) {\n  ".concat(window.Blockly.JavaScript.statementToCode(t,"statement")||"","\n}")}},b=[{toolbox:{blocks:{builtin:[],custom:[h,f]}},map:{size:{rows:20,columns:20},path:[{x:9,y:10},{x:10,y:10},{x:11,y:10}],start:{x:9,y:10},finish:{x:11,y:10}},blockly:{}},{toolbox:{blocks:{builtin:[],custom:[h,f,d]}},map:{size:{rows:20,columns:20},path:[{x:9,y:10},{x:10,y:10},{x:11,y:10},{x:11,y:9},{x:11,y:8},{x:11,y:7},{x:11,y:6},{x:11,y:5}],start:{x:9,y:10},finish:{x:11,y:5}},blockly:{maxBlocks:5}},{toolbox:{blocks:{builtin:[],custom:[h,f,x,d]}},map:{size:{rows:20,columns:20},path:[{x:9,y:10},{x:10,y:10},{x:11,y:10},{x:12,y:10},{x:12,y:9},{x:12,y:8},{x:12,y:7},{x:12,y:6},{x:12,y:5},{x:11,y:5},{x:10,y:5},{x:9,y:5},{x:8,y:5},{x:7,y:5},{x:6,y:5},{x:6,y:6},{x:6,y:7},{x:6,y:8},{x:6,y:9},{x:6,y:10}],start:{x:9,y:10},finish:{x:6,y:10}},blockly:{maxBlocks:4}},{toolbox:{blocks:{builtin:[],custom:[h,f,x,d]}},map:{size:{rows:20,columns:20},path:[{x:8,y:10},{x:9,y:10},{x:10,y:10},{x:11,y:10},{x:11,y:9},{x:11,y:8},{x:11,y:7},{x:11,y:6},{x:11,y:5},{x:11,y:4},{x:12,y:4},{x:13,y:4},{x:14,y:4}],start:{x:8,y:10},finish:{x:14,y:4}},blockly:{maxBlocks:6}},{toolbox:{blocks:{builtin:[],custom:[h,f,x,m,d]}},map:{size:{rows:20,columns:20},path:[{x:10,y:12},{x:11,y:12},{x:12,y:12},{x:13,y:12},{x:13,y:11},{x:13,y:10},{x:13,y:9},{x:13,y:8},{x:13,y:7},{x:13,y:6},{x:13,y:5},{x:13,y:4},{x:12,y:4},{x:11,y:4},{x:10,y:4},{x:9,y:4},{x:8,y:4},{x:7,y:4},{x:6,y:4},{x:5,y:4},{x:4,y:4},{x:3,y:4},{x:2,y:4},{x:1,y:4},{x:12,y:6},{x:11,y:6},{x:11,y:5},{x:8,y:3},{x:8,y:2},{x:8,y:1},{x:9,y:1},{x:10,y:1},{x:5,y:5},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:5,y:9},{x:5,y:10},{x:5,y:11},{x:5,y:12},{x:4,y:10},{x:3,y:10},{x:6,y:10},{x:7,y:10}],start:{x:10,y:12},finish:{x:1,y:4}},blockly:{maxBlocks:7}}];function g(t){switch(t){case C.Running:return"running";case C.Stop:return"stop";case C.Collision:return"collision";case C.Fail:return"fail";case C.Finish:return"finish"}}n(24);function k(t){var e=t.gameStatus,n=t.map,o=t.player,a=Object(i.useState)(0),s=Object(r.a)(a,2),c=s[0],l=s[1];Object(i.useEffect)((function(){function t(){var t=document.querySelector(".game .map"),e=(t?window.getComputedStyle(t):{width:"0"}).width;l(parseInt(e||"0"))}return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[l]);var u=n.size&&n.size.rows?n.size.rows:10,p=n.size&&n.size.columns?n.size.columns:10,h=function(t){for(var e=t.map,n=t.rows,i=t.columns,o=[],a=0;a<n;a++)o[a]=[],o[a].length=i;for(var s=function(t){for(var n=function(n){var i=e.path.find((function(e){return e.x===n&&e.y===t}));o[t][n]=i?"path":"extern"},a=0;a<i;a++)n(a)},r=0;r<n;r++)s(r);return e.start&&(o[e.start.y][e.start.x]="start"),e.finish&&(o[e.finish.y][e.finish.x]="finish"),o}({map:n,rows:u,columns:p}),f={"--columns":p,"--rows":u,"--map-width":c},x={"--column":o.position.x,"--row":o.position.y,"--angle":-o.angle};return Object(y.jsxs)("div",{className:"map",style:f,children:[h.map((function(t,e){return Object(y.jsx)("div",{className:"row",children:t.map((function(t,e){return Object(y.jsx)("div",{className:"column ".concat(t),children:"finish"===t?"\u2690":""},"column-".concat(e))}))},"row-".concat(e))})),Object(y.jsx)("div",{className:"player ".concat(g(e)),style:x,children:"\u27a4"})]})}function j(t){var e=t.player,n=t.map;return e.position.x===n.finish.x&&e.position.y===n.finish.y}function w(t,e){var n=t.x,i=t.y;return!!Array.isArray(e)&&void 0!==e.find((function(t){return t.x===n&&t.y===i}))}function v(t,e,n){t=Math.abs(t%360+360)%360;var i=e.position.x,o=e.position.y,a=n.size,s=a.columns,r=a.rows;return 0===t?i<s-1&&w({x:i+1,y:o},n.path):90===t?o>0&&w({x:i,y:o-1},n.path):180===t?i>0&&w({x:i-1,y:o},n.path):270===t&&(o<r-1&&w({x:i,y:o+1},n.path))}var O={forward:function(){this.workspace&&(this.workspace.lastExecutedFunction="forward");var t=Math.abs(this.player.angle%360+360)%360,e=this.player.position.x,n=this.player.position.y,i=this.map.size,o=i.columns,a=i.rows;0===t&&e+1<o?this.player.position.x++:90===t&&n?this.player.position.y--:180===t&&e?this.player.position.x--:270===t&&n+1<a&&this.player.position.y++,this.refresh({})},turnLeft:function(){this.workspace.lastExecutedFunction="turnLeft",this.player.angle+=90,this.refresh({})},turnRight:function(){this.workspace.lastExecutedFunction="turnRight",this.player.angle-=90,this.refresh({})},notDone:function(){return this.workspace.lastExecutedFunction="notDone",!j({player:this.player,map:this.map})},isPathForward:function(){return this.workspace.lastExecutedFunction="isPathForward",v(this.player.angle,this.player,this.map)},isPathToLeft:function(){return this.workspace.lastExecutedFunction="isPathToLeft",v(this.player.angle+90,this.player,this.map)},isPathToRight:function(){return this.workspace.lastExecutedFunction="isPathToRight",v(this.player.angle-90,this.player,this.map)},highlightBlock:function(t){this.workspace.highlightBlock(t)}};function S(t){for(var e=t.player,n=t.map,i=0;i<n.path.length;i++)if(n.path[i].x===e.position.x&&n.path[i].y===e.position.y)return!1;return!0}var C;n(25);function R(t){var e=t.gameRef,n=t.gameStatus,o=t.onGameStatusChange,a=t.map,s=t.player,c=t.blocklyWorkspaceRef,l=t.remainingBlocks,u=Object(i.useState)({}),p=Object(r.a)(u,2)[1];Object(i.useEffect)((function(){a.start&&(s.position.x=a.start.x,s.position.y=a.start.y)}),[a,s]);var h=Object(i.useCallback)((function(){S({player:s,map:a})&&o(C.Collision),p({})}),[p,o,s,a]);return e.current={interpreterInitHandler:function(t,e){var n={player:s,map:a,workspace:c.current,refresh:h};Object.keys(O).forEach((function(i){t.setProperty(e,i,t.createNativeFunction(O[i].bind(n)))}))}},Object(y.jsxs)("div",{className:"game",children:[Object(y.jsx)(k,{gameStatus:n,player:s,map:a}),l!==1/0&&Object(y.jsx)("div",{className:"remaining-blocks-container",children:"Remaining blocks: ".concat(l)})]})}!function(t){t[t.Running=0]="Running",t[t.Stop=1]="Stop",t[t.Collision=2]="Collision",t[t.Fail=3]="Fail",t[t.Finish=4]="Finish"}(C||(C={}));n(26);function E(t){for(var e=t.total,n=t.current,i=t.onChange,o=e>5?n-2<1?1:n-2:1,a=e>5?o+4>e?e:o+4:e,s=[],r=o;r<=a;r++)s.push(r);return Object(y.jsx)("ul",{className:"paging-list",children:s.map((function(t){return Object(y.jsx)("li",{className:t===n?"selected":"",onClick:function(){return i(t)},children:t},"".concat(t))}))})}function _(t){return{angle:0,position:{x:t?t.x:0,y:t?t.y:0}}}function F(){var t=Object(i.useState)(0),e=Object(r.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)(C.Stop),s=Object(r.a)(a,2),c=s[0],l=s[1],h=Object(i.useState)(1/0),f=Object(r.a)(h,2),x=f[0],m=f[1],d=Object(i.useRef)(null),k=Object(i.useRef)(null),w=Object(i.useMemo)(_,[]),v=Object(i.useMemo)((function(){return{status:C.Stop}}),[]);Object(i.useEffect)((function(){v.status=c}),[c,v]),Object(i.useEffect)((function(){d.current&&d.current.highlightBlock("")}),[c]);var O=Object(i.useMemo)((function(){return b[n].toolbox}),[n]),F=Object(i.useMemo)((function(){return b[n].blockly}),[n]),T=Object(i.useMemo)((function(){return b[n].map}),[n]);function B(){if(d.current&&k.current){var t=u.a.JavaScript.workspaceToCode(d.current),e=new window.Interpreter(t,k.current.interpreterInitHandler);v.status=C.Running,l(C.Running),function t(){v.status===C.Running&&(e.step()?setTimeout(t,function(){if(!d.current)return!1;var t=["forward","turnLeft","turnRight"].find((function(t){return t===d.current.lastExecutedFunction}));return d.current.lastExecutedFunction="",t}()?500:0):S({player:w,map:T})?l(C.Collision):j({player:w,map:T})?l(C.Finish):l(C.Fail))}()}}function L(){Object.assign(w,_(b[n].map.start)),l(C.Stop)}return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsxs)("div",{className:"game-button-container",children:[Object(y.jsx)(E,{total:b.length,current:n+1,onChange:function(t){o(t-1),Object.assign(w,_(b[t-1].map.start)),l(C.Stop)}}),Object(y.jsx)(R,{remainingBlocks:x,gameRef:k,gameStatus:c,onGameStatusChange:l,map:T,player:w,blocklyWorkspaceRef:d}),Object(y.jsx)("button",{onClick:function(){switch(c){case C.Running:L();break;case C.Stop:B();break;case C.Collision:case C.Fail:L();break;case C.Finish:n+1<b.length&&(o(n+1),Object.assign(w,_(b[n+1].map.start)),l(C.Stop))}},className:"run-button ".concat(g(c))})]}),Object(y.jsx)(p,{setRemainingBlocks:m,blocklyToolboxConfig:O,blocklyConfig:F,blocklyWorkspaceRef:d})]})}s.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0c844f19.chunk.js.map