<template>
  <div>
    <v-app :theme="appStore.getTheme">
      <v-app-bar
        color="transparent"
        density="compact"
      >
        <v-app-bar-title>PomoPomo</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-image-outline" color="white" @click="changeBackgroundImage()"></v-btn>
          <v-btn icon="mdi-theme-light-dark" @click="toggleTheme()"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-parallax
          :src="urlImagesBackground[slide]"
        >
          <NuxtPage />
        </v-parallax>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts">
import { useAppStore } from './stores/app';

export default defineComponent({
  setup(){
    const appStore = useAppStore()
    const toggleTheme  = () => appStore.toggleTheme()

    return {
      appStore,
      toggleTheme,
    }
  },
  data(){
    return{
      slide: 0,
      urlImagesBackground: [
        'https://imagizer.imageshack.com/img924/8762/nhjx3N.jpg',
        'https://imagizer.imageshack.com/img924/5550/iv0jIu.jpg',
        'https://imagizer.imageshack.com/img922/6634/MOLjK4.jpg',
        'https://imagizer.imageshack.com/img923/2985/HO5K60.jpg',
        'https://imagizer.imageshack.com/img922/4539/vFrJeD.jpg',
        'https://imagizer.imageshack.com/img924/5075/H85zsz.jpg',
        'https://imagizer.imageshack.com/img922/5739/Y3MQ4x.png',
        'https://imagizer.imageshack.com/img924/4107/Lklj1A.jpg',
        'https://imagizer.imageshack.com/img923/4915/PJA5rB.jpg',
        'https://imagizer.imageshack.com/img922/9854/4jaca1.jpg',
        'https://imagizer.imageshack.com/img923/7378/HP8dxZ.jpg',
        'https://imagizer.imageshack.com/img924/6736/kFk9X3.jpg',
      ]
    }
  },
  methods: {
    changeBackgroundImage(){
      this.slide = this.slide + 1

      if(!this.urlImagesBackground[this.slide]){
        this.slide = 0
      }
    }
  }
})
</script>

<style lang="scss">
.v-img__img {
  opacity: 0.5 !important;
}
</style>