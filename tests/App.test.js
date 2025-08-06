import App from '../src/App.vue'

describe('App', () => {
  it('displays default time of 25 minutes', () => {
    // Test the component data function directly
    const data = App.data()
    expect(data.timeDisplay).toBe('25:00')
  })

  describe('start button', () => {
    let data;
    it('has a start button that is initially enabled', () => {
      data = App.data()
      expect(data.isRunning).toBe(false)
    })

    it('sets isRunning to true when start button is clicked', () => {
      const app = App.methods
      data = { isRunning: false }

      app.startTimer.call(data)
      expect(data.isRunning).toBe(true)
    })

    it('starts counting down when timer starts', () => {
      const app = App.methods
      data = {
        isRunning: false,
        minutes: 25,
        seconds: 0,
        timeDisplay: '25:00',
        updateDisplay: App.methods.updateDisplay
      }

      jest.useFakeTimers()
      app.startTimer.call(data)
      jest.advanceTimersByTime(1000)

      expect(data.seconds).toBe(59)
      expect(data.minutes).toBe(24)
      jest.useRealTimers()
    })

    it('updates timeDisplay for each second of countdown', () => {
      const app = App.methods
      data = {
        isRunning: false,
        minutes: 25,
        seconds: 0,
        timeDisplay: '25:00',
        updateDisplay: App.methods.updateDisplay
      }

      jest.useFakeTimers()
      app.startTimer.call(data)

      // After 1 second
      jest.advanceTimersByTime(1000)
      expect(data.timeDisplay).toBe('24:59')

      // After another second
      jest.advanceTimersByTime(1000)
      expect(data.timeDisplay).toBe('24:58')

      jest.useRealTimers()
    })
  })
})