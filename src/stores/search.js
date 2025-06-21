/* Import modules. */
import { persistentAtom } from '@nanostores/persistent'

/* Set constants. */
const INITIAL_STATE = []
const MAX_APPS_PER_PAGE = 20

/* Initialize (store) state. */
// NOTE: Added support for BigInt data types.
const $Search = persistentAtom('search', INITIAL_STATE, {
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
export default $Search

/**
 * Clear
 *
 * Reset the application list.
 */
export const clear = () => {
    $Search.set(INITIAL_STATE)
}

/**
 * Add App
 *
 * Add a NEW application to the existing state of the store.
 */
export const addApp = (_app) => {
    $Search.set([...$Search.get(), _app])
}

/**
 * Set Apps
 *
 * Set the applications available in the app list.
 */
export const setApps = (_apps) => {
    $Search.set(_apps)
}

/**
 * Search By (Category)
 *
 * Search for apps based on category:
 *   01. Art & Creativity
 *   02. Developer Tools
 *   03. Education
 *   04. Entertainment
 *   05. Finance
 *   06. Games
 *   07. Health & Fitness
 *   08. Music
 *   09. News & Media
 *   10. Productivity
 *   11. Shopping
 *   12. Social
 *   13. Utility
 */
export const searchBy = async (_cat) => {
    /* Initialize locals. */
    let apps
    let catid
    let json

    /* Set method. */
    const method = 'POST'

    /* Set headers. */
    const headers = { 'content-type': 'application/json' }

    /* Handle category selection. */
    switch(_cat) {
    case 'Art & Creativity':
        catid = 'art-creativity'
        break
    case 'Developer Tools':
        catid = 'developer-tools'
        break
    case 'Education':
        catid = 'education'
        break
    case 'Entertainment':
        catid = 'entertainment'
        break
    case 'Finance':
        catid = 'finance'
        break
    case 'Games':
        catid = 'games'
        break
    case 'Health & Fitness':
        catid = 'health-fitness'
        break
    case 'Music':
        catid = 'music'
        break
    case 'News & Media':
        catid = 'news-media'
        break
    case 'Productivity':
        catid = 'productivity'
        break
    case 'Shopping':
        catid = 'shopping'
        break
    case 'Social':
        catid = 'social'
        break
    case 'Utility':
        catid = 'utility'
        break
    }

    /* Set body. */
    const body = JSON.stringify({
        query: `query SearchApps {
            app(cat: "${catid}") {
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
    const response = await fetch('https://fapp.party/graphql',
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

console.log('CATEGORY APPS', apps.length, apps)

    /* Validate apps. */
    if (typeof apps !== 'undefined' && apps !== null) {
        /* Update apps. */
        $Search.set(apps.slice(0, MAX_APPS_PER_PAGE))
    }
}

/**
 * Search For Apps
 *
 * Search for apps based on several criteria:
 *   1. App Name
 *   2. Subtitle
 *   3. Description
 *   4. Tags
 */
export const searchFor = async (_query) => {
    /* Initialize locals. */
    let apps
    let json

    /* Set method. */
    const method = 'POST'

    /* Set headers. */
    const headers = { 'content-type': 'application/json' }

    /* Set body. */
    const body = JSON.stringify({
        query: `query SearchApps {
            app(query: "${_query}") {
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
    const response = await fetch('https://fapp.party/graphql',
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

console.log('QUERY APPS', apps.length, apps)

    /* Validate apps. */
    if (typeof apps !== 'undefined' && apps !== null) {
        /* Update apps. */
        $Search.set(apps.slice(0, MAX_APPS_PER_PAGE))
    }
}
