export class PomodoroApp {
    breakMode;
    workTime;
    longBreakTime;
    shortBreakTime;

    constructor() {
        this.breakMode = true;
        this.workTime = 25
        this.shortBreakTime = 5;
        this.longBreakTime = 20;
    }

    circleColourChanger() {
        if (this.breakMode) {
            return 'green';
        } else {
            return 'red';
        }
    }

    getLongBreakTime() {
        return this.longBreakTime;
    }

    getShortBreakTime() {
        return this.shortBreakTime;
    }

    getWorkTime() {
        return this.workTime;
    }
}
