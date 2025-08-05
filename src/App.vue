<template>
  <div id="app">
    <h1>Pomodoro Timer</h1>
    <div class="timer">{{ timeDisplay }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      timeDisplay: '25:00'
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
</style> 