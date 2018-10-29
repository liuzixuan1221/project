<template>
    <div>
        hahahaha
        <parent></parent>
    </div>
</template>
<script>
import Vue from "vue";
Vue.component("parent", {
  template: `
        <div>
            <div style="width:300px;height:300px;background:pink">
            {{fatherMsg}}
            <br/>
            {{sonData}}
            </div>
            <child :fatherData="fatherData" @revece="get"></child>
        </div>
    `,
  data() {
    return {
      fatherMsg: "我是爸爸",
      fatherData: "爹给的",
      sonData: ""
    };
  },
  methods: {
    get(val) {
      this.sonData = val;
    }
  },
  components: {
    child: {
      props: ["fatherData"],
      template: `
                <div style="width:300px;height:300px;background:hotpink">
                    {{sonMsg}}
                    <br/>
                    {{fatherData}}
                </div>
            `,
      data() {
        return {
          sonMsg: "我是儿子",
          sonData: "儿给的"
        };
      },
      methods: {
        send() {
          this.$emit("revece", this.sonData);
        }
      },
      mounted() {
        this.send();
      }
    }
  }
});
export default {};
</script>
<style></style>
