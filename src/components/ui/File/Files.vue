<template>
  <div class="flex justify-start flex-wrap gap-5">
    <slot v-if="store.files.length" v-for="file in store.files" :key="file.id">
      <file :file="file"/>
    </slot>

    <slot v-else>
      <div class="w-full flex justify-center items-center flex-col text-gray-400">
        <p class="text-2xl py-3">Ce dossier est vide</p>
        <p class="text-xl py-4">Déposer un fichier ici pour le téléverser<i
            class="fa-solid fa-file-arrow-down ml-2"></i></p>
        <button class="btn btn__danger">Supprimer le dossier</button>
      </div>
    </slot>
  </div>
</template>

<script setup>
import {useFilesStore} from "../../../store/FilesStore.js";
import File from "./file.vue";
import {onMounted} from "vue";

const store = useFilesStore()

onMounted(() => {
  store.getFiles()
})
</script>

<style scoped>

</style>