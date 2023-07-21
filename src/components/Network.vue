<template>
    <div v-if="is_alert" class="text-white absolute w-screen z-50 top-[50px] py-1 flex items-end justify-center md:top-0"
        :class="is_connected_internet ? 'bg-green-500' : 'bg-red-500'">
        <span v-if="is_connected_internet">{{ $t('v1.view.network.connected') }}</span>
        <span v-else>{{ $t('v1.view.network.disconnect') }}</span>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**có hiện thông báo hay không */
const is_alert = ref(false)
/**có đang kết nối vào mạng hay không */
const is_connected_internet = ref(true)

/**xử lý sự kiện khi online/offline */
function handleNetworkChange($event: Event) {
    if ($event.type === 'offline') {
        is_alert.value = true
        is_connected_internet.value = false
    }
    if ($event.type === 'online') {
        is_connected_internet.value = true
        setTimeout(() => {
            is_alert.value = false
        }, 3000)
    }
}

// lắng nghe các sự kiện khi khởi tao component
onMounted(() => {
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)
})

// xoá các event khi không sử dụng đến component này
onUnmounted(() => {
    window.removeEventListener('online', handleNetworkChange)
    window.removeEventListener('offline', handleNetworkChange)
})


</script>