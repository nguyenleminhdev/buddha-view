import type { Env } from '@/service/interface'

declare global {
    /**dữ liệu cấu hình của môi trường hiện tại */
    var $env: Env
    /**NODE_ENV hiện tại */
    var $node_env: string
    /**gắn cờ trình phát hiện trình chặn quảng cáo đã hoạt động */
    var check_ad_blocker: boolean
    /**gắn cờ đã phát hiện trình chặn quảng cáo */
    var detect_ad_blocker: boolean
}

export {}