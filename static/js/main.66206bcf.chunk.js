(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),c=n(7),i=n(1),u=n(2),d=n(4),s=n(3),p=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleChang=function(t){e.props.handleChang(t)},e.addTodo=function(){e.props.addTodo()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.inpValue;return a.a.createElement("div",null,a.a.createElement("input",{id:"inputs",ref:function(t){return e.input=t},value:t,type:"text",onChange:this.handleChang}),a.a.createElement("button",{onClick:this.addTodo},"\u6dfb\u52a0"))}}]),n}(o.Component),h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).delTodo=function(t){e.props.dele(t)},e.toggle=function(t){e.props.toggle(t)},e.renderTodos=function(t){return e.props.todos.map((function(n,o){if(t==n.done)return a.a.createElement("li",null,a.a.createElement("input",{onClick:function(){return e.toggle(o)},checked:t,type:"checkbox"}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),a.a.createElement("button",{onClick:function(){return e.delTodo(o)}},"\u5220\u9664"))}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.todos,t=e.filter((function(e){return!e.done})),n=e.filter((function(e){return e.done}));return a.a.createElement("div",null,a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",t.length),a.a.createElement("ul",null,this.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",n.length),a.a.createElement("ul",null,this.renderTodos(!0)))}}]),n}(o.Component),f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChang=function(t){e.setState({inpValue:t.target.value})},e.addTodo=function(){""!=e.state.inpValue&&e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(c.a)(e.state.todos))})},e.delTodo=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return n!=t}))})},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.state={inpValue:"",todos:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&(console.log(e),this.setState({todos:JSON.parse(e)}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p,{inpValue:this.state.inpValue,todos:this.state.todos,addTodo:this.addTodo,handleChang:this.handleChang}),a.a.createElement(h,{dele:this.delTodo,toggle:this.toggle,todos:this.state.todos}))}}]),n}(o.Component);l.a.render(a.a.createElement("div",null,a.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.66206bcf.chunk.js.map