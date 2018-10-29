<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <img src="../../static/images/back_logo.png" alt="">
            </div>
            <div class="headerList">
                <div class="user">
                    <div class="userInfo">
                        <p @click="update">{{username}}</p>
                    </div>
                    <div class="userAvatar">
                        <img src="../../static/images/touxiang.jpg" alt="">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="fa fa-globe"><span>卓新思创</span></p>
                    </li>
                    <li>
                        <p class="fa fa-comment"><span>在线客服</span></p>
                    </li>
                    <li>
                        <p class="fa fa-book"><span>常见问题</span></p>
                    </li>
                    <li>
                        <p class="fa fa-book"><span>安全中心</span></p>
                    </li>
                    <li>
                        <p class="fa fa-sign-out">
                            <span @click="out">退出</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navList">
            <ul>
                <li><p class="fa fa-user"><span>用户管理</span></p></li>
                <li><p class="fa fa-book"><span>课程管理</span></p></li>
                <li><p class="fa fa-tasks"><span>统计报表</span></p></li>
                <li><p class="fa fa-folder"><span>其他管理</span></p></li>
                <li><p class="fa fa-bookmark"><span>数据字典</span></p></li>
                <li><p class="fa fa-cog"><span>系统维护</span></p></li>
            </ul>
        </div>
        <div class="content">
            <div class="route">
                <p><span class="index">首页</span>/<span>用户管理</span>/<span>学员管理</span></p>
            </div>
            <form action="">
                <input type="text" name="username" placeholder="用户名">
                <input type="text" name="email" placeholder="邮箱">
                <input type="text" name="phone" placeholder="手机号">
                <input class="search" type="button" value="查询">
            </form>
            <div class="userList">
                <div class="listTop">
                    <div class="listIcon">
                    </div>
                    <p><span>系统人员列表</span></p>
                </div>
                <div class="listTitle">
                    <ul>
                        <li class="username">用户名</li>
                        <li class="email">邮箱</li>
                        <li class="phone">手机</li>
                        <li class="date">注册日期</li>
                        <li class="status">状态</li>
                        <li class="operating">操作</li>
                    </ul>
                </div>
                <div class="listNav">
                    <ul class="listNavUl">
                        <li class="username">zhangsan</li>
                        <li class="email">123456@qq.com</li>
                        <li class="phone">15510999123</li>
                        <li class="date">2016-06-30t18:46:07</li>
                        <li class="status">正常</li>
                        <li class="operating">冻结</li>
                    </ul>
                    <ul class="listNavUl">
                        <li class="username">lisi</li>
                        <li class="email">1233213456@qq.com</li>
                        <li class="phone">15241421123</li>
                        <li class="date">2016-06-30t18:42:11</li>
                        <li class="status">正常</li>
                        <li class="operating">冻结</li>
                    </ul>
                    <ul class="listNavUl">
                        <li class="username">wangwu</li>
                        <li class="email">321313456@qq.com</li>
                        <li class="phone">15241412345</li>
                        <li class="date">2016-06-30t18:11:32</li>
                        <li class="status now">已冻结</li>
                        <li class="operating">解冻</li>
                    </ul>
                </div>
                <div class="listPage">
                    <div class="pageJump first"></div>
                    <div class="pageJump prev"></div>
                    <p class="text">跳转到第</p>
                    <input class="number" type="number" value="1">
                    <p class="text">页</p>
                    <div class="go">Go</div>
                    <p class="text">/共 <span class="allPage">3</span> 页 <span class="allInfo">【7条】</span> </p>
                    <div class="next pageJump"></div>
                    <div class="last pageJump"></div>
                    <p class="text">1-3</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    out() {
      console.log(1);
      this.$http({
        url: "/api/Handler/AdminHandler/?action=logout",
        method: "get",
        params: {}
      }).then(result => {
        localStorage.clear();
        localStorage.setItem("username", this.username);
        this.$router.push("/");
      });
    },
    returninfo() {
      this.$http({
        url: "/api/Handler/AdminHandler/?action=returninfo",
        method: "get"
      }).then(result => {
        this.username = result.data.data.username;
      });
    },
    update() {
      this.$router.push("/info")
    }
  },
  mounted() {
    var userId = localStorage.getItem("tokenId");
    if (localStorage.tokenId) {
      this.returninfo();
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import "../../static/css/index.css";
</style>
