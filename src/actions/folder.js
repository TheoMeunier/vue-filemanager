import { useFoldersStore } from '../store/FoldersStore.js'
import { useNewFolderStore } from '../store/NewFolderStore.js'
import { useAlertStore } from '../store/AlertStore.js'
import {i18n} from "@/lang/index.js";

export async function folder(parent) {
    const store = useFoldersStore()
    const storeNewFolder = useNewFolderStore()

    removeInputEdit(storeNewFolder, store)

    storeNewFolder.parentEdit = parent ?? {}
    storeNewFolder.isEditing = true

    if (!parent) {
        store.folders.unshift({
            id: null,
            name: null,
            parent: null,
        })
    } else {
        if (!parent.children) {
            await store.addChildrenToFolder(parent)
        }

        parent.children.unshift({
            id: null,
            name: null,
            parent: null,
        })
    }
}

export async function createNewFolder(name) {
    const store = useFoldersStore()
    const storeNewFolder = useNewFolderStore()
    const storeAlert = useAlertStore()
    const parentEdit = storeNewFolder.parentEdit

    const data = {
        name: name,
        parent: parentEdit.id ?? null,
    }

    await store.createFolder(data)

    if (!parentEdit.children) {
        store.folders.push({ id: name, name: name, parent: null })
    } else {
        parentEdit.children.push({
            id: parentEdit.id + '/' + name,
            name: name,
            parent: parentEdit.id,
        })
    }

    removeInputEdit(storeNewFolder, store)
    storeNewFolder.isEditing = false
    storeNewFolder.parentEdit = {}

    storeAlert.success(i18n.t('flash.folder_create'))
}

export function closeOnEscape() {
    const store = useFoldersStore()
    const storeNewFolder = useNewFolderStore()

    removeInputEdit(storeNewFolder, store)
    storeNewFolder.isEditing = false
    storeNewFolder.parentEdit = {}
}

function removeInputEdit(storeNewFolder, store) {
    if (storeNewFolder.isEditing) {
        if (!storeNewFolder.parentEdit.children) {
            store.folders.shift()
        } else {
            storeNewFolder.parentEdit.children.shift()
        }
    }
}
