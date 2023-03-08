export function dragLeave(e) {
    e.preventDefault()
}

export function dragOver (e) {
    e.preventDefault()
}

export function drop (e) {
    e.preventDefault()
    /*Array.from(e.dataTransfer.files).forEach(async (file) => {
        await uploadFile(file, selectFolder.value)
    });*/
}