/**
 * đọc param | query string trên url
 */
const queryString = (
    key: string,
    url: string = window.location.href
) => {
    key = key.replace(/[\[\]]/g, '\\$&')

    var regex: RegExp = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')

    var results: RegExpExecArray | null = regex.exec(url)

    if (!results || !results[2]) return

    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export { queryString }