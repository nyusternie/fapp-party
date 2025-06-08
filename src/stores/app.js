import { deepMap } from 'nanostores'

export const $App = deepMap({
    hostname: 'homemadecrypto.com',
})

export function addProfile(app) {
    $apps.set([...$apps.get(), app])
}
