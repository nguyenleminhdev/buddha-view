/**
 * .env.dev
 */

import type { Env } from '@/service/interface'

const ENV: Env = {
    local_storage: {
        prefix: 'buddha_'
    },
    host: {
        test: 'http://localhost:1355'
    }
}

export default ENV