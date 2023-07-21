import { createPinia } from 'pinia'
import { i18n } from '@/lang'

import type { App } from 'vue'
import type { Cb } from '@/service/interface'

export const loadApp = (APP: App, proceed: Cb) => {
    const { t } = i18n.global

    // i18n cho title của trang
    document.title = t('v1.common.title')

    // init store
    APP.use(createPinia())

    proceed()
}