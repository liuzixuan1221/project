<template>
    <canvas id="canvas" width="100" height="30" @click="veri"></canvas>
</template>

<script>
/**
 *
 * 验证码：
 * 1、canvas  创建画布
 *  1.1 获取元素  var ctx = document.getElementById()
 *  1.2 绘制绘图环境  ctx.getContext('2d')
 * 2、绘制矩形  定义宽高  背景颜色
 * 3、绘制文字    font
 * 4、绘制小点    circle
 * 5、绘制干扰线  line
 * 6、旋转画布
 *
 */
export default {
  data() {
    return {
      canvas: "",
      ctx: "",
      width: "",
      height: "",
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    },
    randomColor(min, max) {
      var r = this.randomNum(min, max);
      var g = this.randomNum(min, max);
      var b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    randomText(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    drawPic() {
      this.$http({
        url: "/api/Handler/AdminHandler?action=veri",
        method: "get",
        params: {
          //         //传值 有就传 没有拉到
        }
      }).then(result => {
        // this.erweima= result.data.success;
        var data = result.data.success;
        this.getPic(data);
        console.log(data)
      });
    },
    getPic(data) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.ctx.Baseline = "bottom";
      this.ctx.fillStyle = this.randomColor(50, 100); //设置或返回用于填充绘画的颜色、渐变或模式
      this.ctx.fillRect(0, 0, this.width, this.height); //绘制“被填充”的矩形
      this.ctx.stroke(); //创建从当前点回到起始点的路径
      //绘制小点
      for (var i = 0; i < 50; i++) {
        this.ctx.beginPath(); //起始一条路径，或重置当前路径
        //创建弧/曲线（用于创建圆形或部分圆）
        this.ctx.arc(
          this.randomNum(0, 100),
          this.randomNum(0, 30),
          0.3,
          2 * Math.PI,
          false
        );
        this.ctx.strokeStyle = this.randomColor(50, 255); //设置或返回用于笔触的颜色、渐变或模式
        this.ctx.stroke(); //绘制已定义的路径
        this.ctx.closePath(); //创建从当前点回到起始点的路径
      }
      //绘制文字
      for (var i = 0; i < data.length; i++) {
        this.ctx.fillStyle = this.randomColor(155, 200);
        this.ctx.textBaseline = "bottom";
        var fontSize = this.randomNum(18, 22) + "px";
        this.ctx.font = "bold " + fontSize + " Arial";
        var x = 10 + i * this.randomNum(20, 25);
        // this.ctx.save();
        // var deg = this.randomNum(-20,20)
        // this.ctx.rotate(deg*Math.PI/180)
        this.ctx.fillText(data[i], x, this.randomNum(20, 30));
        // this.ctx.restore()
      }
      //绘制斜线
      for (var i = 0; i < 5; i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.randomNum(0, 70), this.randomNum(0, 30));
        this.ctx.lineTo(this.randomNum(0, 70), this.randomNum(0, 30));
        this.ctx.strokeStyle = this.randomColor(40, 80);
        this.ctx.lineWidth = this.randomNum(0.2, 0.6);
        this.ctx.stroke();
      }
    },
    veri(){
      this.drawPic()
    }
  },
  mounted() {
    this.drawPic()
  }
};
</script>

<style>
</style>
