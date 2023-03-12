<script lang="ts">
import Progress from '@/views/sections/timer/Progress.vue'
import Controls from '@/views/sections/timer/Controls.vue'

export default defineComponent({
  components: {
    Progress,
    Controls,
  }
})
</script>

<template>
    <div class="timer-container">
      <Progress />
      <Controls />
    </div>
</template>
<style scoped lang="scss">
  .timer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    row-gap: 2rem;
  }
</style>