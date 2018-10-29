<template>
    <div>
        <div class="scoreBox">
            <div class="score">
                <p>{{score}}分！</p>
                <span>{{tips}}</span>
                {{allTime}}s
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      score: 0,
      rightAnswer: [2, 7, 12, 13, 18],
      tips: ""
    };
  },
  computed: mapState(["answerid", "allTime"]),
  methods: {
    ...mapActions(["endFun"])
  },
  mounted() {
    this.endFun();
    this.answerid.forEach((item, index) => {
      if (item == this.rightAnswer[index]) {
        this.score += 20;
        if (this.score >= 60) {
          this.tips = "恭喜你";
        } else {
          this.tips = "菜鸡";
        }
      }
    }),
    document.body.style.background = "url('../../static/images/4-1.jpg')";
  }
};
</script>

<style>
.scoreBox {
  background: url("../../static/images/4-2.png") no-repeat;
  width: 3.88rem;
  height: 3.64rem;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1rem;
}
.scoreBox .score {
  position: absolute;
  top: 1.8rem;
  left: 0.4rem;
  width: 3.3rem;
  height: 1.64rem;
}
.scoreBox .score p {
  font-size: 0.55rem;
  color: rgb(131, 13, 13);
  font-weight: 600;
  text-shadow: 0.02rem 0.02rem 0.03rem #000;
  text-align: center;
}
.scoreBox .score span {
  display: block;
  font-size: 0.26rem;
  text-align: center;
}
</style>
