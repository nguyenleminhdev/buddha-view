/**
 * i18n cho vue
 * 
 * cú pháp:
 * - với <template>*</template>
 * {{ $t('v1.common.ghtk') }}
 * 
 * - với <script setup>*</script>
 * import { useI18n } from 'vue-i18n'
 * const { t: $t } = useI18n()
 * return $t('v1.common.ghtk')
 * 
 * - với các file script ngoài vue component
 * import { i18n } from '@/lang'
 * const { t: $t } = i18n.global
 * return $t('v1.common.ghtk')
 */

import { createI18n } from 'vue-i18n'
import { queryString } from '@/service/helper/queryString'

import vn from '@/lang/vn'

// dọc dữ liệu lang hiện tại
export const locale = queryString('locale') || localStorage.getItem('locale') || 'vn'

// init i18n
export const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'vn',
    messages: { 
        vn, vi: vn,
    },
})