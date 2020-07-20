(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{189:function(s,n,a){const A=a(0);s.exports=function(s){Object.keys(s).forEach((function(n){this[n]=s[n]}));return A.createElement("section",{className:"markdown"},A.createElement("h1",null,"单向链表"),A.createElement("p",null,"单向链表（单链表）是链表的一种，其特点是链表的链接方向是单向的，对链表的访问要通过顺序读取从头部开始；链表是使用指针进行构造的列表；又称为结点列表，因为链表是由一个个结点组装起来的；其中每个结点都有指针成员变量指向列表中的下一个结点；列表是由结点构成，head 指针指向第一个成为表头结点，而终止于最后一个指向 NULL 的指针。",A.createElement("img",{src:a(225).default,alt:"单向链表图示.png"})),A.createElement("h2",null,"JavaScript 实现"),A.createElement("pre",null,A.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">LinkedList</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Node</span>(<span class="hljs-params">data</span>) </span>{\n    <span class="hljs-built_in">this</span>.data = data;\n    <span class="hljs-built_in">this</span>.next = <span class="hljs-literal">null</span>;\n  }\n  <span class="hljs-built_in">this</span>.head = <span class="hljs-literal">null</span>;\n  <span class="hljs-built_in">this</span>.length = <span class="hljs-number">0</span>;\n\n  <span class="hljs-comment">//append:向列表尾部添加一个项</span>\n  LinkedList.prototype.append = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">element</span>) </span>{\n    <span class="hljs-comment">//判断head是否为空</span>\n    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.head === <span class="hljs-literal">null</span>) {\n      <span class="hljs-built_in">this</span>.head = <span class="hljs-keyword">new</span> Node(element);\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-comment">//找到next为空的节点</span>\n      <span class="hljs-keyword">let</span> current = <span class="hljs-built_in">this</span>.head;\n      <span class="hljs-keyword">while</span> (current.next != <span class="hljs-literal">null</span>) {\n        current = current.next;\n      }\n      current.next = <span class="hljs-keyword">new</span> Node(element);\n    }\n    <span class="hljs-built_in">this</span>.length++;\n  };\n\n  <span class="hljs-comment">//insert(position,element):向列表的特定位置插入一个新的项</span>\n  LinkedList.prototype.insert = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">position, element</span>) </span>{\n    <span class="hljs-keyword">if</span> (position &lt; <span class="hljs-number">0</span> || position &gt; <span class="hljs-built_in">this</span>.length) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n    <span class="hljs-keyword">let</span> node = <span class="hljs-keyword">new</span> Node(element);\n    <span class="hljs-keyword">if</span> (position === <span class="hljs-number">0</span>) {\n      <span class="hljs-keyword">let</span> head = <span class="hljs-built_in">this</span>.head;\n      <span class="hljs-built_in">this</span>.head = node;\n      node.next = head;\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-keyword">let</span> current = <span class="hljs-built_in">this</span>.head;\n      <span class="hljs-comment">//找到对应位置的前一项</span>\n      <span class="hljs-keyword">while</span> (position &gt; <span class="hljs-number">1</span>) {\n        current = current.next;\n        position--;\n      }\n      <span class="hljs-comment">//获取当前项的原始next值</span>\n      <span class="hljs-keyword">let</span> pre = current.next;\n      <span class="hljs-comment">//让当前项的next指向插入的节点</span>\n      current.next = node;\n      <span class="hljs-comment">//让插入的节点的next值指向原始的next节点</span>\n      node.next = pre;\n    }\n    <span class="hljs-built_in">this</span>.length++;\n    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n  };\n\n  <span class="hljs-comment">//get(position):获取对应位置的元素</span>\n  LinkedList.prototype.get = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">position</span>) </span>{\n    <span class="hljs-keyword">if</span> (position &lt; <span class="hljs-number">0</span> || position &gt; <span class="hljs-built_in">this</span>.length - <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n    <span class="hljs-keyword">let</span> current = <span class="hljs-built_in">this</span>.head;\n    <span class="hljs-keyword">while</span> (position-- &gt; <span class="hljs-number">0</span>) {\n      current = current.next;\n    }\n    <span class="hljs-keyword">return</span> current.data;\n  };\n\n  <span class="hljs-comment">//indexOf(element):返回元素在列表中的索引。如果列表中没有则返回-1</span>\n  LinkedList.prototype.indexOf = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">element</span>) </span>{\n    <span class="hljs-keyword">let</span> current = <span class="hljs-built_in">this</span>.head;\n    <span class="hljs-keyword">let</span> idx = <span class="hljs-number">0</span>;\n    <span class="hljs-keyword">while</span> (current) {\n      <span class="hljs-keyword">if</span> (current.data === element) {\n        <span class="hljs-keyword">return</span> idx;\n      } <span class="hljs-keyword">else</span> {\n        current = current.next;\n        idx++;\n      }\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;\n  };\n\n  <span class="hljs-comment">//removeAt(position):从列表的特定位置移除一项</span>\n  LinkedList.prototype.removeAt = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">position</span>) </span>{\n    <span class="hljs-keyword">if</span> (position &lt; <span class="hljs-number">0</span> || position &gt;= <span class="hljs-built_in">this</span>.length) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n    <span class="hljs-keyword">if</span> (position === <span class="hljs-number">0</span>) {\n      <span class="hljs-built_in">this</span>.head = <span class="hljs-built_in">this</span>.head.next;\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-keyword">let</span> current = <span class="hljs-built_in">this</span>.head;\n      <span class="hljs-keyword">while</span> (position &gt; <span class="hljs-number">1</span>) {\n        current = current.next;\n        position--;\n      }\n      current.next = current.next.next;\n    }\n    <span class="hljs-built_in">this</span>.length--;\n  };\n\n  <span class="hljs-comment">//remove(element):从列表中移除一项</span>\n  LinkedList.prototype.remove = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">element</span>) </span>{\n    <span class="hljs-keyword">let</span> idx = <span class="hljs-built_in">this</span>.indexOf(element);\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.removeAt(idx);\n  };\n\n  <span class="hljs-comment">//isEmpty():判断链表是否为空</span>\n  LinkedList.prototype.isEmpty = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.length === <span class="hljs-number">0</span>;\n  };\n\n  <span class="hljs-comment">//size():返回链表中元素的个数</span>\n  LinkedList.prototype.size = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.length;\n  };\n\n  <span class="hljs-comment">//toString():字符串表达</span>\n}\n\n<span class="hljs-keyword">let</span> l = <span class="hljs-keyword">new</span> LinkedList();\nl.append(<span class="hljs-number">1</span>);\nl.append(<span class="hljs-number">3</span>);\nl.append(<span class="hljs-number">11</span>);\nl.insert(<span class="hljs-number">2</span>, <span class="hljs-number">5</span>);\nl.insert(<span class="hljs-number">3</span>, <span class="hljs-number">7</span>);\nl.insert(<span class="hljs-number">5</span>, <span class="hljs-number">0</span>);\nl.removeAt(<span class="hljs-number">3</span>);\n<span class="hljs-built_in">console</span>.log(l);\n'}})),A.createElement("p",null,A.createElement("img",{src:"../../assets/images/md/linked-list-insert.png",alt:"单向链表insert算法图解.png"})))}},225:function(s,n,a){"use strict";a.r(n),n.default="data:image/png;base64,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"}}]);
//# sourceMappingURL=11.2e1c6ab98c.js.map