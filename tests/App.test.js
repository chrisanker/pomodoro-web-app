import App from '../src/App.vue'

describe('App', () => {
  it('displays default time of 25 minutes', () => {
    // Test the component data function directly
    const data = App.data()
    expect(data.timeDisplay).toBe('25:00')
  })
}) 