import state from '/FocusTimer/state.js'
import * as timer from '/FocusTimer/timer.js'
import * as el from '/FocusTimer/elements.js'
import * as sounds from '/FocusTimer/sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown ()
    sounds.buttonPressAudio.play()
    
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
    
}