<template>
  <div>
    <q-layout view="lHh lpr lFf" style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <a href="#home" class="hidden-sm-down">Home</a>
          <a href="#about" class="hidden-sm-down">About</a>
          <a href="#projects" class="hidden-sm-down">Projects</a>
          <a href="#contact" class="hidden-sm-down">Contact</a>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>


      <q-page-container>
        <q-page id="home" class="q-pa-md">
          <Home />
        </q-page>
        <q-page id="about" class="q-pa-md">
          <About />
        </q-page>
        <q-page id="projects" class="q-pa-md">
          <Projects />
        </q-page>
        <q-page id="contact" class="q-pa-md">
          <Contact />
        </q-page>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script setup lang="ts">

import About from "./About.vue";
import Home from "./Home.vue";
import Contact from "./Contact.vue";
import Projects from "./Projects.vue";
</script>

<style scoped>

</style>
