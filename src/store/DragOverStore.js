import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDragIsOver = defineStore('dragIsOver', () => {
    const isOver = ref(false)

    function getIsOver() {
        return isOver.value
    }

    function turnOff() {
        isOver.value = false
    }

    function turnOn() {
        isOver.value = true
    }

    return { isOver, getIsOver, turnOn, turnOff }
})
