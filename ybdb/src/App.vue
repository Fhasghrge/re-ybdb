<template>
  <div id="app">
    <el-container>
      <el-header>UESTC优秀班集体答辩管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Copyright @ starstudio</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/aside';
export default {
  name: 'app',
  components: {
    Aside
  }
};
</script>

<style>
.el-header{
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-weight: bolder;
  letter-spacing: 1em;
  font-size: 1.4em
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-weight: lighter;
  font-size: .8em
}

.el-aside {
  background-color: #d3dce6;
  /* color: #333; */
  /* text-align: center; */
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
