<template>
  <div class="relative p-2 border-2 border-gray-200 rounded-lg group w-36 h-50">
    <div
        @click.prevent="store.deleteFile(props.file)"
        class="text-red-500 -top-4 -right-3 absolute cursor-pointer text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
      <IconCross/>
    </div>
    <img class="w-32 h-32" :src="props.file.url" alt="">
    <p class="text-center mt-2 text-lg break-all">{{ props.file.name.substring(0, 20) }}</p>
  </div>
</template>

<script setup>
import IconCross from "../Icons/IconCross.vue";
import {useFilesStore} from "../../../store/FilesStore.js";

const store = useFilesStore()
const props = defineProps({
  file: {}
})
</script>

<style scoped>

</style>