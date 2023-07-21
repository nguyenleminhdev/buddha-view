import { waterfall } from 'async'
import { createApp } from 'vue'
import App from '@/App.vue'
import {
    loadEnv, loadLib, loadApp, loadLanguage, loadRouter
} from '@/service/core'
import '@/assets/css/tailwind.css'

import type { CbError } from '@/service/interface'

const APP = createApp(App)

waterfall([
    (cb: CbError) => loadEnv(cb),
    (cb: CbError) => loadLib(cb),
    (cb: CbError) => loadRouter(APP, cb),
    (cb: CbError) => loadLanguage(APP, cb),
    (cb: CbError) => loadApp(APP, cb),
], () => APP.mount('#app'))