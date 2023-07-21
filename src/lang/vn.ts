import type { Language } from '@/service/interface'

const source: Language = {
    name: 'Tiếng Việt',
    v1: {
        common: {
            title: 'Buddha View',
            loading: 'Đang tải dữ liệu ...',
            incoming_feature: 'Tính năng đang được phát triển!',
        },
        view: {
            network: {
                disconnect: 'Mất kết nối mạng...',
                connected: 'Đã kết nối mạng!'
            },
            adblocker: {
                title: 'Hãy tắt các tiện ích chặn quảng cáo bạn đang sử dụng đối với trang này, để có thể sử dụng một cách bình thường',
            },
        }
    },
}

export default source