/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'
import { sdk } from '@farcaster/frame-sdk'

/* Set constants. */
const INITIAL_STATE = {}

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $Profile = persistentAtom('profile', INITIAL_STATE, {
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
    /* Initialize locals. */
    let profile

    /* Retrieve (existing) profile. */
    profile = $Profile.get()

    /* Request Mini App flag. */
    // TODO Maybe we set a SESSION flag??
    const isMiniApp = await sdk.isInMiniApp()

    /* Validate mini app. */
    if (isMiniApp) {
        /* Request user. */
        const context = await sdk.context

        /* Request (quick) authorization. */
        const { token } = await sdk.quickAuth.getToken()

        /* Validate auth token. */
        if (!profile.authToken) {
            /* Re-initialize the profile handler. */
            // NOTE: This should NEVER happen, but better to be safe.
            profile = INITIAL_STATE
        }

        /* Set auth token. */
        profile.authToken = token

        /* Set user. */
        profile.user = context.user

        /* Set client. */
        profile.client = context.client

        /* Set features. */
        profile.features = context.features

        /* Set (new) profile. */
        $Profile.set(profile)
    } else {
        // TBD
    }

    /* Return (authorized) profile. */
    return profile
}

export const register = async (_message, _signature) => {
// console.log('REGISTER SESSION', this._session)
    /* Check for existing session. */
    if (!$Profile.session) {
        throw new Error('Oops! You MUST already have an active session.')
    }

    /* Initialize locals. */
    let message
    let session

    /* Sanitize message. */
    message = _message.replace(/\n/g, '\\n')

// TODO Validate message.

    const body = JSON.stringify({
        query: `mutation ManageSession {
            manageSession(
            sessionid: "${this.sessionid}",
            message: "${message}",
            signature: "${_signature}"
        ) {
            sessionid
            nonce
            hasAuth
            createdAt
            }
        }`
    })

    /* Request new session. */
    const response = await $fetch('https://miniapps.party/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body,
    }).catch(err => console.error(err))

    /* Validate response. */
    if (typeof response !== 'undefined' && response !== null) {
        session = response.data?.manageSession

        /* Set session. */
        setSession(session)
    }

    /* Return session. */
    return session
}

const setSession = async () => {
    // TODO
}
