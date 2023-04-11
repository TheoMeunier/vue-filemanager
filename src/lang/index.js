import {I18n} from "i18n-js";
import {message} from "@/lang/lang.js";
import {createI18n} from "vue-i18n";

let locale = 'fr'
let defaultLocal = 'en'

export const i18n = new I18n(message)
i18n.locale = locale
i18n.defaultLocale = defaultLocal

export const i18nVue = createI18n({
    legacy: true,
    locale: locale,
    fallbackLocal: defaultLocal,
    messages: message
})