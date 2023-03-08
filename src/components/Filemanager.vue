<template>
  <div class="grid grid-cols-4 my-8">
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
