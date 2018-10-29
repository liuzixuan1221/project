<template>
    <div>
        <!-- 
            1、普通事件
            2、事件修饰符
            3、按键修饰符
         -->
         <button @click="click">click</button>
         <button @mouseover="mouseover">mouseover</button>
         <button @mouseout="mouseout">mouseout</button>
         <button @mouseenter="mouseenter">mouseenter</button>
         <button @mouseleave="mouseleave">mouseleave</button>
         <button @mouseup="mouseup">mouseup</button>
         <button @mousedown="mousedown">mousedown</button>
         <button @mousemove="mousemove">mousemove</button>
         <button @dblclick="dblclick">dblclick</button>
    </div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log("click");
    },
    mouseover() {
      console.log("mouseover");
    },
    mouseout() {
      console.log("mouseout");
    },
    mouseenter() {
      console.log("mouseenter");
    },
    mouseleave() {
      console.log("mouseleave");
    },
    mouseup() {
      console.log("mouseup");
    },
    mousedown() {
      console.log("mousedown");
    },
    mousemove() {
      console.log("mousemove");
    },
    dblclick() {
      console.log("dblclick");
    }
  }
};
</script>
<style>
</style>

