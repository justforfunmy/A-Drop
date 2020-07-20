(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,t,n){const l=n(0);e.exports=function(e){Object.keys(e).forEach((function(t){this[t]=e[t]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"在开发中使用 HTTPS"),l.createElement("blockquote",null,l.createElement("p",null,"注意：此功能在 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"react-scripts@0.4.0"}}),"及更高版本中可用")),l.createElement("p",null,"您可能需要开发服务器通过 HTTPS 提供页面。一种可能有用的特殊情况是，当该 API 服务器本身正在为 HTTPS 服务时，使用“代理”功能将该请求代理到该 API 服务器。"),l.createElement("p",null,"为此，请将 HTTPS 环境变量设置为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"true"}}),"，然后像往常一样使用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"npm start"}}),"启动开发服务器："),l.createElement("h2",null,"Windows(cmd.exe)"),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"set HTTPS=true&amp;&amp;npm start\n"}})),l.createElement("blockquote",null,l.createElement("p",null,"（注意：缺少空格是有意的。）")),l.createElement("h2",null,"Windows(Powershell)"),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"($env:HTTPS = &quot;true&quot;) -and (npm start)\n"}})),l.createElement("h2",null,"Linux,macOS(Bash)"),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"HTTPS=true npm start\n"}})),l.createElement("p",null,"请注意，服务器将使用自签名证书，因此您的 Web 浏览器几乎肯定会在访问该页面时显示警告。"),l.createElement("h2",null,"自定义 SSL 证书"),l.createElement("p",null,"要设置自定义证书，请按照与上述 HTTPS 相同的方式，将",l.createElement("code",{dangerouslySetInnerHTML:{__html:"SSL_CRT_FILE"}}),"和",l.createElement("code",{dangerouslySetInnerHTML:{__html:"SSL_KEY_FILE"}}),"环境变量设置为证书和密钥文件的路径。请注意，您还需要设置",l.createElement("code",{dangerouslySetInnerHTML:{__html:"HTTPS = true"}}),"。"),l.createElement("h3",null,"Linux,macOS(Bash)"),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start\n"}})),l.createElement("p",null,"为了避免每次都必须设置环境变量，您可以在",l.createElement("code",{dangerouslySetInnerHTML:{__html:"npm start"}}),"脚本中包含如下所示："),l.createElement("pre",null,l.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'{\n  <span class="hljs-attr">&quot;start&quot;</span>: <span class="hljs-string">&quot;HTTPS=true react-scripts start&quot;</span>\n}\n'}})),l.createElement("p",null,"或者，您可以创建一个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"HTTPS = true"}}),"设置的",l.createElement("code",{dangerouslySetInnerHTML:{__html:".env"}}),"文件。"))}}}]);
//# sourceMappingURL=10.cf6d574e41.js.map