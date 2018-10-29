<template>
    <!-- <div>
        用户名：<input type="text" v-model="username">
            密码：<input type="text" v-model="password">
            验证码:<input type="text" ref="veri"/><Veri/>
            <input type="button" value="提交" @click="login">
    </div> -->
        <div class="container">
            <div class="loginBox">
                <div class="top">
                    <div class="logo">logo</div>
                    <div class="title">
                        翡翠学院后台
                        <p>the sysmaster of feicuischool</p>
                    </div>
                </div>
                <div class="content">
                    <!-- <form action="http://127.0.0.1:3000/doget" method="GET"> -->
                    <div class="form">
                      <div><input type="text" name="username" placeholder="用户名" v-model="username"></div>
                      <div><input type="text" name="password" placeholder="密码" v-model="password"></div>
                      <div class="yzm"><input type="text" name="username" placeholder="验证码" ref="veri"><Veri class="veri"/></div>
                      <button type="submit" @click="login">登录</button>
                    </div>
                    <!-- </form> -->
                </div>
                <button class="zhuCe" @click="register">忘记密码</button>
            </div>
        </div>
</template>

<script>
import Veri from "./veri";
export default {
  components: {
    Veri
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.$refs.veri.value);
      this.$http({
        url: "api/Handler/AdminHandler?action=checkveri",
        method: "get",
        params: {
          veri: this.$refs.veri.value
        }
      }).then(result => {
        if (result.data.success) {
          console.log(result);
          this.user();
        }
      });
    },
    user() {
      this.$http({
        url: "api/Handler/AdminLogin?action=login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(result => {
        if (result.data.success) {
          console.log(result);
          this.$router.push("/home");
          var tokenId = result.data.tokenId;
          localStorage.setItem("tokenId", tokenId);
        }
      });
    },
    register(){
      this.$router.push("/register")
    }
  },
  mounted() {}
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  background: rgba(97, 35, 212);
}
.loginBox {
  width: 800px;
  position: relative;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  overflow: hidden;
  padding: 10px 20px;
}
.loginBox .top {
  margin-left: 20%;
  overflow: hidden;
}
.loginBox .logo {
  float: left;
  font-size: 40px;
}
.loginBox .title {
  margin-left: 10px;
  float: left;
  font-size: 30px;
  color: #fff;
  letter-spacing: 5px;
}
.loginBox .title p {
  font-size: 16px;
}
.content {
  padding: 0 50px;
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
}
.container .form div {
  width: 600px;
  height: 40px;
  border: 3px solid #f2602e;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.container .form .yzm {
  position: relative;
  width: 300px;
}
.yzm .veri {
  position: absolute;
  right: -150px;
}
.container .form div input {
  float: right;
  background: transparent;
  width: 560px;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid #f2602e;
  box-sizing: border-box;
  font-size: 16px;
}
.container .form .yzm input {
  width: 260px;
}
input::placeholder {
  color: #fff;
}
button {
  float: right;
  border: none;
  width: 150px;
  height: 50px;
  background: #0f0;
  font-size: 16px;
  color: #fff;
}
.zhuCe {
  float: left;
  margin-left: -30px;
  background: #00f;
}
</style>
