<template>
    <div class="flex justify-between items-center">
        <IconFolderClose />
        <input
            type="text"
            class="form-control"
            v-model="newFolder.name"
            placeholder="name folder"
            ref="input"
            @keyup.enter="createNewFolder(newFolder.name)"
            @keyup.esc="closeOnEscape"
        />
        <IconArrowRight @click.stop="createNewFolder(newFolder.name)" />
    </div>
</template>

<script setup>
import IconFolderClose from '../Icons/IconfolderClose.vue'
import IconArrowRight from '../Icons/IconArrowRight.vue'
import { useFoldersStore } from '../../../store/FoldersStore.js'
import {onMounted, reactive, ref} from 'vue'
import {closeOnEscape, createNewFolder} from '../../../actions/addFolder.js'

onMounted(() => {
  input.value.focus()
})

const store = useFoldersStore()
const input = ref(null)

const newFolder = reactive({
    name: '',
})
</script>

<style scoped>
.form-control {
    @apply rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full;
}
</style>
