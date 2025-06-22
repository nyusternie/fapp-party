/* Import modules. */
import type { APIRoute } from 'astro'

/* Create API endpoint. */
export const GET: APIRoute = ({ request }) => {
    /* Initialize locals. */
    let data

    /* Set headers. */
    const headers = {
        'content-type': 'application/json',
    }

    /* Parse (request) URL. */
    const url = new URL(request.url)

    /* Set hostname. */
    // const hostname = url.hostname === 'localhost' ? 'miniapps.party' : url.hostname
    const hostname = request.headers.get('host')

    /* Initialize data. */
    data = {}
// FIXME FOR DEBUGGING PURPOSES ONLY
data.hostname = hostname
data.getHost = request.headers.get('host')
data.urlHostname = url.hostname
data.debug = 'rev1'
    /* Initialize account association. */
    data.accountAssociation = {}

    /* Set header. */
    data.accountAssociation.header = 'eyJmaWQiOjg3MDU5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweEM4MDEzQThDMDk3NzRlYjJhMDA4RmRDYmVEQjVmNjQwZDFkYmVjMDAifQ'

    /* Set payload. */
    data.accountAssociation.payload = 'eyJkb21haW4iOiJhcHAubWluaWFwcHMucGFydHkifQ'

    /* Set signature. */
    data.accountAssociation.signature = 'MHhmMDZiNjAwYjk2NTkzYzc4MDBmZTcxYTJkOWFlNDY5NGQ5MGQ5ZTFhOTk1NDE4NzQwNzhjZGFlMjRkNTg4NmUzMzMwZTNkOGVmMGM2YTY4YjQ2MThjNzk4MGQ3NTRhNmI1ZGU4NGI5OGY3YWI5MzYyYzM0MGI2MTVmOTY5YzM2ZjFi'

    /* Initialize frame. */
    data.frame = {}

    /* Set version. */
    data.frame.version = '1'

    /* Set name. */
    data.frame.name = 'FappParty'

    /* Set icon URL. */
    data.frame.iconUrl = 'https://fapp.party/logo.png'

    /* Set splash image URL. */
    data.frame.splashImageUrl = 'https://fapp.party/splash.gif'

    /* Set splash background color. */
    data.frame.splashBackgroundColor = '#21223e'

    /* Set home URL. */
    // NOTE: This MUST match the manifest (payload) domain.
    data.frame.homeUrl = `https://app.${hostname}`

    /* Set webhook URL. */
    data.frame.webhookUrl = 'https://webhook.fapp.party/farcaster'

    /* Set subtitle. */
    data.frame.subtitle = 'New and Noteworthy Mini Apps'

    /* Set description. */
    data.frame.description = `Daily alerts, weekly summaries on the newest and most talked-about Mini Apps you won't want to miss.`

    /* Set screenshot URLs. */
    data.frame.screenshotUrls = [
        'https://fapp.party/screenshot1.webp',
        'https://fapp.party/screenshot2.webp',
        'https://fapp.party/screenshot3.webp',
    ]

    /* Set primary category. */
    data.frame.primaryCategory = 'social'

    /* Set tags. */
    data.frame.tags = [
        'party',
        'banger',
        'rewards',
        'festival',
        'build',
    ]

    /* Set hero image URL. */
    data.frame.heroImageUrl = 'https://fapp.party/poster.webp'

    /* Set tagline. */
    data.frame.tagline = 'New and Noteworthy Mini Apps'

    /* Set open-graph title. */
    data.frame.ogTitle = 'FappParty'

    /* Set open-graph description. */
    data.frame.ogDescription = `Daily alerts, weekly summaries on the newest and most talked-about Mini Apps you won't want to miss.`

    /* Set open-graph image URL. */
    data.frame.ogImageUrl = 'https://fapp.party/poster.webp'

    /* Return response. */
    return new Response(JSON.stringify(data), { headers })
}
