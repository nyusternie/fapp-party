/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'
import { sdk } from '@farcaster/frame-sdk'

/* Set constants. */
const INITIAL_STATE = {}

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $System = persistentAtom('system', INITIAL_STATE, {
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
export default $System

export const init = async () => {
    /* Activate back navigation. */
    // FIXME Will this affect performance in ANY way??
    await sdk.back.enableWebNavigation()
    // console.log('Back navigation is now ACTIVE!')
}

export const lastPageNum = async () => $System.get().lastPageNum

/**
 * Set Last Page Number
 *
 * Saves the last visited page number.
 * Used to manage the resume option upon re-visit.
 */
export const setLastPageNum = (_pageNum) => {
    $System.set({
        ...$System.get(),
        lastPageNum: _pageNum,
    })

    return true
}
