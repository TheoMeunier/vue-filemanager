import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewFolderStore = defineStore('newFolder', () => {
    const isEditing = ref(false)
    const parentEdit = ref({})

    return {
        isEditing,
        parentEdit,
    }
})
