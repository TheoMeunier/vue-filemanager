<template>
    <Alerts />
    <div class="h__screen grid grid-cols-4 border-2 border-gray-300 rounded-lg">
        <sidebar />
        <Dropzone>
            <Files />
        </Dropzone>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar/Sidebar.vue'
import Dropzone from './Dropzone.vue'
import Files from './File/Files.vue'
import Alerts from './Alert/Alerts.vue'
</script>

<style scoped>
.h__screen {
    height: 75vh;
}
</style>
