(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(s,a,e){const n=e(0);s.exports=function(s){Object.keys(s).forEach((function(a){this[a]=s[a]}));return n.createElement("section",{className:"markdown"},n.createElement("h1",null,"你不知道的 css 边框"),n.createElement("h2",null,"1.默认情况下，背景会延伸至边框所在的区域下层。"),n.createElement("p",null,n.createElement("strong",null,"案例"),"：半透明边框没有出现"),n.createElement("pre",null,n.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.clip</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">10px</span> dashed <span class="hljs-built_in">hsla</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0%</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">0.5</span>);\n  <span class="hljs-attribute">background</span>: white;\n  <span class="hljs-comment">/* background-clip: padding-box; */</span>\n}\n'}})),n.createElement("p",null,"以上 css 样式在浏览器上的展示是这样子的，并没有出现半透明的边框："),n.createElement("p",null,n.createElement("img",{src:e(233).default,alt:"半透明未出现"})),n.createElement("p",null,n.createElement("strong",null,"解决办法"),"：",n.createElement("code",{dangerouslySetInnerHTML:{__html:"background-clip"}}),",初始值为",n.createElement("code",{dangerouslySetInnerHTML:{__html:"border-box"}}),",即背景会被元素的",n.createElement("code",{dangerouslySetInnerHTML:{__html:"border-box"}}),"裁切掉，如果不希望背景入侵边框所在的范围，就把它的值设定为",n.createElement("code",{dangerouslySetInnerHTML:{__html:"padding-box"}}),",以上代码取消注释即可，效果是这样的："),n.createElement("p",null,n.createElement("img",{src:e(234).default,alt:"半透明边框出现"})),n.createElement("h2",null,"2.多重边框"),n.createElement("p",null,n.createElement("strong",null,"实现方法"),"：",n.createElement("code",{dangerouslySetInnerHTML:{__html:"box-shadow"}}),",",n.createElement("code",{dangerouslySetInnerHTML:{__html:"outline"}}),"(仅两层边框)"),n.createElement("ul",null,n.createElement("li",null,"box-shadow")),n.createElement("pre",null,n.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-tag">box-shadow</span>: <span class="hljs-selector-tag">h-shadow</span> <span class="hljs-selector-tag">v-shadow</span> <span class="hljs-selector-tag">blur</span> <span class="hljs-selector-tag">spread</span> <span class="hljs-selector-tag">color</span> <span class="hljs-selector-tag">inset</span>;\n'}})),n.createElement("p",null,"h-shadow 必需。水平阴影的位置。允许负值。"),n.createElement("p",null,"v-shadow 必需。垂直阴影的位置。允许负值。"),n.createElement("p",null,"blur 可选。模糊距离。"),n.createElement("p",null,"spread 可选。阴影的尺寸。"),n.createElement("p",null,"color 可选。阴影的颜色。"),n.createElement("p",null,"inset 可选。将外部阴影 (outset) 改为内部阴影。"),n.createElement("p",null,n.createElement("strong",null,"box-shadow 的好处在于可以用逗号分隔，可以创建任意数量的投影。"),"例如："),n.createElement("pre",null,n.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.shadow</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">background</span>: green;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> <span class="hljs-number">10px</span> burlywood inset, <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> deeppink, <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span> darkblue;\n}\n'}})),n.createElement("p",null,n.createElement("img",{src:e(235).default,alt:"多重边框"}),n.createElement("strong",null,"注意"),"："),n.createElement("ol",null,n.createElement("li",null,"投影的行为和边框不完全一致，它不会影响布局，也不会收到 box-sizing 的影响"),n.createElement("li",null,n.createElement("code",{dangerouslySetInnerHTML:{__html:"box-shadow"}}),"属性中的",n.createElement("code",{dangerouslySetInnerHTML:{__html:"inset"}}),"关键字来使投影绘制在元素的内圈，此时需要设置额外的内边距来腾出足够的空间"),n.createElement("li",null,n.createElement("code",{dangerouslySetInnerHTML:{__html:"box-shadow"}}),"是层层叠加的，多层边框时需要按规律调整扩张半径，例如例子中，第一层为内边框，第二层尺寸为 10px，第三层尺寸为 20px")),n.createElement("ul",null,n.createElement("li",null,"outline",n.createElement("code",{dangerouslySetInnerHTML:{__html:"outline"}}),"属性用于描边，产生额外的外层边框",n.createElement("strong",null,"好处"),"：可以通过",n.createElement("code",{dangerouslySetInnerHTML:{__html:"outline-offset"}}),"来控制描边与元素边缘之间的距离。",n.createElement("strong",null,"注意"),"： 1.只能用于双层边框，因为不能加逗号分隔 2.不能贴合圆角")),n.createElement("pre",null,n.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.outline</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">10px</span> solid darkgrey;\n  <span class="hljs-attribute">outline</span>: <span class="hljs-number">5px</span> solid deeppink;\n  <span class="hljs-attribute">background</span>: white;\n}\n<span class="hljs-selector-class">.dashoutline</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">background</span>: white;\n  <span class="hljs-attribute">outline</span>: <span class="hljs-number">1px</span> dashed <span class="hljs-number">#111</span>;\n  <span class="hljs-attribute">outline-offset</span>: -<span class="hljs-number">10px</span>;\n}\n'}})),n.createElement("p",null,n.createElement("img",{src:e(236).default,alt:"outline实现双边框和缝线效果"})),n.createElement("h2",null,"3.边框内圆角"),n.createElement("p",null,"**实现：**利用 outline 不会跟着元素的圆角走，但 box-shadow 会跟着圆角走来实现。"),n.createElement("pre",null,n.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.inradius</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">background</span>: lightcoral;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> deeppink;\n  <span class="hljs-attribute">outline</span>: <span class="hljs-number">10px</span> solid deeppink;\n}\n'}})),n.createElement("p",null,n.createElement("img",{src:e(237).default,alt:"边框内圆角"})))}},233:function(s,a,e){"use strict";e.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAADwBAAAAADe6wxmAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAA86Mj6jAAAAB3RJTUUH5AcUFSkMe0ddtwAAANJJREFUeNrtzgENgCAAAEEqkID+8UyAHZjOd7tLcGP+zPg6IFwjLCwsLCwsnCIsLCwsLCycIiwsLCwsLJwiLCwsLCwsnCIsLCx8GF77MZewsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHA7XCUsLCwsLCycIiwsLCwsLJwiLCwsLCwsnCL8thuvI9L6zJwt3wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNy0yMFQxMzo0MToxMiswODowMHPB0SIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDctMjBUMTM6NDE6MTIrMDg6MDACnGmeAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI0MBm70G0AAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMzUyfJ26agAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk1MjIzNjcy9oqh9gAAABF0RVh0VGh1bWI6OlNpemUAMjY3QkLkSeQ9AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTU5NDkxMDI1NzU3MzUwMzNfMTRfWzBdiWjcVgAAAABJRU5ErkJggg=="},234:function(s,a,e){"use strict";e.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU0AAADUCAAAAAA9hS4nAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5AcUFSkT9k9QQgAAAgtJREFUeNrt3EFqwzAURdFsocvxcryb7LqdKgHXjXn4P8q54w+SzlAIPb6U6zG9gX8VzWQ0k9FMRjMZzWQ0k9FMRjMZzWQ0k9FMRjMZzWQ0k9FMRjMZzWQ0k9FMRjMZzWQ0k9FMRjMZzWQ0k51oPg97G9wPB7fXwe1wcL+6dk80abZGk2ZrNGm2RpNmazRptkZzSPN7Mpo0adJsiSbN1mjSbI0mzdZo0myNJs3WPng5M6o57USTJk2aNGm2R5NmazRptkaTZms0abZG80bNfWlUc93IPo12VdNtMU2aNGnSpEmTJk2aNdGk2RpNmq3RpNkaTZqt0aTZGk2ardGk2RpNmq2daG5Lo5rrRra/Ha1Pc21Uc9qJJk2aNGnSbI8mzdZo0myNJs3WaNJszY3cjZpui2nSpEmTJk2aNGnSrIkmzdZo0myNJs3WaNJsjSbN1mjSbI0mzdZo0mzNT7s3aq6Nak470aRJkyZNmu3RpNkaTZqt0aTZGk2ardG8UdNtMU2aNGnSpEmTJk2aNdGk2RpNmq19oPn87UT74eDbfzvb4eB+de2eaNJsjSbN1mjSbI0mzdZo0myNJs3WPng5o9NoJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJqOZjGYymsloJvsBY9hiTWMOUvkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTM6NDE6MTkrMDg6MDBxxoXYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDEzOjQxOjE5KzA4OjAwAJs9ZAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyMTKKwkUEAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADMzM13ALXoAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU5NTIyMzY3OWFYeH4AAAARdEVYdFRodW1iOjpTaXplADU4MEJCs/lZmwAAAEd0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml8xMF8xNTk0OTI0NjU1MTc1NDMwMF83MF9bMF3oFM2xAAAAAElFTkSuQmCC"},235:function(s,a,e){"use strict";e.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAD1CAMAAAD0zgXWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURQCAABEREQAAi/8Uk9C0friucFSVMx6HEgyDB56oYHWeRzWOIIqjVIAKj38Kj9a5iFIAAAUjSURBVHja7drRdqJIFAVQp0cQUfP/nzsCBRSa7mkLqiLJPtFO50Wz2OvcC5jDP7LzHBwChIJQECIUhIJQECIUhIJQECIUhIJQECIUhIJQECKM8+ubBCFChAgRIkSIECFChAgRIkSIECFChAjXEt4y5eOe28fjt9v47XZ7+Dn+78O3xSsgfCb8d1e5IXwi/NgXoRZqoRZqIUKECBEidDrjdEYLtVALEWohQoRvTHh8yyBE+JNOZ96f0OmMFv7MFlaFvrqHFm7dwvuRvefYP7I+ox+0cMMWhqNbOE+IWpjawqdje874fGTUwvWEE9u5ZCZOhOsHaRD8ijwiGqQpLYz8rudruUSI80rUwpQWjoLjoW2vbe7c32NmXNRQC19v4djBHq9wAmJsqIUJLZwEh8Nat3Wd+9k/RsSloRa+3MKpgz1f2QTEwVAL1wzSTwQveZ7TI1LsDOcaInx1kEYlDHalsiA8f0pokP7tIA0lLAo4Kz7UUAvTWhhKGI7s6XLKmu4NZsOJUAuTW9jN0XYiPBVLMOxGaTRJtTChhYsSnk5fYBjXUAtfbeEDYX9om1OTOfe3CIZ/JNTCF1sYBJsiGRB7Qy3crIUDYdMUQmzmGmrhCsLqGAjrmXDIIVfiHv5PCxH+/SCdV+EM2GT6mhmjZWiQprdwQTiWsAfM1sLutcMgPf2ZUAtfbuFEmA9wYhyXYURYaWH66cyS8FAgnxFq4YYtPHxJC+3CzXahFu69hYdDIUO7cMPrwiVhAcTmoIXfsYV24Va7UAt3f1HxPrsQYeogfZsWGqR7a6FBmtLCSgu10C786hYetVAL7UK7UAvdIzVI3Z3RQvdI3SPVQrvQ54VaqIV2oV2ohe6RGqTuzmihe6TukWqhXejzQi3UQrvQdSFCuxChFrpH6h6pXaiFPi/0eaEWOiN1XWgXInRd6HTGPVIttAt9XqiFdqHrQmekWmgXui60C90jRaiFWujzQteFCO3CH9VCf0eqhXahXYjQLkSohVpoF9qFCO1C14VaqIV2oV2I0C5EqIVaaBfahQjtQteFWqiFdqFdiNAuRKiFWmgX2oUI7ULXhVqohXahXYjQLkSohVpoF9qFCO1C14VaqIV2oV2I0C5EqIVaaBfahQjXtrApVEK7MNt1YakSamHGFjZ24b53YVfDJv8YRZixhdlr2NiFuQgvgbBHzPgVlfDSCWrhesLrRDghNhmn6GFBWLdXhKt3YV/DyzxJm2bqSq6cohYiXNPC40xYhxaemgLpBRFuOUijSZpdseObBRFuSzgZ5sz46heEmxF2p6RLwwK5TILxCSnClF0417A37B2zSnYvfxkF5xJqYXILA+HCsEzqUEItXNXC4zBJR8P6UpcEHEuIcN0gHWs4GNZBMuNjTvtYQoRJLZxq2NaxYv60o+C8ChGmEQ6GPeLAmP/RhlyXYxRhCmFkeG0L5zoJGqRrCTvDHvHOWATy2g7vdl5MUYRphBFiUCyV/i0HQYN0FWEVGZZOVS0FESa2cDDsGEtCVufxbedfBWEa4ThLFzlnej5l8XsgTCaMq1gyx3iIIlxH2CMeS+tVj78EwjWEvWK5fP5eCFcSTge3ig/zRv9Wi5f+TRBuQviVQYgQIcIdEb5/ECJEiBAhQoQIESJEiBAhQoQIESJEiHBbwh3l4/5E+ES45yBEiBAhQoQIESJEiBAhQoQIESJEiBBhCqEgFISCEKEgFISCEKEgFISCEKEgFISCEKEgFISCEKEgFISC8JvnP8KIKWBwg0LGAAAAAElFTkSuQmCC"},236:function(s,a,e){"use strict";e.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkIAAAGICAMAAACa4n99AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURf///xEREampqf8Uk1JSUvIlRQcAAAQXSURBVHja7dZBbsMwDERRWeX9z1w0KJAD2CGVwfuLAN1WD+asS7rV8i8QQkJICAkhCSEhJISEkISQEBJCQkhCSAgJISEkISSEhJAQkp4j9HN8XhMhhBBCCCGEhJAQQiib0D4yhBBCCCGEEEJICHlNhBBCCCGEEBJCQgghhBBCCCEhpO8gtAZDCCGEEEJICAkhhBBCCCGEEEJICCGEEEIIIYQQQkIIIYQQQgghhBASQkIIIYQQQgghISSEEEIIIYQQEkJCCCGEEEIIISEkhBBCCCGEEBJCQgghhBBCCCEhJIQQQgghhBASQkIIIYQQQgghISSEEEIIIYQQEkJCCCGEEEIIIYQQEkIIIYQQQgghhJAQEkIIIYQQQggJISGEEEIIIYSQEBJCCCGEEEIICSEhhBBCCCGEkBASQgghhBBCCAkhIYQQQgghhJAQEkIIIYQQQggJISGEEEIIIYSQEBJCCCGEEEIIIYSQEEIIIYQQQgghhIQQQgghhBBCCCEkhIQQQgghhBBCQkgIIYQQQgghJISEEEIIIYQQQkJICCGEEEIIISSEhBBCCCGEEEJCSAghlEXomBBCCCGEEEIIISHkNRFCCCGEEEJICAkhhBBCCCGEhJCOJXRyXhMhhBBCCCGEhJAQQiiVkISQEBJCQkhCSAgJISEkISSEhJAQkhASQkJICAkhCSEhJISEkISQEBJCQkhCSAgJISEkISSEhJAQkhASQkJICEkICSEhJIQkhISQEBJCEkJCSAgJIQkhISSEhJCEkBDSNxOqvbra5ZnyCPX5+VfkobIIVbcgX6IwQrUmYiiH0IwghoII7SFC9lAKoSlBDMUQWnN5rQhCNUjIGoogtAcJuWQRhNZyyfQUoddfHT8IxRLq+fIghBBCCNlCQkgOGUIIIYQQQrKFhJAcMocMIYSEkGwhIYQQQg6ZEBJCsoVsIYQQkkMmhIQQQraQLYQQQnLIhBBCCCGEkC0khOSQOWQIIYQQQrKFhBBCDplDhhBCQki2kC2EEEIIOWRCSAghZAvZQgghJIdMCCGEEEII2UJCSA4ZQgghhBBCsoWEkBwyhwwhhISQbCEhhBBCDpkQEkKyhWwhhBCSQyaEhBBCtpAthBBCcsiEEEIIIYSQLSSE5JA5ZAghhBBCsoWEEEIOmUOGEEJCSLaQLYQQQgg5ZEJICCFkC9lCCCEkh0wIIYQQQgjZQkJIDpkQQgghhGQLCSE5ZA4ZQgjpEUJ/f3X8IGQL2UIIvduDgrbnSiBUg4TKcyUQutwx3SS03THdIzRmiKAYQmUJ6R6hIUMEBRG6qv+WbYKiCPXvITsojlDrl8gXKJOQhJAQEkJCSEJICAkhISSEJISEkBASQhJCQkgICSEJISEkhISQhJAQEkJCSEJIH+8XJss3Hel7kfAAAAAASUVORK5CYII="},237:function(s,a,e){"use strict";e.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAADICAMAAAC3feR6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURfCAgBEREf8Uk4cSUflFiiupGX4AAAH8SURBVHja7dRBDsMgDEVBh/j+Z24X3TULKBE41bwTIEbfcehxhS+AJmiCBk3QBA2aoAkaNEETNEGDJmiCBk2PQzvXBegHtFYxaNCgQYMGDRo0aNCgQYMGDRo0aNCg/SVaZqwqE9odaOvEPm7QptFifdDm0DJ2lNBm0GJP0CbQIkqoQRtAy21oCe1XtIgaU4PWj5Yb0RJaN9pZEu2E1o0WUeQ+QoMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQbsfLTeaJbRutKMk2gGtG60VuY7QRtCyxtCgjaC1GkODNoTWSphBG0PLAscR2iDalq19vQHaINrysWWDNo32Zlvnlnn1AGjjaNuDBg0aNGjQoEGDBg0aNGjQoEGDBg3a49EuO9d16CY0QRM0aIImaNAETdAEDZqgCRo0QRM0aIImaNAETdAEDZqgCRo0QRM0aKrdC+TYNgdfGrAlAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=4.2baf45aa54.js.map