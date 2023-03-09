<template>
  <li class="folder ml-10 py-3 text-xl text-gray-500" @click.prevent="getFields"
      :class="(store.selectFolder && store.selectFolder.name === props.folder.name) ? 'active' : ''"
  >
      <div class="flex justify-between">
          <p class="flex">
          <IconfolderClose/>
          <span class="ml-3">{{ props.folder.name }}</span>
        </p>
        <IconPlus/>
      </div>

      <ul v-if="props.folder.children">
          <Folders :folders="props.folder.children"/>
      </ul>
  </li>
</template>

<script setup>
import IconfolderClose from "../Icons/IconfolderClose.vue";
import IconPlus from "../Icons/IconPlus.vue";
import Folders from "./Folders.vue";
import {useFoldersStore} from "../../../store/FoldersStore.js";

const store = useFoldersStore()
const props = defineProps({
  folder: {},
  index: Number,
})

const getFields = () => {
  store.addChildrenToFolder(props.folder)
}
</script>

<style>
.folder.active {
  @apply bg-indigo-100 rounded-lg text-indigo-500 cursor-pointer;
}

.folder:hover {
  @apply bg-indigo-100 rounded-lg text-indigo-500 cursor-pointer;
}
</style>