import {useFoldersStore} from "../store/FoldersStore.js";
import {useNewFolderStore} from "../store/NewFolderStore.js";

export async function addFolder(parent) {
    const store = useFoldersStore()
    const storeNewFolder = useNewFolderStore()

    if (storeNewFolder.isEditing) {
        if (!parent) {
            store.folders.shift()
        } else {
            storeNewFolder.parentEdit.children.shift()
        }
    }

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
            parent: null
        })
    }

}

export async function createNewFolder(name) {
    const store = useFoldersStore()
    const storeNewFolder = useNewFolderStore()

    const data = {
        name: name,
        parent: storeNewFolder.parentEdit.id
    }

    console.log(data)

    //await store.createFolder(data)
}