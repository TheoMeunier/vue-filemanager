<template>
    <div class="flex justify-between items-center">
      <IconFolderClose />
      <input
          type="text"
          class="form-control"
          v-model="newFolder.name"
          placeholder="name folder"
      >
      <IconArrowRight @click.stop="createNewFolder(newFolder.name)"/>
    </div>
</template>

<script setup>
import IconFolderClose from "../Icons/IconfolderClose.vue";
import IconArrowRight from "../Icons/IconArrowRight.vue";
import {useFoldersStore} from "../../../store/FoldersStore.js";
import {reactive} from "vue";
import {createNewFolder} from "../../../actions/addFolder.js";

const store = useFoldersStore()

const newFolder = reactive({
  name: '',
})
</script>

<style scoped>
.form-control {
  @apply rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full;
}
</style>