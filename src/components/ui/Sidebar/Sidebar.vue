<template>
  <div class="col-span-1 px-5 border-r-2 border-gray-200 overflow-y-auto">
    <search/>

    <div class="mt-8">
      <div class="folder flex justify-between items-center text-xl text-gray-500 px-2"
            :class="store.selectFolder === null ? 'active' : '' "
            @click.prevent="store.addFileToFolder()">
        <div class="py-1 flex">
            <IconfolderOpen/>
            <p class="ml-3">/</p>
        </div>
        <IconPlus @click.prevent="addFolder(null)"/>
      </div>



      <folders :folders="store.folders"/>
    </div>
  </div>
</template>

<script setup>
import Search from "./Search.vue";
import Folders from "./Folders.vue";
import IconfolderOpen from "../Icons/IconfolderOpen.vue";
import IconPlus from "../Icons/IconPlus.vue";
import {useFoldersStore} from "../../../store/FoldersStore.js";
import {onMounted} from "vue";
import {addFolder} from "../../../actions/addFolder.js";
import NewFolder from "./NewFolder.vue";

const store = useFoldersStore()
onMounted(() => {
  store.getFolders()
})

</script>

<style>
.folder.active {
  @apply bg-indigo-100 rounded-lg text-indigo-500 cursor-pointer;
}
</style>