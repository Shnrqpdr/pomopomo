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
        <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from './stores/app';

const appStore = useAppStore()
const toggleTheme  = () => appStore.toggleTheme()

</script>
