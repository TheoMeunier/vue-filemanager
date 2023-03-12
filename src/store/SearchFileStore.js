import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFilesStore } from './FilesStore.js'

export const useSearchFileStore = defineStore('searchFile', () => {
    const query = ref('')
    const storeFiles = useFilesStore()

    function searchFiles() {
        search(storeFiles.files)
    }

    const search = files => {
        if (query.value.length >= 3) {
            files.forEach(file => {
                file.name.match(query.value) != null ? (file.disable = false) : (file.disable = true)
            })
        } else {
            files.forEach(file => {
                file.disable = false
            })
        }
    }

    return {
        query,
        searchFiles,
    }
})
