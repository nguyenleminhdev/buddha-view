import { getItem } from '../helper/localStorage'
import { request } from '../helper/request'

import type { Cb } from '../interface'

/**gọi api đến server test */
export const test = (
    { path, body = {} }: { path: string, body?: any },
    proceed: Cb
) => request({
    uri: `${$env.host.test}/v1/${path}`,
    method: 'POST',
    headers: { Authorization: getItem('access_token') },
    body,
    json: true,
}, (e, r) => {
    if (e) return proceed(e)
    if (r && r.mean) return proceed(r.mean)
    if (r && r.message) return proceed(r.message)

    if (r && r.data) return proceed(null, r.data)
    proceed(null, r)
})