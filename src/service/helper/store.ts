import { watch } from 'vue'
import { getItem, setItem } from '@/service/helper/localStorage'

import type { Ref } from 'vue'

/**lưu lại giá trị của store vào local, để khi f5 trang không bị mất */
export const saveLocal = (data: Ref<any>, name: string) => watch(
    () => data.value,
    () => setItem(name, data.value),
    { deep: true }
)

/**load lại giá trị đã được lưu local vào store, khi trang được load */
export const getLocal = (name: string, default_value: any) => {
    const VALUE = getItem(name)

    return VALUE || default_value
}