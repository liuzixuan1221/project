//加载ejs模板引擎 处理html数据
var ejs = require("ejs");

/**
 * <%=%>    输出数据
 * <%#%>    注释
 * <%_%>    删除首位空格
 * <%-%>    非转义字符
 * 
 */

var string = "今个<%= a%>，真呀么<%= b%> <%# rtrtrt%>"
var data = {
    a:"老百姓",
    b:"真高兴"
}

//render 渲染 首个参数是html   第二个参数是渲染数据
var html = ejs.render(string,data)
console.log(html);