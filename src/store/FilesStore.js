import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";

export const useFilesStore = defineStore('filesStore', () => {
    const files = ref({})
    async function getFiles(folder = null) {
        let url = folder ? '?folder=' + folder.id : ''

        let response = await axios.get('http://localhost:8888/api/files' + url)
        files.value = response.data
    }

    async function uploadFile() {

    }

    /*async function deleteFile(file) {
        if (confirm('Voulez vous vraiment supprimer ce fichier ?')) {
            await axios.delete('/api/files/' + file.id, file)
            files.value.splice(indfiles.value.indexOf(file), 1)
        }
    }*/


    return {
        files,
        getFiles
    }
})