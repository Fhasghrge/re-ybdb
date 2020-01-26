import Vue from 'vue'
import Router from 'vue-router'
const Class = () => import('../views/class.vue')
const Grade = () => import('../views/grade.vue')
const Manage = () => import('../views/manage.vue')
const Stu = () => import('../views/stu.vue')
const Teacher = () => import('../views/teacher.vue')
const Turn = () => import('../views/turn.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/teacher'
    },
    {
      path: '/teacher',
      component: Teacher
    },
    {
      path: '/stu',
      component: Stu
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/manage',
      component: Manage
    },
    {
      path: '/turn',
      component: Turn
    },
    {
      path: '/grade',
      component: Grade
    }
  ],
  mode: 'history'
})