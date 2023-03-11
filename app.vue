<template>
  <div>
    <v-app :theme="useAppStore().getTheme">
      <v-app-bar
        color="transparent"
        density="compact"
      >
        <v-app-bar-title>PomoPomo</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-theme-light-dark" @click="toggleTheme()"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-parallax
          src="https://imagizer.imageshack.com/img924/8762/nhjx3N.jpg"
        >
          <NuxtPage />
        </v-parallax>
      </v-main>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from './stores/app';

const appStore = useAppStore()
const toggleTheme  = () => appStore.toggleTheme()

</script>
