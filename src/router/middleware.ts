import type { Router } from 'vue-router'

const checkAccessToken = (router: Router) => router.beforeEach((
    to,
    from,
    proceed
) => {
    proceed()
})

export const loadMiddleware = (router: Router) => {
    checkAccessToken(router)
}