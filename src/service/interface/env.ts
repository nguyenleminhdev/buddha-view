export interface Env {
    /**cài đặt cho local */
    local_storage: {
        /**prefix cho tên của local */
        prefix: string
    }
    /**danh sách url các máy chủ */
    host: {
        /**máy chủ test */
        test: string
    }
}