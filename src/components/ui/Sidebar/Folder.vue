<template>
    <div class="mt-1">
        <li class="ml-10 text-xl text-gray-500">
            <div v-if="props.folder.id" class="folder px-2 py-2 flex justify-between" :class="store.selectFolder && store.selectFolder.id === props.folder.id ? 'active' : ''">
                <p class="flex" @click.prevent="getFields">
                    <IconfolderClose />
                    <span class="ml-3">{{ props.folder.name }}</span>
                </p>
                <IconPlus @click="addFolder(props.folder)" />
            </div>

            <div v-else class="folder px-2 py-2 flex justify-between">
                <NewFolder />
            </div>
        </li>

        <ul class="ml-9" v-if="props.folder.children">
            <Folders :folders="props.folder.children" />
        </ul>
    </div>
</template>

<script setup>
import IconfolderClose from '../Icons/IconfolderClose.vue'
import IconPlus from '../Icons/IconPlus.vue'
import Folders from './Folders.vue'
import { useFoldersStore } from '../../../store/FoldersStore.js'
import { onMounted } from 'vue'
import NewFolder from './NewFolder.vue'
import { addFolder } from '../../../actions/addFolder.js'

const store = useFoldersStore()
const props = defineProps({
    folder: {},
})

const getFields = () => {
    store.addChildrenToFolder(props.folder)
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
