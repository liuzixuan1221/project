<template>
    <div>
        <brother-one/>
        <brother-two/>
    </div>
</template>
<script>
import Vue from "vue";
var bus = new Vue();
var bus1 = new Vue();
Vue.component("brother-one", {
  template: `
        <div style="width:200px;height:200px;background:#f0f">
            {{oneMsg}}
            <br/>
            {{twoGet}}
        </div>
    `,
  data() {
    return {
      oneMsg: "我是大哥",
      oneSend: "大哥给的",
      twoGet: ""
    };
  },
  methods: {
    get(val) {
      bus.$on("revece", val => {
        this.twoGet = val;
      });
    },
    send() {
      bus1.$emit("fun", this.oneSend);
    }
  },
  mounted() {
    this.get();
    setTimeout(() => {
      this.send();
    }, 100);
  }
});
Vue.component("brother-two", {
  template: `
        <div style="width:200px;height:200px;background:#0ff">
            {{twoMsg}}
            <br/>
            {{oneGet}}
        </div>
    `,
  data() {
    return {
      twoMsg: "我是小弟",
      twoSend: "小弟给的",
      oneGet: ""
    };
  },
  methods: {
    send() {
      bus.$emit("revece", this.twoSend);
    },
    get(val) {
      bus1.$on("fun", val => {
        this.oneGet = val;
      });
    }
  },
  mounted() {
    this.send();
    this.get();
  }
});
export default {};
</script>
<style>
</style>
