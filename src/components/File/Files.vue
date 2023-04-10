<template>
    <div class="flex flex-wrap gap-y-4 py-6">
        <slot v-if="store.files.length" v-for="file in store.files" :key="file.id">
            <file :file="file" v-show="!file.disable"/>
        </slot>

        <slot v-else>
            <div class="w-full flex justify-center items-center flex-col text-gray-400">
                <p class="text-2xl py-3">Ce dossier est vide</p>
                <p class="text-xl py-4">Déposer un fichier ici pour le téléverser<i class="fa-solid fa-file-arrow-down ml-2"></i></p>
                <button class="btn btn__danger" v-if="storeFolder.selectFolder && !storeFolder.selectFolder.children.length" @click.prevent="removeFolder">
                    Supprimer le dossier
                </button>
            </div>
        </slot>
    </div>
</template>

<script setup>
import File from './file.vue'
import { useFoldersStore } from '../../store/FoldersStore.js'
import { onMounted } from 'vue'
import { useFilesStore } from '../../store/FilesStore.js'

const store = useFilesStore()
const storeFolder = useFoldersStore()

onMounted(() => {
    storeFolder.addFileToFolder()
})

const removeFolder = async () => {
    if (confirm('Voulez vous vraiment supprimer ce dossier ?')) {
        await storeFolder.deleteFolder(storeFolder.selectFolder)
        storeFolder.selectFolder.value = null
    }
}
</script>

<style scoped>
.btn__danger {
    display: block;
    margin: 0 auto;
    background: #d70d0d;
    color: white;
    padding: 10px 8px;
    border-radius: 5px;
}

.btn__danger:hover {
    background: #b60e0e;
    transition: 0.5s;
}
</style>
