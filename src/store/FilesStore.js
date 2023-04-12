import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useFoldersStore } from './FoldersStore.js'
import { useAlertStore } from './AlertStore.js'
import {i18n} from "@/lang/index.js";
import {useFileManagerStore} from "@/store/FilemangerStore.js";

export const useFilesStore = defineStore('filesStore', () => {
    const files = ref({})
    const storeFolder = useFoldersStore()
    const storeAlert = useAlertStore()
    const storeFileManager = useFileManagerStore()

    async function getFiles(folder = null) {
        let url = folder ? '?folder=' + folder.id : ''

        let response = await axios.get(storeFileManager.url + '/files' + url)
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

            let response = await axios.post(storeFileManager.url + '/files', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            files.value.push(response.data)
            storeAlert.success(i18n.t('flash.file_upload'))
        } catch (e) {
            storeAlert.success(i18n.t('flash.file_upload_error'))
        }
    }

    async function deleteFile(file) {
        if (confirm(i18n.t('file.confirm_delete'))) {
            await axios.delete(storeFileManager.url + '/files/' + file.id, file)

            let index = files.value.indexOf(file)
            files.value.splice(index, 1)
            storeAlert.success(i18n.t('flash.file_delete'))
        }
    }

    return {
        files,
        getFiles,
        uploadFile,
        deleteFile,
    }
})
