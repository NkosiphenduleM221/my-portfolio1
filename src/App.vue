<template>
  <div id="app">
    <Header />
    <AboutMe/>
    <EducationVue/>
    <SkillsVue/>
    <PortfolioVue/>
    <ContactMe/>
    
    
  </div>
</template>

<script>

import AboutMe from './components/AboutMe.vue';
import Header from './components/Header.vue';
import EducationVue from './components/EducationVue.vue';
import SkillsVue from './components/SkillsVue.vue';
import PortfolioVue from './components/PortfolioVue.vue';
import ContactMe from './components/ContactMe.vue';





export default {
  name: 'App',
  components: {
    Header,
    AboutMe,
    EducationVue,
    SkillsVue,
    PortfolioVue,
    ContactMe
}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Optional: Hide horizontal overflow */
}

</style>
