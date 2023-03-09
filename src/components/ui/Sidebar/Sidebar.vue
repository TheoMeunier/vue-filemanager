<template>
  <div class="col-span-1  px-5 border-r-2 border-gray-200">
    <search/>

    <div class="mt-8">
      <div class="folder flex justify-between items-center text-xl text-gray-500  px-2">
        <div class="py-1 flex">
            <IconfolderOpen/>
            <p class="ml-3">/</p>
        </div>
        <IconPlus/>
      </div>

      <folders/>
    </div>
  </div>
</template>

<script setup>
import Search from "./Search.vue";
import Folders from "./Folders.vue";
import IconfolderOpen from "../Icons/IconfolderOpen.vue";
import IconPlus from "../Icons/IconPlus.vue";
</script>