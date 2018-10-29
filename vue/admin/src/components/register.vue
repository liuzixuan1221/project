<template>
    <div>
        用户名：<input type="text" name="username" placeholder="用户名" v-model="username"><br/>
        姓名:<input type="text" name="name" placeholder="姓名"  v-model="name"><br/>
        密码：<input type="password" name="password" placeholder="密码"  v-model="password"><br/>
        邮箱：<input type="email" name="email" placeholder="邮箱"  v-model="email"><br/>
        电话：<input type="number" name="phone" placeholder="电话"  v-model="phone"><br/>
        <input type="radio" name="identity" value="0" v-model="identity"><span>系统管理员</span>
        <input type="radio" name="identity" value="1" v-model="identity"><span>课程管理员</span><br/>

        <input type="submit" value="注册" style="padding:30px;font-size:20px" @click="submit"><br/>



        <div class="nav_content_wrap">
            <div class="nav_moveout">
                <span>首页</span>
                <span>/</span>
                <span>用户管理</span>
                <span>/</span>
                <span>系统人员</span>
            </div>
            <div class="one_nav_content">
                <div class="input">
                    <input placeholder="模糊查找姓名" type="text" v-model="searchText">

                </div>
                <div class="inquiry btn" @click="search">查&nbsp;询</div>
                <div class="add btn"><span class="fa fa-plus span"></span><span>添加</span></div>
            </div>
        </div>
        
        <div style="padding:8px">
            <el-table :data="tableData" border style="width: 100%"> 
                <el-table-column fixed prop="username" label="用户名" width="200"></el-table-column>
                <el-table-column prop="name" label="姓名" width="420"> </el-table-column>
                <el-table-column prop="power" label="后台权限" width="370"> </el-table-column>
                <el-table-column prop="phone" label="手机" width="380"> </el-table-column>
                <el-table-column prop="upDateAt" label="编辑日期" width="280"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="240">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small" >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
          <el-pagination
          :page-size="pageSize"
          @current-change="change"
          layout="prev, pager, next"
          :total="count">
          </el-pagination>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      name: "",
      password: "",
      email: "",
      phone: "",
      identity: "",
      searchText: "",
      count:0,
      pageStart: 1,
      pageSize:0,
      tableData: []
    };
  },
  methods: {
    submit() {
      this.$http({
        url: "api/Handler/AdminLogin?action=register",
        method: "post",
        data: {
          username: this.username,
          name: this.name,
          password: this.password,
          email: this.email,
          phone: this.phone,
          powerCode: this.identity
        }
      }).then(result => {
        if (result.data.success) {
          console.log(result);
          this.$router.push("/");
        }
      });
    },
    search() {
      this.$http({
        url: "api/Handler/AdminHandler?action=getAdminList",
        method: "get",
        params: {
          searchText: this.searchText,
          pageStart: this.pageStart
        }
      }).then(result => {
        console.log(result.data.count);
        console.log(this.count)
        this.count = result.data.data.count;
        this.pageSize = result.data.data.pageSize;
        this.tableData = result.data.data.list;
      });
    },
    change(index){
    this.pageStart = index;
    this.search();
    },
    handleClick(row){
      console.log(arguments)
      this.$http({
        url: "api/Handler/AdminLogin?action=delete",
        method: "post",
        data: {
          del : row.tokenId
        }
      }).then(result => {
        console.log(result)
        this.search()
      });
    }
  },
  mounted(){
    this.search();
  }
};
</script>

<style>
.page {
  width: 20px !important;
}
.nav_content_wrap {
  position: relative;
  padding: 8px;
}
.nav_moveout {
  line-height: 50px;
  margin-left: 15px;
  color: #75736e;
}
.nav_moveout span {
  margin: 0 -2px;
}
.nav_moveout span:first-child {
  color: #127fd0;
}
.one_nav_content {
  background: #fff;
  /* width: s1573px; */
  height: 55px;
  margin: 0 auto;
  border: 1px solid #d1cfc9;
  margin-bottom: 20px;
}
.one_nav_content .input {
  width: 558px;
  height: 32px;
  border: 1px solid #c5c1bb;
  margin: 10px 11px;
  float: left;
}
.one_nav_content .input input {
  float: left;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 12px;
  margin-left: 8px;
}
.one_nav_content .btn {
  width: 114px;
  height: 34px;
  line-height: 34px;
  color: #fff;
  font-size: 14px;
}
.one_nav_content .inquiry {
  background: #1fbb5c;
  line-height: 34px;
  text-align: center;
  float: left;
  margin: 10px 0;
}
.one_nav_content .add {
  float: right;
  background: #4664ad;
  text-align: center;
  margin: 10px 20px;
}
.one_nav_content .add .span {
  margin-right: 7px;
}
</style>
