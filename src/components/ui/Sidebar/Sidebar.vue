<template>
  <div class="col-span-1  px-5 border-r-2 border-gray-200">
    <search/>

    <div class="mt-8">
      <div class="folder flex justify-between items-center text-xl text-gray-500  px-2">
        <div class="py-1">
          <i class="fa-solid fa-folder-open"></i>
          /
        </div>
        <i class="fa-solid fa-plus"></i>
      </div>

      <folders/>
    </div>
  </div>
</template>

<script setup>
import Search from "./Search.vue";
import Folders from "./Folders.vue";
</script>