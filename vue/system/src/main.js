// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//主入口文件
import Vue from 'vue'   //import 导入   相当于 <script></script>
import App from './App'
import Index from './components/index'



new Vue({
  el: '#app',
  // components: { App },    //组件加载
  // components: { Text1 },    //组件加载
  components: { Index },
  
  // template: '<App/>',      //模板编译
  // template: '<Text1/>',      //模板编译
  template: '<Index/>'
})
