import { useFilesStore } from '../store/FilesStore.js'

export function dragLeave(e) {
    e.preventDefault()
}

export function dragOver(e) {
    e.preventDefault()
}

export function drop(e) {
    e.preventDefault()
    const store = useFilesStore()

    Array.from(e.dataTransfer.files).forEach(async file => {
        await store.uploadFile(file)
    })
}
