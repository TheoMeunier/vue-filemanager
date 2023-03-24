<template>
  <div class="mt-1">
    <li class="ml-10 text-xl text-gray-500">
      <div v-if="props.folder.id" class="folder px-2 py-2 flex justify-between"
           :class="store.selectFolder && store.selectFolder.id === props.folder.id ? 'active' : ''">
        <p class="flex" @click.stop.prevent="getFields(); toggleChildren()">
          <IconfolderClose/>
          <span class="ml-3">{{ props.folder.name }}</span>
        </p>
        <IconPlus @click="toggleChildren(); addFolder(props.folder)"/>
      </div>

      <div v-else class="folder px-2 py-2 flex justify-between">
        <NewFolder/>
      </div>
    </li>


    <ul class="ml-9" v-show="isFolderOpen" v-if="props.folder.children">
      <Folders :folders="props.folder.children"/>
    </ul>
  </div>
</template>

<script setup>
import IconfolderClose from '../Icons/IconfolderClose.vue'
import IconPlus from '../Icons/IconPlus.vue'
import Folders from './Folders.vue'
import {useFoldersStore} from '../../../store/FoldersStore.js'
import {onMounted, ref} from 'vue'
import NewFolder from './NewFolder.vue'
import {addFolder} from '../../../actions/addFolder.js'

const store = useFoldersStore()
const isFolderOpen = ref(false)
const props = defineProps({
  folder: {},
})

const getFields = () => {
  store.addChildrenToFolder(props.folder)
}

const toggleChildren = () => {
  if (!props.folder.children){
    isFolderOpen.value = true
    return true
  }

  isFolderOpen.value = !isFolderOpen.value
}
</script>

<style>
.active {
  @apply bg-indigo-100 rounded-lg text-indigo-500 cursor-pointer;
}

.folder:hover {
  @apply bg-indigo-100 rounded-lg text-indigo-500 cursor-pointer;
}
</style>
