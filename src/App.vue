<template>
  <div id="app">
    <h1>Pomodoro Timer</h1>
    <div class="timer">{{ timeDisplay }}</div>
    <button @click="startTimer" :disabled="isRunning">Start</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      timeDisplay: '25:00',
      isRunning: false,
      minutes: 25,
      seconds: 0,
      timerInterval: null
    }
  },
  methods: {
    startTimer() {
      if (this.isRunning) return
      this.isRunning = true
      this.timerInterval = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            this.stopTimer()
            return
          }          
          this.minutes--
          this.seconds = 59
        } else {
          this.seconds--
        }
        this.updateDisplay()
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timerInterval)
      this.isRunning = false
    },
    updateDisplay() {
      this.timeDisplay = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

.timer {
  font-size: 4rem;
  font-weight: bold;
  margin: 20px 0;
}

button {
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style> 