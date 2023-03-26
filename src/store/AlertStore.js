import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
    const notifications = ref([])

    function success(content) {
        notifications.value.push({
            type: 'success',
            message: content,
            show: true,
        })
    }

    function error(content) {
        notifications.value.push({
            type: 'error',
            message: content,
            show: true,
        })
    }

    function closeAlert(index) {
        notifications.value.splice(index, 1)
    }

    return {
        notifications,
        success,
        error,
        closeAlert,
    }
})
