<script setup>
import Filemanager from './components/FileManager.vue'
</script>

<template>
    <div class="container mx-auto p-8">
        <filemanager endpoint="http://localhost:8888/api"/>
    </div>
</template>
