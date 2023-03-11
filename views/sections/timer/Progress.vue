<script lang="ts">
import { useTimerStore as timer, useTimerStore } from '../../../stores/Timer'

export default defineComponent({
  setup(){
    const timer = useTimerStore()
    const getMinutes = () => Math.floor(timer.getTimeRemaining / 60)
    const getSeconds = () => timer.getTimeRemaining - 60 * getMinutes()

    return {
      timer,
      getMinutes,
      getSeconds,
    }
  }
})


</script>
<template>
    <div class="text-center mt-10">
      <v-progress-circular
        :rotate="360"
        :size="400"
        :width="3"
        class="progress"
        :model-value="(timer.getTimeRemaining * 100) / (timer.getSessionTime * 60)"
        :color="`#00FF7F`"
      >
      {{ String(getMinutes()).padStart(2, '0') }}:{{ String(getSeconds()).padStart(2, '0') }}
      </v-progress-circular>
      <div class="session-info">
        <p>{{ `work` }}</p>
        <p>Session {{ timer.getCurrentSessionNumber }} / {{ timer.getMaxSessions }}</p>
      </div>
    </div>
</template>

<style scoped>
  .progress {
    font-size: 5rem;
  }
  .session-info {
    margin-top: 2rem;
  }
</style>