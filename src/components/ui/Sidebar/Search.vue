<template>
  <div class="pb-9 border-b-2 border-gray-200">
    <form class="input__icon ">
      <div class="input__icon__icon">
        <IconSearch class="h-6 h-6"/>
      </div>
      <input
             type="text"
             class="input__icon__input w-64"
             id="example-search-input"
             placeholder="Rechercher"
      />
    </form>
  </div>
</template>

<script setup>
import IconSearch from "../Icons/IconSearch.vue";
</script>

<style scoped>
.input__icon {
  @apply relative;
}

.input__icon .input__icon__icon {
  @apply flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none;
}

.input__icon .input__icon__icon input {
  @apply rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full pl-10;
  background: #f3f3f3;
}
</style>