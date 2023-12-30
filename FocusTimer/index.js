import state from '/FocusTimer/state.js'
import * as events from '/FocusTimer/event.js'
import * as timer from '/FocusTimer/timer.js'

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

    events.registerControls()
    
    events.setMinutes()
}