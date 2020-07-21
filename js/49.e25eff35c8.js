(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{200:function(e,n,t){const s=t(0);e.exports=function(e){Object.keys(e).forEach((function(n){this[n]=e[n]}));return s.createElement("section",{className:"markdown"},s.createElement("h1",null,"代码规范和代码美化"),s.createElement("h4",null,"代码规范"),s.createElement("p",null,"工具：Eslint"),s.createElement("ul",null,s.createElement("li",null,"安装")),s.createElement("ol",null,s.createElement("li",null,"使用 npm 或者 yarn 安装")),s.createElement("pre",null,s.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:'npm install eslint --save-dev\n<span class="hljs-meta">\n#</span><span class="bash"> or</span>\n\nyarn add eslint --dev\n'}})),s.createElement("ol",{start:"2"},s.createElement("li",null,"然后初始化配置文件")),s.createElement("pre",null,s.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"npx eslint --init\n"}})),s.createElement("p",null,"按提示完成后会得到 ",s.createElement("code",{dangerouslySetInnerHTML:{__html:"Eslint"}})," 的配置文件",s.createElement("code",{dangerouslySetInnerHTML:{__html:".eslintrc.{js,yml,json}"}})),s.createElement("ol",{start:"3"},s.createElement("li",null,"添加",s.createElement("code",{dangerouslySetInnerHTML:{__html:"standard"}}),"规范")),s.createElement("p",null,s.createElement("a",{href:"https://github.com/standard/eslint-config-standard"},"github 地址")),s.createElement("pre",null,s.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node\n"}})),s.createElement("p",null,"在你的配置文件中添加："),s.createElement("pre",null,s.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//.eslintrc.json</span>\n{\n\t<span class="hljs-attr">&quot;extends&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>\n}\n'}})),s.createElement("ol",{start:"4"},s.createElement("li",null,"添加自定义规则")),s.createElement("p",null,"具体规则内容详见",s.createElement("a",{href:"https://eslint.org/docs/rules/"},"Eslint 官网")),s.createElement("pre",null,s.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//.eslintrc.json</span>\n{\n\t<span class="hljs-attr">&quot;rules&quot;</span>: {\n\t\t<span class="hljs-attr">&quot;no-var&quot;</span>: <span class="hljs-string">&quot;error&quot;</span>, <span class="hljs-comment">// preference for let and const only</span>\n\t\t<span class="hljs-attr">&quot;prefer-const&quot;</span>: <span class="hljs-string">&quot;error&quot;</span>,\n\t\t<span class="hljs-attr">&quot;eqeqeq&quot;</span>: <span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-comment">//  warn to use === instead of ==</span>\n\t}\n}\n'}})),s.createElement("ol",{start:"5"},s.createElement("li",null,"检查代码")),s.createElement("p",null,"将命令写到",s.createElement("code",{dangerouslySetInnerHTML:{__html:"package.json"}}),"中："),s.createElement("pre",null,s.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//package.json</span>\n{\n\t<span class="hljs-attr">&quot;scripts&quot;</span>: {\n\t\t<span class="hljs-attr">&quot;lint&quot;</span>: <span class="hljs-string">&quot;./node_modules/.bin/eslint **/*.{js,jsx} --fix&quot;</span>\n\t}\n}\n'}})),s.createElement("p",null,s.createElement("code",{dangerouslySetInnerHTML:{__html:"--fix"}}),"选项用于自动修复问题"),s.createElement("h4",null,"代码美化"),s.createElement("p",null,"工具：Prettier"),s.createElement("ol",null,s.createElement("li",null,"安装")),s.createElement("pre",null,s.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add prettier eslint-plugin-prettier eslint-config-prettier --dev\n"}})),s.createElement("p",null,"eslint-plugin-prettier：配置 eslint 使用 prettier 对代码进行格式化"),s.createElement("p",null,"eslint-config-prettier：关闭一些不必要的或者是与 prettier 冲突的 lint 选项。"),s.createElement("ol",{start:"2"},s.createElement("li",null,"配置文件")),s.createElement("p",null,"在项目根目录创建",s.createElement("code",{dangerouslySetInnerHTML:{__html:".prettierrc.js"}}),":"),s.createElement("pre",null,s.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n\t<span class="hljs-attr">printWidth</span>: <span class="hljs-number">80</span>, <span class="hljs-comment">//一行的字符数换行</span>\n\t<span class="hljs-attr">tabWidth</span>: <span class="hljs-number">2</span>, <span class="hljs-comment">//一个tab代表几个空格数</span>\n\t<span class="hljs-attr">useTabs</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">//是否使用tab进行缩进</span>\n\t<span class="hljs-attr">singleQuote</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">//字符串是否使用单引号</span>\n\t<span class="hljs-attr">semi</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">//行尾是否使用分号，默认为true</span>\n\t<span class="hljs-attr">trailingComma</span>: <span class="hljs-string">&#x27;none&#x27;</span>, <span class="hljs-comment">//是否使用尾逗号</span>\n\t<span class="hljs-attr">bracketSpacing</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">//对象大括号直接是否有空格，默认为true，效果：{ foo: bar }</span>\n\t<span class="hljs-attr">endOfLine</span>: <span class="hljs-string">&#x27;auto&#x27;</span>, <span class="hljs-comment">// 保留在 Windows 和 Unix 下的换行符</span>\n}\n'}})),s.createElement("p",null,"自定义选项详见",s.createElement("a",{href:"https://prettier.io/docs/en/options.html"},"prettier 官网")),s.createElement("ol",{start:"3"},s.createElement("li",null,"解决和 eslint 的冲突")),s.createElement("pre",null,s.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'{\n\t<span class="hljs-attr">&quot;extends&quot;</span>: [<span class="hljs-string">&quot;plugin:prettier/recommended&quot;</span>]\n}\n'}})),s.createElement("ol",{start:"4"},s.createElement("li",null,"编写命令")),s.createElement("pre",null,s.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'{\n\t<span class="hljs-attr">&quot;scripts&quot;</span>: {\n\t\t<span class="hljs-attr">&quot;format&quot;</span>: <span class="hljs-string">&quot;prettier --write src/**/*.{js,jsx}&quot;</span>\n\t}\n}\n'}})))}}}]);
//# sourceMappingURL=49.e25eff35c8.js.map