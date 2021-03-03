(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(8),r=n.n(a),s=n(2),c=n(7),l=n(3),u=n.n(l),p=(n(21),n(1)),f=Object(i.memo)((function(t){var e=t.blocklyConfig,n=t.blocklyToolboxConfig,o=t.blocklyWorkspaceRef,a=t.setRemainingBlocks,r=t.style,l=Object(i.useState)(null),f=Object(s.a)(l,2),h=f[0],m=f[1],d=n&&n.blocks;Object(i.useEffect)((function(){window.Blockly=u.a})),Object(i.useEffect)((function(){d&&Array.isArray(d.custom)&&d.custom.forEach((function(t){u.a.Blocks[t.type]={init:function(){this.jsonInit(t)}},u.a.JavaScript[t.type]=t.generatorCallback}))}),[h,d]),Object(i.useEffect)((function(){h&&(h.addChangeListener((function(){a(h.remainingCapacity())})),a(h.remainingCapacity()))}),[h,a]);var b=Object(i.useMemo)((function(){if(d&&(d.builtin||d.custom)){var t={kind:"flyoutToolbox",contents:[]};return d.builtin&&Array.isArray(d.builtin)&&d.builtin.forEach((function(e){return t.contents.push({kind:"block",type:e})})),d.custom&&Array.isArray(d.custom)&&d.custom.forEach((function(e){var n=e.type;return t.contents.push({kind:"block",type:n})})),t}}),[d]);return Object(i.useEffect)((function(){var t=Object(c.a)(Object(c.a)({},e||{}),{},{toolbox:b,trashcan:!0}),n=u.a.inject(document.querySelector(".blockly-div"),t);return m(n),u.a.JavaScript.STATEMENT_PREFIX="highlightBlock(%1);\n",u.a.JavaScript.addReservedWords("highlightBlock"),n.dispose.bind(n)}),[b,e]),Object(i.useEffect)((function(){o.current=h}),[h,o]),Object(p.jsx)("div",{className:"blockly-div",style:r})})),h=(n(23),{type:"movement_forward",message0:"forward",previousStatement:null,nextStatement:null,colour:285,tooltip:"Moves one step forward",helpUrl:"",generatorCallback:function(){return"forward();\n"}}),m={type:"movement_rotate",message0:"turn %1 %2",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["left \u21ba","L"],["right \u21bb","R"]]}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:285,tooltip:"Turn to the specified direction",helpUrl:"",generatorCallback:function(t){return"L"===t.getFieldValue("direction")?"turnLeft();\n":"turnRight();\n"}},d={type:"controls_if_path",message0:"if path %1 %2 %3 do %4",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["ahead","A"],["to the left \u21ba","L"],["to the right \u21bb","R"]]},{type:"input_dummy"},{type:"input_statement",name:"statement"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:210,tooltip:"Execute the 'do' statement if is possible to go to the specified direction",helpUrl:"",generatorCallback:function(t){var e=t.getFieldValue("direction");return"if (".concat("A"===e?"isPathForward()":"L"===e?"isPathToLeft()":"isPathToRight()",") {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"statement")||"","\n}")}},b={type:"controls_if_else_path",message0:"if path %1 %2 %3 do %4 else %5",args0:[{type:"input_dummy"},{type:"field_dropdown",name:"direction",options:[["ahead","A"],["to the left \u21ba","L"],["to the right \u21bb","R"]]},{type:"input_dummy"},{type:"input_statement",name:"truthy_statement"},{type:"input_statement",name:"falsy_statement"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:210,tooltip:"Execute the 'do' statement if is possible to go to the specified direction. Otherwise, it executes the 'else' statement.",helpUrl:"",generatorCallback:function(t){var e=t.getFieldValue("direction");return"if (".concat("A"===e?"isPathForward()":"L"===e?"isPathToLeft()":"isPathToRight()",") {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"truthy_statement")||"","\n} else {\n  ").concat(window.Blockly.JavaScript.statementToCode(t,"falsy_statement")||"","\n}")}},y={type:"controls_repeat_until_reach_end",message0:"repeat until \u2690 %1 do %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"statement"}],previousStatement:null,nextStatement:null,colour:120,tooltip:"Repeat the inside code until end is reached",helpUrl:"",generatorCallback:function(t){return"while (notDone()) {\n  ".concat(window.Blockly.JavaScript.statementToCode(t,"statement")||"","\n}")}},g=[{toolbox:{blocks:{builtin:[],custom:[h,m]}},map:{size:{rows:20,columns:20},path:[[9,10],[10,10],[11,10]],start:[9,10],finish:[11,10]}},{toolbox:{blocks:{builtin:[],custom:[h,m,y]}},map:{size:{rows:20,columns:20},path:[[9,10],[10,10],[11,10],[11,9],[11,8],[11,7],[11,6],[11,5]],start:[9,10],finish:[11,5]},blockly:{maxBlocks:5}},{toolbox:{blocks:{builtin:[],custom:[h,m,d,y]}},map:{size:{rows:20,columns:20},path:[[9,10],[10,10],[11,10],[12,10],[12,9],[12,8],[12,7],[12,6],[12,5],[11,5],[10,5],[9,5],[8,5],[7,5],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10]],start:[9,10],finish:[6,10]},blockly:{maxBlocks:4}},{toolbox:{blocks:{builtin:[],custom:[h,m,d,y]}},map:{size:{rows:20,columns:20},path:[[8,10],[9,10],[10,10],[11,10],[11,9],[11,8],[11,7],[11,6],[11,5],[11,4],[12,4],[13,4],[14,4]],start:[8,10],finish:[14,4]},blockly:{maxBlocks:6}},{toolbox:{blocks:{builtin:[],custom:[h,m,d,b,y]}},map:{size:{rows:20,columns:20},path:[[10,12],[11,12],[12,12],[13,12],[13,11],[13,10],[13,9],[13,8],[13,7],[13,6],[13,5],[13,4],[12,4],[11,4],[10,4],[9,4],[8,4],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,4],[12,6],[11,6],[11,5],[8,3],[8,2],[8,1],[9,1],[10,1],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[4,10],[3,10],[6,10],[7,10]],start:[10,12],finish:[1,4]},blockly:{maxBlocks:7}}];n(24);function j(t){var e=t.gameStatus,n=t.map,o=t.player,a=Object(i.useState)(0),r=Object(s.a)(a,2),c=r[0],l=r[1];Object(i.useEffect)((function(){function t(){var t=window.getComputedStyle(document.querySelector(".game .map")).width;l(parseInt(t)||0)}return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[l]);var u=n.size&&n.size.rows?n.size.rows:10,f=n.size&&n.size.columns?n.size.columns:10,h=function(t){for(var e=t.map,n=t.rows,i=t.columns,o=[],a=0;a<n;a++)o[a]=[],o[a].length=i;for(var r=function(t){for(var n=function(n){var i=e.path.find((function(e){return e[0]===n&&e[1]===t}));o[t][n]=i?"path":"extern"},a=0;a<i;a++)n(a)},s=0;s<n;s++)r(s);return e.start&&(o[e.start[1]][e.start[0]]="start"),e.finish&&(o[e.finish[1]][e.finish[0]]="finish"),o}({map:n,rows:u,columns:f});return Object(p.jsxs)("div",{className:"map",style:{"--columns":f,"--rows":u,"--map-width":c},children:[h.map((function(t,e){return Object(p.jsx)("div",{className:"row",children:t.map((function(t,e){return Object(p.jsx)("div",{className:"column ".concat(t),children:"finish"===t?"\u2690":""},"column-".concat(e))}))},"row-".concat(e))})),Object(p.jsx)("div",{className:"player ".concat(e||""),style:{"--column":o.position[0],"--row":o.position[1],"--angle":-o.angle},children:"\u27a4"})]})}function k(t){var e=t.player,n=t.map;return!!(e&&Array.isArray(e.position)&&n&&Array.isArray(n.finish))&&(e.position[0]===n.finish[0]&&e.position[1]===n.finish[1])}function w(t,e){var n=Object(s.a)(t,2),i=n[0],o=n[1];return!!Array.isArray(e)&&e.find((function(t){return t[0]===i&&t[1]===o}))}function v(t,e,n){t=Math.abs(t%360+360)%360;var i=e.position[0],o=e.position[1],a=n.size,r=a.columns,s=a.rows;return 0===t?i<r-1&&w([i+1,o],n.path):90===t?o>0&&w([i,o-1],n.path):180===t?i>0&&w([i-1,o],n.path):270===t&&(o<s-1&&w([i,o+1],n.path))}var O={forward:function(){this.workspace.lastExecutedFunction="forward";var t=Math.abs(this.player.angle%360+360)%360,e=this.player.position[0],n=this.player.position[1],i=this.map.size,o=i.columns,a=i.rows;0===t&&e+1<o?this.player.position[0]++:90===t&&n?this.player.position[1]--:180===t&&e?this.player.position[0]--:270===t&&n+1<a&&this.player.position[1]++,this.refresh()},turnLeft:function(){this.workspace.lastExecutedFunction="turnLeft",this.player.angle+=90,this.refresh()},turnRight:function(){this.workspace.lastExecutedFunction="turnRight",this.player.angle-=90,this.refresh()},notDone:function(){return this.workspace.lastExecutedFunction="notDone",!k({player:this.player,map:this.map})},isPathForward:function(){return this.workspace.lastExecutedFunction="isPathForward",v(this.player.angle,this.player,this.map)},isPathToLeft:function(){return this.workspace.lastExecutedFunction="isPathToLeft",v(this.player.angle+90,this.player,this.map)},isPathToRight:function(){return this.workspace.lastExecutedFunction="isPathToRight",v(this.player.angle-90,this.player,this.map)},highlightBlock:function(t){this.workspace.highlightBlock(t)}};function x(t){var e=t.player,n=t.map;if(!e||!Array.isArray(e.position)||!n||!Array.isArray(n.path))return!1;for(var i=0;i<n.path.length;i++)if(n.path[i][0]===e.position[0]&&n.path[i][1]===e.position[1])return!1;return!0}n(25);function S(t){var e=t.gameRef,n=t.gameStatus,o=t.onGameStatusChange,a=t.map,r=t.player,c=t.blocklyWorkspaceRef,l=t.remainingBlocks,u=Object(i.useState)(),f=Object(s.a)(u,2)[1];Object(i.useEffect)((function(){a.start&&(r.position[0]=a.start[0],r.position[1]=a.start[1])}),[a,r]);var h=Object(i.useCallback)((function(){x({player:r,map:a})&&o("collision"),f({})}),[f,o,r,a]);return e.current={interpreterInitHandler:function(t,e){var n={player:r,map:a,workspace:c&&c.current,refresh:h};Object.keys(O).forEach((function(i){t.setProperty(e,i,t.createNativeFunction(O[i].bind(n)))}))}},Object(p.jsxs)("div",{className:"game",children:[Object(p.jsx)(j,{gameStatus:n,player:r,map:a}),l!==1/0&&Object(p.jsx)("div",{className:"remaining-blocks-container",children:"Remaining blocks: ".concat(l)})]})}n(26);function E(t){for(var e=t.total,n=t.current,i=t.onChange,o=e>5?n-2<1?1:n-2:1,a=e>5?o+4>e?e:o+4:e,r=[],s=o;s<=a;s++)r.push(s);return Object(p.jsx)("ul",{className:"paging-list",children:r.map((function(t){return Object(p.jsx)("li",{className:t===n?"selected":"",onClick:function(){return i(t)},children:t},"".concat(t))}))})}function _(t){return{angle:0,position:[Array.isArray(t)&&t[0]||0,Array.isArray(t)&&t[1]||0]}}function C(){var t=Object(i.useState)(0),e=Object(s.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)("stop"),r=Object(s.a)(a,2),c=r[0],l=r[1],h=Object(i.useState)(1/0),m=Object(s.a)(h,2),d=m[0],b=m[1],y=Object(i.useRef)(null),j=Object(i.useRef)(null),w=Object(i.useMemo)(_,[]),v=Object(i.useMemo)((function(){return{status:"stop"}}),[]);Object(i.useEffect)((function(){v.status=c}),[c,v]),Object(i.useEffect)((function(){y.current&&y.current.highlightBlock()}),[c]);var O=Object(i.useMemo)((function(){return g[n]&&g[n].toolbox}),[n]),C=Object(i.useMemo)((function(){return g[n]&&g[n].blockly}),[n]),R=Object(i.useMemo)((function(){return g[n]&&g[n].map}),[n]);function A(){Object.assign(w,_(g[n].map.start)),l("stop")}var B={stop:function(){if(y.current){var t=u.a.JavaScript.workspaceToCode(y.current),e=new window.Interpreter(t,j.current&&j.current.interpreterInitHandler);v.status="running",l("running"),function t(){"running"===v.status&&(e.step()?setTimeout(t,function(){var t=["forward","turnLeft","turnRight"].find((function(t){return t===y.current.lastExecutedFunction}));return y.current.lastExecutedFunction="",t}()?500:0):x({player:w,map:R})?l("collision"):k({player:w,map:R})?l("finish"):l("fail"))}()}},running:A,collision:A,fail:A,finish:function(){n+1<g.length&&(o(n+1),Object.assign(w,_(g[n+1].map.start)),l("stop"))}};return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"game-button-container",children:[Object(p.jsx)(E,{total:g.length,current:n+1,onChange:function(t){o(t-1),Object.assign(w,_(g[t-1].map.start)),l("stop")}}),Object(p.jsx)(S,{remainingBlocks:d,setRemainingBlocks:b,gameRef:j,gameStatus:c,onGameStatusChange:l,map:R,player:w,blocklyWorkspaceRef:y}),Object(p.jsx)("button",{onClick:B[c],className:"run-button ".concat(c)})]}),Object(p.jsx)(f,{setRemainingBlocks:b,blocklyToolboxConfig:O,blocklyConfig:C,blocklyWorkspaceRef:y})]})}r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.11534b0e.chunk.js.map