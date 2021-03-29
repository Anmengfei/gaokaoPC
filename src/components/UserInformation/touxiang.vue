<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <h2>头像</h2>
        <div>
          <el-row>
            <el-col :span="5"><div class="bg-purple">上传头像:</div></el-col>
            <el-col :span="19"
              ><div class="bg-purple-light">
                <div class="update">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div></div
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="5"><div class="bg-purple">您的姓名:</div></el-col>
            <el-col :span="19"><div class="bg-purple-light"></div></el-col>
          </el-row>
          <el-row>
            <el-col :span="5"><div class="bg-purple">您的手机号:</div></el-col>
            <el-col :span="19"><div class="bg-purple-light"></div></el-col>
          </el-row>
          <div class="OKbtn">
            <el-button type="danger">确认修改</el-button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import VolunteerTable from "@/components/zhiyuanForm/zhiyuanLeft";
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
export default {
  name: "touxiang",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      //   isRouterAlive: true, // 控制视图是否显示的变量
      //   input: "",
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style scoped>
.update {
  width: 200px;
  height: 200px;
  /* background-color: #409eff; */
}
.el-row {
  margin-bottom: 20px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #000;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
/deep/.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
/deep/.avatar {
  width: 200px;
  height: 200px;
  display: block;
}
.homeheader {
  margin-bottom: 0.5rem;
}
/deep/.shurukuang .el-input {
  border-color: red;
  width: 300px;
}
.grid-content {
  min-height: 0.6rem;
}

.table-container {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.box-right {
  position: absolute;
  width: 75%;
  height: 100%;
  background-color: #fff;
  top: 0rem;
  left: 3.8rem;
}
h2 {
  margin-left: 0.3rem;
  font-size: 24px;
  color: #333;
  font-weight: 500;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 0;
}
.OKbtn {
  margin-top: 10px;
  padding-left: 25%;
}
</style>
