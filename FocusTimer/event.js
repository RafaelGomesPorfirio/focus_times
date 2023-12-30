import state from '/FocusTimer/state.js'
import { controls } from '/FocusTimer/elements.js';
import * as actions from '/FocusTimer/actions.js'
import * as el from '/FocusTimer/elements.js'
import { updateDisplay } from "/FocusTimer/timer.js"


export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()

    })

}

export function setMinutes () {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')

    })
}