import { waterfall } from 'async'
import { useCommonStore } from '@/stores'
import { toastError } from '@/service/helper/alert'

import type { Cb, CbError } from '@/service/interface'

/**hiển thị loading toàn trang */
export const toggle_loading = (value: boolean) => {
    const commonStore = useCommonStore()

    commonStore.is_loading_full_screen = value
}

/**
 * custom lại hàm async.waterfall
 * - thêm loading toàn trang tự động
 * - thêm thông báo khi có lỗi xảy ra
 */
export const flow = (
    waterfall_function: Array<Function>,
    proceed?: Cb,
    active_full_screen_loading?: boolean,
    disable_alert?: boolean
) => {
    /**hiển thị loading toàn trang */
    function toggleLoading(value: boolean) {
        if (!active_full_screen_loading) return

        toggle_loading(value)
    }

    waterfall([
        (cb: CbError) => { // bật loading
            toggleLoading(true)

            cb()
        },
        ...waterfall_function
    ], e => {
        toggleLoading(false) // tắt loading

        if (e) {
            if (!disable_alert) toastError(e) // thông báo lỗi

            if (proceed) proceed(e)

            return
        }

        if (proceed) proceed()
    })
}