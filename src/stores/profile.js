/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'
import { sdk } from '@farcaster/frame-sdk'

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $Profile = persistentAtom('profile', {}, {
    encode: (_plaintext) => JSON.stringify(_plaintext, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value
    ),
    decode: (_jsonObj) => JSON.parse(_jsonObj, (key, value) => {
        if (typeof value === 'string' && /^\d+n$/.test(value)) {
            return BigInt(value.slice(0, value.length - 1))
        }
        return value
    }),
})
export default $Profile

/* Initialize (store). */
export const init = async () => {
    /* Request Mini App flag. */
    // TODO Maybe we set a SESSION flag??
    const isMiniApp = await sdk.isInMiniApp()

    /* Validate mini app. */
    if (isMiniApp) {
        /* Request (quick) authorization. */
        const { token } = await sdk.actions.quickAuth()

        const profile = $Profile.get()

        /* Set auth token. */
        profile.authToken = token

        $Profile.set(profile)

        /* Return (auth) token. */
        // return token
    } else {
        // return null
    }



    /* Return success. */
    return true
}
