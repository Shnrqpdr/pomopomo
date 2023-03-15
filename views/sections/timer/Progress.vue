<script lang="ts">
import { mapState } from 'pinia'
import { useTimerStore as timer, useTimerStore } from '../../../stores/Timer'
import type {TimerProperties} from '@/stores/types'

export default defineComponent({
  setup(){
    const timer = useTimerStore()
    const getMinutes = () => Math.floor(timer.timeRemaining / 60)
    const getSeconds = () => timer.timeRemaining - 60 * getMinutes()

    return {
      timer,    
      getMinutes,
      getSeconds,
    }
  },
  computed: {
    ...mapState(useTimerStore, ['timeRemaining', 'settings', 'currentSession']),
    getSession(): TimerProperties {
        let session = {} as TimerProperties
        if(this.currentSession === 'work') {
            session = this.settings['work']
        }
        if(this.currentSession === 'short-break') {
            session = this.settings['short-break']
        }
        if(this.currentSession === 'long-break'){
            session = this.settings['long-break']
        }

        return session
    },
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
        :model-value="(timeRemaining * 100) / (getSession.time * 60)"
        :color="getSession.color"
      >
      {{ String(getMinutes()).padStart(2, '0') }}:{{ String(getSeconds()).padStart(2, '0') }}
      </v-progress-circular>
      <div class="session-info">
        <p>{{ getSession.text }}</p>
        <p>Session {{ timer.getCurrentSessionNumber }} / {{ timer.getMaxSessions }}</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .progress {
    font-size: 5rem;
  }
  .session-info {
    margin-top: 2rem;

    p {
      font-size: 24px;
      font-weight: 700;
    }
  }
</style>