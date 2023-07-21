<template>
    <div v-if="is_alert"
        class="text-white absolute w-screen z-50 top-[50px] py-1 flex items-end justify-center md:top-0 bg-red-500">
        {{ $t('v1.view.adblocker.title') }}
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

/**có hiển thị thông báo hay không */
const is_alert = ref(false)

onMounted(() => {
    /**kiểm tra các giá trị chặn quảng cáo */
    is_alert.value = !globalThis.check_ad_blocker || globalThis.detect_ad_blocker
})
</script>