<template>
  <div class="h__screen grid grid-cols-4 p-7 border-2 border-gray-300 rounded-lg">
    <sidebar/>
    <Dropzone>
      <Files/>
    </Dropzone>
  </div>
</template>

<script setup>
import Sidebar from "./ui/Sidebar/Sidebar.vue";
import Dropzone from "./ui/Dropzone.vue";
import Files from "./ui/File/Files.vue";
</script>

<style scoped>
.h__screen {
  height: 73vh;
}
</style>