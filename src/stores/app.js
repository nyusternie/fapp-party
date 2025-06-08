import { deepMap } from 'nanostores'

/* Initialize state. */
export const $App = deepMap([])

/**
 * Add App
 *
 * Add a NEW application to the existing state of the store.
 */
export function addApp(_app) {
    $App.set([...$App.get(), _app])
}

/**
 * Initialize App Store
 *
 * Request ALL mini apps from the Party database.
 */
;(async () => {
    /* Initialize locals. */
    let app
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
// console.log('RAW RESPONSE', response)

    /* Validate response. */
    if (typeof response !== 'undefined' && response !== null) {
        /* Decode JSON. */
        json = await response.json()
// console.log('JSON', json)
    }

    /* Validate JSON. */
    if (typeof json !== 'undefined' && json !== null) {
        app = json.data.app
// console.log('APP', app)

        const numApps = app.totalCount
// console.log('NUM APPS', numApps)

        apps = app.edges.map(_edge => _edge.node)
// console.log('APPS', apps)

        /* Update apps. */
        $App.set(apps.slice(0, 10))
    }
})()
