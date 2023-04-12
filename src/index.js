import FileManager from "@/components/FileManager.vue";

export default {
    install: (app, options) => {
        app.component("FileManager", FileManager);
    }
}