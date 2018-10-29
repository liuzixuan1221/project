<template>
    <div>
        请输入旧密码
        <input type="text" v-model="oldPass" />   
        请输入新密码
        <input type="text" v-model="newPass" />   
        <p @click="update">提交</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      oldPass: "",
      newPass: ""
    };
  },
  methods: {
    update() {
      this.$http({
        url: "/api/Handler/AdminLogin/?action=update",
        method: "post",
        data: {
          oldPass: this.oldPass,
          newPass: this.newPass
        }
      }).then(result => {
        alert(result.data.success)
        localStorage.clear();
        this.$router.push("/")
      });
    }
  }
};
</script>

<style>
</style>
