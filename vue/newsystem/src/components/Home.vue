<template>
    <div>
        <!-- HOME -->
        <First/>
        <Com/>
        <Brother/>

        <!-- <input v-model="msg" />
        {{msg}} -->

        <!-- <ul>
            <li v-for="(item,index) in json" :key="index">{{item.text}}-{{index}}</li>
        </ul> -->

        <!-- <div v-text="msg"></div> -->

        <!-- <div v-html="html"></div> -->

        <div v-bind:class="{class1}"></div>
        <div :class="[classname,now]"></div>
        <div :class="{class4:newclass}"></div>
        <div :style="style1"></div>
    </div>
</template>

<script>
import First from "./First";
import Com from "./Com";
import Brother from "./Brother";
export default {
  components: { First, Com, Brother },
  data() {
    return {
      msg: "hehe",
      html: "<h1>haha</h1>",
      json: [{ text: "1" }, { text: "2" }, { text: "3" }],
      class1: true,
      classname: "class2",
      now: "class3",
      newclass: true,
      style1: {
        width: 100 + "px",
        height: 100 + "px",
        background: "red"
      }
    };
  }
};
</script>
<style>
</style>
