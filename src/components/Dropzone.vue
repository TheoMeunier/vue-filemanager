<template>
    <div
        class="relative col-span-3 px-6"
        @dragleave.prevent="dragLeave($event); store.turnOff()"
        @dragover.prevent="dragOver($event); store.turnOn()"
        @drop.prevent="drop($event); store.turnOff()"
    >
        <slot></slot>
        <div class="dropzone__file" :class="store.isOver === true ? 'active' : ''">
            <i class="fa-solid fa-cloud-arrow-up"></i>
        </div>
    </div>
</template>

<script setup>
import { dragOver, dragLeave, drop } from '../actions/dropzone.js'
import { useDragIsOver } from '../store/DragOverStore.js'

const store = useDragIsOver()
</script>

<style scoped>
.dropzone__file {
    pointer-events: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s;
    color: #fff;
}

.dropzone__file::before,
.dropzone__file::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.dropzone__file::after {
    margin: 10px;
    border-radius: 4px;
    @apply border-dashed border-2 border-indigo-500;
}

.dropzone__file::before {
    @apply bg-indigo-400;
    opacity: 0.6;
}

.active {
    opacity: 1;
}
</style>
