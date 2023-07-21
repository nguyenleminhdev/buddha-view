import _ from 'lodash'

/**
 * format số thành dạng hiển thị tiền tệ
 * vd: 10000000 -> 10.000.000
 */
export const currency = (input?: number) => {
    if (!input) return ''

    let result = new Intl.NumberFormat('vi').format(input)

    return _.isNaN(result) ? '' : result
}

/**
 * format tiếng việt thành tiếng việt không dấu
 * đổi toàn bộ chữ hoa thành chữ thường
 * 
 * vd: Xin chào các bạn  -> xin chao cac ban
 */
export const nonAccentVn = (input: string) => {
    input = input.toLowerCase()

    input = input.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    input = input.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    input = input.replace(/ì|í|ị|ỉ|ĩ/g, "i")
    input = input.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    input = input.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    input = input.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    input = input.replace(/đ/g, "d")
    input = input.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
    input = input.replace(/\u02C6|\u0306|\u031B/g, "")

    return input
}

/**tạo mới obj để ngắt sự liên kết trong ô nhớ */
export const copy = (object: Object) => JSON.parse(JSON.stringify(object))