import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useFoldersStore } from './FoldersStore.js'
import {useAlertStore} from "./AlertStore.js";

export const useFilesStore = defineStore('filesStore', () => {
    const files = ref({})
    const storeFolder = useFoldersStore()
    const storeAlert = useAlertStore()

    async function getFiles(folder = null) {
        let url = folder ? '?folder=' + folder.id : ''

        let response = await axios.get('http://localhost:8888/api/files' + url)
        files.value = response.data
    }

    async function uploadFile(file) {
        try {
            const fd = new FormData()
            const selectFolder = storeFolder.selectFolder
            fd.append('file', file)

            if (selectFolder) {
                fd.append('folder', selectFolder.id)
            }

            let response = await axios.post('http://localhost:8888/api/files', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            files.value.push(response.data)
            storeAlert.success('Upload file successfully')
        } catch (e) {
            storeAlert.success('Upload file error')
        }
    }

    async function deleteFile(file) {
        if (confirm('Voulez vous vraiment supprimer ce fichier ?')) {
            await axios.delete('http://localhost:8888/api/files/' + file.id, file)

            let index = files.value.indexOf(file)
            files.value.splice(index, 1)
            storeAlert.success('Delete file successfully')
        }
    }

    return {
        files,
        getFiles,
        uploadFile,
        deleteFile,
    }
})
