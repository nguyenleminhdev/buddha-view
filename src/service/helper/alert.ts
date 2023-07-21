/**
 * custom lại sweetalert
 */

import Swal from 'sweetalert2'

import type { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'
import type { Cb } from '@/service/interface'

/**thông báo dạng toast */
export const toast = (
    icon: SweetAlertIcon,
    title: string,
    position: SweetAlertPosition = 'top-end',
    timer: number = 3000
) => Swal.fire({
    icon,
    title,
    position,
    timer,
    toast: true,
    showConfirmButton: false,
    timerProgressBar: true,
    customClass: {
        popup: 'mt-[60px] md:mt-[20px] xl:mt-0'
    },
    didOpen: (r: HTMLElement) => {
        r.addEventListener('mouseenter', Swal.stopTimer)
        r.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

/**thông báo dạng confirm */
export const confirm = (
    icon: SweetAlertIcon,
    title: string,
    text: string,
    proceed: Cb
) => Swal
    .fire({ title, text, icon, showCancelButton: true })
    .then(({ isConfirmed }: { isConfirmed: boolean }) => {
        if (!isConfirmed) return proceed(true)

        proceed()
    })

/**thông báo lỗi dạng toast */
export const toastError = (e: any) => {
    let title = e.message || e

    // tự động parser obj thành string
    if (typeof title === 'object') title = JSON.stringify(title, null, 4)

    toast('error', title)
}