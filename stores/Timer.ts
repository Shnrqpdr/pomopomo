import { defineStore } from 'pinia'
import type {TimerProperties} from '@/stores/types'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    started: false,
    settings: {
        'work': {
            text: 'Work',
            time: 25, // in minutes
            color: '#00FF7F'
        },
        'short-break': {
            text: 'Short Break',
            time: 5,
            color: 'cyan'
        },
        'long-break': {
            text: 'Long Break',
            time: 15,
            color: 'light-blue'
        }
    },
    timeRemaining: 25*60 as number | any, 
    currentSession: 'work' as string,
    currentSessionNumber: 1,
    maxSessions: 4, 
    autoStart: true
  }),
getters: {
    isStarted: (state: any) => state.started,
    getTimeRemaining: (state: any) => state.timeRemaining,
    getSessionTime: (state: any) => state.settings[state.currentSession].time,
    isWork: (state: any) => state.settings[state.currentSession] === 'work',
    getCurrentSessionNumber: (state: any) => state.currentSessionNumber,
    getMaxSessions: (state: any) => state.maxSessions,
},
actions: {
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
    toggleTimer() {
        this.started = !this.started
    },
    clearTimeRemaining() {
        this.timeRemaining = this.getSession().time * 60
    },
    setTimeRemaining(time: number) {
        this.timeRemaining = time
    },
    nextSession() {
        if (this.currentSession !== 'work') {
            this.currentSessionNumber = this.currentSessionNumber % this.maxSessions + 1
            this.currentSession = 'work'
        }
        else if (this.currentSessionNumber === this.maxSessions) {
            this.currentSession = 'long-break'
        }
        else {
            this.currentSession = 'short-break'
        }
        
        this.timeRemaining = this.getSession().time * 60
    },
    setMaxSessions(maxSessionsNumber: number) {
        this.maxSessions = maxSessionsNumber
    },
    setTimerSettings(workTime: number, shortBreakTime: number, longBreakTime: number) {
        this.settings['work'].time = workTime
        this.settings["short-break"].time = shortBreakTime
        this.settings["long-break"].time = longBreakTime
        this.timeRemaining = workTime * 60
    }
  },
})
  