export class PomodoroApp {
    breakMode;
    workTime;
    longBreakTime;
    shortBreakTime;

    constructor(breakMode, shortBreakTime, workTime, longBreakTime) {
        this.breakMode = breakMode;
        this.shortBreakTime = shortBreakTime
        this.workTime = workTime;
        this.longBreakTime = longBreakTime;
    }

    circleColourChanger() {
        if (this.breakMode) {
            return 'green';
        } else {
            return 'red';
        }
    }
}
