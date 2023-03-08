<template>
  <div class="flex justify-start flex-wrap gap-5">
<!--    <slot v-if="files.length" v-for="file in files" :key="file.id">
      <div class="relative p-2 border-2 border-gray-200 rounded-lg group w-36 h-50">
        <div class="text-red-500 -top-4 -right-3 absolute cursor-pointer text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <img class="w-32 h-32" :src="file.url" alt="">
        <p class="text-center mt-2 text-lg break-all">{{ file.name.substring(0, 20) }}</p>
      </div>
    </slot>-->

<!--    <slot v-else>-->
      <div class="w-full flex justify-center items-center flex-col text-gray-400">
        <p class="text-2xl py-3">Ce dossier est vide</p>
        <p class="text-xl py-4">Déposer un fichier ici pour le téléverser<i class="fa-solid fa-file-arrow-down ml-2"></i></p>
        <button class="btn btn__danger">Supprimer le dossier</button>
      </div>
<!--    </slot>-->
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>