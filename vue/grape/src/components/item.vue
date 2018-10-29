<template>
    <div>
        <div class="tips">
            <div v-if="fatherCom=='home'" class="tip_level">{{level}}</div>
            <div v-if="fatherCom=='answer'" class="tip_level">题目{{itemNum}}</div>
        </div>
        <div>
            <div v-if="fatherCom=='home'">
                <router-link to="/answer" class="btn">
                  <div @click="begin" style="width:100%;height:100%"></div>
                </router-link>
            </div>
            <div v-if="fatherCom=='answer'" class="wrap">
                <div class="answer-wrap">
                    <ul>
                        <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="checkchoose(index,item.topic_answer_id)">
                            <span class="cirecle" :class="{'choosed':chooseNum==index}">{{chooselevel(index)}}</span>
                            <span>{{item.answer_name}}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="next" v-if="itemNum<itemDetail.length" @click="nextItem"></div>
                    <div v-else class="submit" @click="submitItem"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["fatherCom"],
  computed: mapState(["level", "itemNum", "itemDetail","answerid"]),
  mounted() {
    document.body.style.background = "url('../../static/images/1-1.jpg')";
  },
  data() {
    return {
      chooseNum: null,
      checkedId: 0,
    };
  },
  methods: {
    begin(){
      this.startFun();
    },
    chooselevel: val => {
      switch (val) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    checkchoose(index, id) {
      this.chooseNum = index;
      this.checkedId = id;
    },
    nextItem() {
      if (this.chooseNum != null) {
        this.chooseNum = null;
        this.addNum(this.checkedId);
      } else {
        alert("请选择本题答案");
      }
    },
    submitItem() {
      if (this.chooseNum != null) {
        this.chooseNum = null;
        this.addNum(this.checkedId);
        this.$router.push("/score")
      } else {
        alert("请选择本题答案");
      }
    },
    ...mapActions(["addNum","startFun"]),
  }
};
</script>

<style scoped>
.tips {
  width: 1.48rem;
  height: 2.96rem;
}
.tip_level {
  background: url("../../static/images/WechatIMG2.png") no-repeat;
  width: 1.48rem;
  height: 2.96rem;
  line-height: 4.76rem;
  text-align: center;
  background-size: cover;
  font-size: 0.26rem;
  position: absolute;
  right: 0.3rem;
  color: rgb(221, 88, 11);
}
.btn {
  display: inline-block;
  width: 1.73rem;
  height: 0.84rem;
  background: url("../../static/images/1-4.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 6.4rem;
  left: 50%;
  transform: translateX(-50%);
}
.cirecle {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  vertical-align: bottom;
}
.choosed {
  background: rgb(221, 88, 11);
}
.answer-wrap {
  margin-top: 1rem;
}
.answer-wrap ul {
  margin-left: 1.2rem;
}
.answer-wrap ul li {
  color: #fff;
  margin: 0.3rem 0;
  font-size: 0.3rem;
  line-height: 0.3rem;
}
.next {
  background: url("../../static/images/2-2.png");
  background-size: 100% 100%;
  width: 1.74rem;
  height: 0.84rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4rem;
}
.submit {
  background: url("../../static/images/3-1.png");
  background-size: 100% 100%;
  width: 1.74rem;
  height: 0.84rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4rem;
}
.wrap {
  background: url("../../static/images/2-1.png");
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-size: 100% 100%;
  width: 5.28rem;
  height: 4.66rem;
}
.score-wrap {
  width: 100%;
  height: 100%;
  background: url("../../static/images/4-1.jpg");
}
</style>

