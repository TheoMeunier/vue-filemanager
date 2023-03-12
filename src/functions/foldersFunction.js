export function getParentFolder(sources, id) {
    let parent
    const searchSource = source => {
        if (source.id === id) {
            parent = source
        }

        if (source.children) {
            source.children.forEach(searchSource)
        }
    }

    sources.forEach(searchSource)

    return parent
}
