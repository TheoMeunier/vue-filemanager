import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useFilesStore } from './FilesStore.js'
import { getParentFolder } from '../functions/foldersFunction.js'
import { useAlertStore } from './AlertStore.js'
import {i18n} from "@/lang/index.js";
import {useFileManagerStore} from "@/store/FilemangerStore.js";

export const useFoldersStore = defineStore('foldersStore', () => {
    const folders = ref({})
    const selectFolder = ref(null)
    const storeFile = useFilesStore()
    const storeAlert = useAlertStore()
    const storeFileManager = useFileManagerStore()
    let folderChildren

    async function getFolders() {
        let response = await axios.get(storeFileManager.url + '/folders')
        folders.value = response.data
    }

    async function getChildrenFolder(parent) {
        let response = await axios.get(storeFileManager.url + '/folders?parent=' + parent)
        folderChildren = response.data
    }

    async function addChildrenToFolder(folder) {
        if (!folder.children) {
            await getChildrenFolder(folder.id)
            folder.children = folderChildren
        }

        await addFileToFolder(folder)
        selectFolder.value = folder
    }

    async function addFileToFolder(folder) {
        if (folder) {
            if (!folder.files) {
                let response = await storeFile.getFiles(folder)
                folder.files = response
            }
        } else {
            await storeFile.getFiles()
            selectFolder.value = null
        }
    }

    async function createFolder(data) {
        try {
            await axios.post(storeFileManager.url + '/folders', data)
        } catch (e) {
            console.log(e)
        }
    }
    async function deleteFolder(folder) {
        await axios.delete('http://localhost:8888/api/folders/' + folder.id)
        let index = folders.value.indexOf(folder)

        if (folder.parent) {
            let parent = getParentFolder(folders.value, folder.parent)
            index = parent.children.indexOf(folder)
            parent.children.splice(index, 1)
        } else {
            folders.value.splice(index, 1)
        }

        storeAlert.success(i18n.t('flash.folder_delete'))
    }

    return {
        folders,
        folderChildren,
        selectFolder,
        getFolders,
        addChildrenToFolder,
        addFileToFolder,
        createFolder,
        deleteFolder,
    }
})
