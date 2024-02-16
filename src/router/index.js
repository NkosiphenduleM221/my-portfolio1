import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/AboutMe.vue'
import Education from '../components/EducationVue.vue'
import Skills from '../components/SkillsVue.vue'

// Import other components as needed

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/education', component: Education},
  { path: '/skills', component: Skills},
  
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
