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
    let json
    // let profile
    let response
    let session

    /* Retrieve (existing) profile. */
    // profile = $Profile.get()

    /* Request Mini App flag. */
    // TODO Maybe we set a SESSION flag??
    const isMiniApp = await sdk.isInMiniApp()

    /* Validate mini app. */
    if (isMiniApp && (!$Profile.get().authToken || !$Profile.get().user)) {
        /* Re-initialize the profile handler. */
        // NOTE: This should NEVER happen, but better to be safe.
        const profile = INITIAL_STATE

        /* Request (quick) authorization. */
        const { token } = await sdk.quickAuth.getToken()

        /* Set auth token. */
        profile.authToken = token

        /* Request user. */
        const context = await sdk.context

        /* Set user. */
        profile.user = context.user

        /* Set client. */
        profile.client = context.client

        /* Set features. */
        profile.features = context.features

        /* Set (new) profile. */
        $Profile.set(profile)
    }

    /* Validate an EXISTING session. */
    if ($Profile.get().sessionid) {
        /* Manage EXISTING session. */
        response = await fetch('https://miniapps.party/graphql', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                query: `mutation ManageSession {
                    manageSession(sessionid: "${$Profile.get().sessionid}") {
                    sessionid
                    nonce
                    hasAuth
                    createdAt
                    }
                }`
            })
        }).catch(err => console.error(err))

        /* Request JSON. */
        json = await response.json()

// FIXME REFACTOR VALIDATION

        /* Validate EXISTING session (remote) status. */
        if (json?.data?.manageSession?.sessionid === $Profile.get().sessionid) {
            /* Validate mini app. */
            if (isMiniApp) {
console.log('SESSION HASH AUTH', $Profile.get().session.hasAuth)

                /* Validate session authentication. */
                if (!$Profile.get().session.hasAuth) {
                    /* Attempt to register the profile. */
                    const registration = await register()
console.log('REGISTRATION', registration)
                }
            }

            return $Profile.get().session // FIXME We don't return to anyone?
        } else {
            console.error('Oops! This session has expired.')
            deleteSession()
            // alert(`You've been signed out! Please re-signin to continue...`)

            /* Re-start initialization. */
            setTimeout(init, 100)
            return
        }
    }

    /* Request NEW session. */
    response = await fetch('https://miniapps.party/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            query: `mutation ManageSession {
                manageSession {
                sessionid
                nonce
                hasAuth
                createdAt
                }
            }`
        })
    }).catch(err => console.error(err))

    /* Request JSON. */
    json = await response.json()

    /* Validate (session) JSON. */
    if (typeof json !== 'undefined' && json !== null) {
        session = json.data?.manageSession

        /* Set session. */
        setSession(session)
    }
console.log('SESSION', session)

    /* Return (un-authorized) profile. */
    return $Profile.get()
}

/**
 * Register Session
 *
 * Provides an `authToken` to register the active session with an
 * authenticated user profile.
 */
const register = async () => {
console.log('REGISTER SESSION', $Profile.get().authToken)
    /* Check for existing session. */
    if (!$Profile.get().session) {
        throw new Error('Oops! You MUST already have an active session.')
    }

    /* Initialize locals. */
    let session

    const body = JSON.stringify({
        query: `mutation ManageSession {
            manageSession(
            sessionid: "${$Profile.get().sessionid}",
            authToken: "${$Profile.get().authToken}",
        ) {
            sessionid
            nonce
            hasAuth
            createdAt
            }
        }`
    })

    /* Request new session. */
    const response = await fetch('https://miniapps.party/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body,
    }).catch(err => console.error(err))

    /* Request JSON. */
    const json = await response.json()

    /* Validate JSON. */
    if (typeof json !== 'undefined' && json !== null) {
        session = json.data?.manageSession

        /* Set session. */
        setSession(session)
    }

    /* Return session. */
    return session
}

const setSession = async (_session) => {
    /* Retrieve profile. */
    const profile = $Profile.get()

    /* Set session. */
    profile.session = _session

    /* Set session ID. */
    profile.sessionid = _session.sessionid

    /* Set profile. */
    $Profile.set(profile)
}

const deleteSession = async () => {
    /* Retrieve profile. */
    const profile = $Profile.get()

    /* Delete session. */
    delete profile.session

    /* Delete session ID. */
    delete profile.sessionid

    /* Set profile. */
    $Profile.set(profile)
}
