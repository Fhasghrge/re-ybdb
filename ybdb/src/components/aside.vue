<template>
  <div class="aside">
    <el-menu
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
          <el-menu-item index="1-1">
            <router-link tag="span" to="/teacher">教师评委信息管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link tag="span" to="/stu">大众评委信息管理</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link tag="span" to='/class'>班级信息管理</router-link>
        </span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-mic"></i>
          <span>答辩现场管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link tag="span" to="/manage">答辩开关控制</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link tag="span" to="/turn">答辩顺序控制</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">
          <router-link tag="span" to='/grade'>分数管理</router-link>
        </span>
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
