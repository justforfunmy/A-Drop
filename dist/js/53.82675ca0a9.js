(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{204:function(s,e,n){const a=n(0);s.exports=function(s){Object.keys(s).forEach((function(e){this[e]=s[e]}));return a.createElement("section",{className:"markdown"},a.createElement("h1",null,"webpack 入门"),a.createElement("h2",null,"主要概念"),a.createElement("ol",null,a.createElement("li",null,a.createElement("p",null,"entry:构建入口文件")),a.createElement("li",null,a.createElement("p",null,"output:构建输出")),a.createElement("li",null,a.createElement("p",null,"module:配置 loader 处理资源")),a.createElement("li",null,a.createElement("p",null,"plugin:配置插件")),a.createElement("li",null,a.createElement("p",null,"mode:构建模式，开发模式'development',生产模式'production'"))),a.createElement("h2",null,"资源处理"),a.createElement("p",null,a.createElement("strong",null,"注意：对同一资源的 loader 的处理顺序是从后往前")),a.createElement("ul",null,a.createElement("li",null,"处理 ",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css"}}),"资源")),a.createElement("ol",null,a.createElement("li",null,"css 资源")),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add css-loader style-loader --dev\n"}})),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"css-loader"}}),"+",a.createElement("code",{dangerouslySetInnerHTML:{__html:"style-loader"}}),"：",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css-loader"}}),"将",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css"}}),"文件处理成",a.createElement("code",{dangerouslySetInnerHTML:{__html:"commonjs"}}),"格式，",a.createElement("code",{dangerouslySetInnerHTML:{__html:"style-loader"}}),"将",a.createElement("code",{dangerouslySetInnerHTML:{__html:"commonjs"}}),"格式处理成",a.createElement("code",{dangerouslySetInnerHTML:{__html:"style节点格式"}})),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.css$/</span>,\n        use: [<span class="hljs-string">&#x27;style-loader&#x27;</span>, <span class="hljs-string">&#x27;css-loader&#x27;</span>]\n      }\n    ]\n  }\n};\n'}})),a.createElement("ol",{start:"2"},a.createElement("li",null,"less 资源")),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add less-loader --dev\n"}})),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"less-loader"}}),"+",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css-loader"}}),"+",a.createElement("code",{dangerouslySetInnerHTML:{__html:"style-loader"}}),"：其中",a.createElement("code",{dangerouslySetInnerHTML:{__html:"less-loader"}}),"将",a.createElement("code",{dangerouslySetInnerHTML:{__html:"less"}}),"文件处理成",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css"}}),"文件"),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.less$/</span>,\n        use: [<span class="hljs-string">&#x27;style-loader&#x27;</span>, <span class="hljs-string">&#x27;css-loader&#x27;</span>, <span class="hljs-string">&#x27;less-loader&#x27;</span>]\n      }\n    ]\n  }\n};\n'}})),a.createElement("ol",{start:"3"},a.createElement("li",null,"sass 资源")),a.createElement("p",null,"需要同时安装",a.createElement("code",{dangerouslySetInnerHTML:{__html:"sass-loader"}}),"和",a.createElement("code",{dangerouslySetInnerHTML:{__html:"sass"}})),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add sass sass-loader --dev\n"}})),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"sass-loader"}}),"+",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css-loader"}}),"+",a.createElement("code",{dangerouslySetInnerHTML:{__html:"style-loader"}}),"：其中",a.createElement("code",{dangerouslySetInnerHTML:{__html:"sass-loader"}}),"将",a.createElement("code",{dangerouslySetInnerHTML:{__html:"sass"}}),"文件处理成",a.createElement("code",{dangerouslySetInnerHTML:{__html:"css"}}),"文件"),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.s[ac]ss$/</span>,\n        use: [<span class="hljs-string">&#x27;style-loader&#x27;</span>, <span class="hljs-string">&#x27;css-loader&#x27;</span>, <span class="hljs-string">&#x27;sass-loader&#x27;</span>]\n      }\n    ]\n  }\n};\n'}})),a.createElement("h2",null,"处理图片资源"),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"url-loader"}})),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"url-loader"}}),"需要和",a.createElement("code",{dangerouslySetInnerHTML:{__html:"file-loader"}}),"一起安装"),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add file-loader url-loader --dev\n"}})),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.(png|jpg|gif|svg)$/</span>,\n        use: [\n          {\n            <span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;url-loader&#x27;</span>,\n            <span class="hljs-attr">options</span>: {\n              name(resourcePath, resourceQuery) {\n                <span class="hljs-comment">//文件命名</span>\n                <span class="hljs-keyword">if</span> (process.env.NODE_ENV === <span class="hljs-string">&#x27;development&#x27;</span>) {\n                  <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;[path][name].[ext]&#x27;</span>;\n                }\n\n                <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;[contenthash].[ext]&#x27;</span>;\n              },\n              <span class="hljs-comment">//目标文件夹</span>\n              <span class="hljs-attr">outputPath</span>: <span class="hljs-string">&#x27;media&#x27;</span>\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n'}})),a.createElement("h2",null,"处理 html 中资源"),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"url-loader"}}),"可以处理 js 和 css 中的引入文件，不能处理 html 中的引入资源,比如",a.createElement("code",{dangerouslySetInnerHTML:{__html:"&lt;img src='a.png' /&gt;"}}),",需要用到",a.createElement("code",{dangerouslySetInnerHTML:{__html:"html-loader"}})),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add html-loader --dev\n"}})),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.html$/</span>,\n        loader: <span class="hljs-string">&#x27;html-loader&#x27;</span>\n      }\n    ]\n  }\n};\n'}})),a.createElement("h2",null,"处理其他资源，如字体"),a.createElement("p",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:"file-loader"}})),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-comment">//排除已经可以处理的资源</span>\n        <span class="hljs-attr">exclude</span>: <span class="hljs-regexp">/.(css|less|scss|js|html|jpg|png|gif)$/</span>,\n        use: [\n          {\n            <span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;file-loader&#x27;</span>,\n            <span class="hljs-attr">options</span>: {\n              <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;[name].[ext]&#x27;</span>,\n              <span class="hljs-attr">outputPath</span>: <span class="hljs-string">&#x27;static&#x27;</span>\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n'}})),a.createElement("h2",null,"配置开发服务器"),a.createElement("pre",null,a.createElement("code",{className:"language-Shell",dangerouslySetInnerHTML:{__html:"yarn add webpack-dev-server --dev\n"}})),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">devServer</span>: {\n    <span class="hljs-attr">contentBase</span>: path.resolve(__dirname, <span class="hljs-string">&#x27;dist&#x27;</span>),\n    <span class="hljs-comment">//gzip压缩</span>\n    <span class="hljs-attr">compress</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">port</span>: <span class="hljs-number">3000</span>\n  }\n};\n'}})),a.createElement("pre",null,a.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:"//package.json\n&quot;scripts&quot;:{\n\t&quot;start&quot;:&quot;webpack-dev-server --open --config webpack.dev.js&quot;\n}\n"}})),a.createElement("h2",null,"开发模式基本配置"),a.createElement("pre",null,a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;path&#x27;</span>);\n<span class="hljs-keyword">const</span> HtmlWebpackPlugin = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;html-webpack-plugin&#x27;</span>);\n<span class="hljs-keyword">const</span> { CleanWebpackPlugin } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;clean-webpack-plugin&#x27;</span>);\n\n<span class="hljs-keyword">const</span> CssCommonLoader = [<span class="hljs-string">&#x27;style-loader&#x27;</span>, <span class="hljs-string">&#x27;css-loader&#x27;</span>];\n\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">entry</span>: <span class="hljs-string">&#x27;./src/index.js&#x27;</span>,\n  <span class="hljs-attr">output</span>: {\n    <span class="hljs-attr">filename</span>: <span class="hljs-string">&#x27;js/bundle.js&#x27;</span>,\n    <span class="hljs-attr">path</span>: path.resolve(__dirname, <span class="hljs-string">&#x27;dist&#x27;</span>)\n  },\n  <span class="hljs-attr">mode</span>: <span class="hljs-string">&#x27;development&#x27;</span>,\n  <span class="hljs-comment">//配置开发服务器</span>\n  <span class="hljs-attr">devServer</span>: {\n    <span class="hljs-attr">contentBase</span>: path.resolve(__dirname, <span class="hljs-string">&#x27;dist&#x27;</span>),\n    <span class="hljs-comment">//gzip压缩</span>\n    <span class="hljs-attr">compress</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">port</span>: <span class="hljs-number">3000</span>\n  },\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.css$/</span>,\n        use: [...CssCommonLoader]\n      },\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.less$/</span>,\n        use: [...CssCommonLoader, <span class="hljs-string">&#x27;less-loader&#x27;</span>]\n      },\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.s[ac]ss$/</span>,\n        use: [...CssCommonLoader, <span class="hljs-string">&#x27;sass-loader&#x27;</span>]\n      },\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.(png|jpg|gif|svg)$/</span>,\n        use: [\n          {\n            <span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;url-loader&#x27;</span>,\n            <span class="hljs-attr">options</span>: {\n              name(resourcePath, resourceQuery) {\n                <span class="hljs-keyword">if</span> (process.env.NODE_ENV === <span class="hljs-string">&#x27;development&#x27;</span>) {\n                  <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;[path][name].[ext]&#x27;</span>;\n                }\n                <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;[contenthash].[ext]&#x27;</span>;\n              },\n              <span class="hljs-attr">outputPath</span>: <span class="hljs-string">&#x27;media&#x27;</span>,\n              <span class="hljs-attr">limit</span>: <span class="hljs-number">8</span> * <span class="hljs-number">1024</span>\n            }\n          }\n        ]\n      },\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.html$/</span>,\n        loader: <span class="hljs-string">&#x27;html-loader&#x27;</span>\n      },\n      {\n        <span class="hljs-attr">exclude</span>: <span class="hljs-regexp">/.(css|less|scss|js|html|jpg|png|gif)$/</span>,\n        use: [\n          {\n            <span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;file-loader&#x27;</span>,\n            <span class="hljs-attr">options</span>: {\n              <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;[name].[ext]&#x27;</span>,\n              <span class="hljs-attr">outputPath</span>: <span class="hljs-string">&#x27;static&#x27;</span>\n            }\n          }\n        ]\n      }\n    ]\n  },\n  <span class="hljs-attr">plugins</span>: [\n    <span class="hljs-keyword">new</span> HtmlWebpackPlugin({\n      <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;./public/index.html&#x27;</span>\n    }),\n    <span class="hljs-keyword">new</span> CleanWebpackPlugin()\n  ]\n};\n'}})))}}}]);