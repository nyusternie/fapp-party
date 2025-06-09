/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $App = persistentAtom('app', [], {
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
export default $App

/**
 * Add App
 *
 * Add a NEW application to the existing state of the store.
 */
export const addApp = (_app) => {
    $App.set([...$App.get(), _app])
}

/**
 * Initialize App Store
 *
 * Request ALL mini apps from the Party database.
 */
export const getDetailsFor = async (_appid) => {
    /* Initialize locals. */
    let details
    let json

    /* Set method. */
    const method = 'POST'

    /* Set headers. */
    const headers = { 'content-type': 'application/json' }

    /* Set body. */
    const body = JSON.stringify({
        query: `query GetAppDetails {
            app(appid: "${_appid}") {
                edges {
                node {
                    hostname
                    fid
                    account
                    version
                    appName
                    iconUrl
                    splashImageUrl
                    splashBackgroundColor
                    homeUrl
                    webhookUrl
                    subtitle
                    description
                    screenshotUrl1
                    screenshotUrl2
                    screenshotUrl3
                    primaryCategory
                    tags
                    heroImageUrl
                    tagline
                    ogTitle
                    ogDescription
                    ogImageUrl
                    noindex
                    requiredChains
                    requiredCapabilities
                    isPublic
                    numMentions
                    createdAt
                    updatedAt
                }
                }
            }
        }`
    })

    /* Request remote data. */
    const response = await fetch('https://miniapps.party/graphql',
        { method, headers, body }
    ).catch(err => console.error(err))
console.log('RESPONSE', response)
    /* Validate response. */
    if (typeof response !== 'undefined' && response !== null) {
        /* Decode JSON. */
        json = await response.json()
    }
console.log('JSON', json)
    /* Validate JSON. */
    if (typeof json !== 'undefined' && json !== null) {
        /* Parse app. */
        const app = json.data.app

        /* Parse (app) details. */
        details = app.edges[0].node
    }

    /* Return (app) details. */
    return details
}

/**
 * Initialize App Store
 *
 * Request ALL mini apps from the Party database.
 */
;(async () => {
    /* Initialize locals. */
    let apps
    let json

    /* Set method. */
    const method = 'POST'

    /* Set headers. */
    const headers = { 'content-type': 'application/json' }

    /* Set body. */
    const body = JSON.stringify({
        query: `query ListApps {
            app {
                totalCount
                edges {
                node {
                    hostname
                    fid
                    account
                    version
                    appName
                    iconUrl
                    splashImageUrl
                    splashBackgroundColor
                    homeUrl
                    webhookUrl
                    subtitle
                    description
                    screenshotUrl1
                    screenshotUrl2
                    screenshotUrl3
                    primaryCategory
                    tags
                    heroImageUrl
                    tagline
                    ogTitle
                    ogDescription
                    ogImageUrl
                    noindex
                    requiredChains
                    requiredCapabilities
                    isPublic
                    numMentions
                    createdAt
                    updatedAt
                }
                cursor
                }
            }
        }`
    })

    /* Request remote data. */
    const response = await fetch('https://miniapps.party/graphql',
        { method, headers, body }
    ).catch(err => console.error(err))

    /* Validate response. */
    if (typeof response !== 'undefined' && response !== null) {
        /* Decode JSON. */
        json = await response.json()
    }

    /* Validate JSON. */
    if (typeof json !== 'undefined' && json !== null) {
        /* Parse app. */
        const app = json.data.app

        /* Set app count. */
// TODO Use this to manage payload size.
        const numApps = app.totalCount

        /* Parse apps. */
        apps = app.edges.map(_edge => _edge.node)
    }

    /* Validate apps. */
    if (typeof apps !== 'undefined' && apps !== null) {
        /* Update apps. */
        $App.set(apps.slice(0, 10))
    }
})()
