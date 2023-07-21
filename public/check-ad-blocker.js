/**
 * * kiểm tra trình duyệt có đang xử dụng chặn quảng cáo hay không
 */

/**
 * gắn cờ js này đã được chạy - phòng trường hợp trình chặn quảng cáo chặn luôn
 * code trong này
 */
window.check_ad_blocker = true

/**
 * gọi vào api quảng cáo của google - chắc chắn sẽ bị chặn bởi trình chặn 
 * quảng cáo
 */
fetch(
    'https://pagead2.googlesyndication.com/pagead/show_ads.js',
    { mode: 'no-cors' }
).catch(e => {
    // gắn cờ phát hiện trình chặn quảng cáo
    window.detect_ad_blocker = true
})
