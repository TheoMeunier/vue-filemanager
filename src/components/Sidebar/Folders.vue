<template>
    <div>
        <ul>
            <slot v-for="(folder, index) in props.folders" :key="folder.id">
                <Folder :folder="folder" :index="index" />
            </slot>
        </ul>
    </div>
</template>

<script setup>
import Folder from './Folder.vue'

const props = defineProps({
    folders: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped></style>
