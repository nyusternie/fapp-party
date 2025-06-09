/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $System = persistentAtom('system', [], {
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
