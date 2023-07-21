/**
 * lib để request api
 */

import type { Cb } from '@/service/interface'

export type Method = 'POST' | 'GET'

interface InputRequest {
    uri: string
    method: Method
    body?: any
    json?: boolean
    headers?: any
}

export const request = (
    { uri, method, json, body = {}, headers = {} }: InputRequest,
    proceed: Cb
) => {
    if (json) {
        body = JSON.stringify(body)
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            ...headers
        }
    }

    if (method === 'GET') body = undefined

    fetch(uri, { method, headers, body })
        .then(r => json ? r.json() : r)
        .then(r => {
            proceed(null, r)
        })
        .catch(e => {
            proceed(e.message || e)
        })
}