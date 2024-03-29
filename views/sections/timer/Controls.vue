<script lang="ts">
import { useTimerStore } from '../../../stores/Timer'
import { useDisplay } from 'vuetify'
import { mapActions, mapState } from 'pinia';
import type {TimerProperties} from '@/stores/types'

export default defineComponent({
  setup() {
    const timer = useTimerStore()
    const { mobile } = useDisplay()

    const {toggleTimer, clearTimer} = useTimerControls()
    return {
      timer,
      mobile,
      toggleTimer,
      clearTimer,
    };
  },
  beforeDestroy() {
    this.clearTimeRemaining()
  },
  data() {
    return {};
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
  },
  methods: {
    ...mapActions(useTimerStore, ['clearTimeRemaining']),
  }
});
</script>

<template>
    <div class="controls-container">
      <v-btn
        :disabled="!(timer.isStarted || timer.timeRemaining)"
        variant="outlined"
        size="small"
        icon
        :color="getSession.color"
        @click="clearTimer"
      >
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn
        elevation="4"
        size="x-large" width="144"
        :color="getSession.color"
        :variant="timer.isStarted ? 'outlined' : 'elevated'"
        @click="toggleTimer"
      >
        {{timer.isStarted ? 'Pause' : 'Start'}}
      </v-btn>
      <v-btn
        variant="outlined"
        size="small"
        icon
        :color="getSession.color"
        @click="timer.nextSession()"
      >
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
    </div>
</template>
<style scoped lang="scss">
  .controls-container {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    align-items: center;
    justify-content: center;
  }
</style>