<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#B3C0D1"
      text-color="#000"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>评委信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">教师评委信息管理</el-menu-item>
          <el-menu-item index="1-2">大众评审信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">班级信息管理</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-mic"></i>
          <span>答辩现场管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">答辩开关控制</el-menu-item>
          <el-menu-item index="2-2">答辩顺序控制</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">分数管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'aside',
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
