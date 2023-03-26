<template>
    <div id="toast-success" class="alert" v-show="props.show">
        <div class="alert__icon">
            <slot v-if="props.type === 'success'">
                <IconSuccess />
            </slot>

            <slot v-else>
                <IconError />
            </slot>
        </div>
        <div class="alert__content">{{ props.message }}</div>
        <button type="button" class="alert__close" @click.prevent="store.closeAlert(props.index)" aria-label="Close">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import IconSuccess from '../ui/Icons/IconSuccess.vue'
import IconError from '../ui/Icons/IconError.vue'
import { useAlertStore } from '../../store/AlertStore.js'

const store = useAlertStore()
const props = defineProps({
    type: String,
    message: String,
    show: Boolean,
    index: Number,
})
</script>

<style scoped>
.alert {
    @apply flex justify-center items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow;
}

.alert__icon {
    @apply inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg;
}

.alert__content {
    @apply ml-3 text-sm font-normal;
}

.alert__close {
    @apply ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8;
}
</style>
