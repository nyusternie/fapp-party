<template>
    <main class="px-2 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			App: {{props.appid}}
		</h1>

        <button class="cursor-pointer text-white font-bold text-2xl" @click="openUrl(props.appid)">
            LAUNCH MINI APP
        </button>

		<pre class="text-slate-300 font-medium text-xs">{{appDetails}}</pre>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import $App, { getDetailsFor } from '../../stores/app'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    appid: String,
})

const App = useStore($App)

const appDetails = ref()

const init = async () => {
    appDetails.value = await getDetailsFor('framedl.xyz')
    console.log('APP DETAILS', appDetails.value)
}

const openUrl = async (_appid) => {
    /* Build URL. */
    const url = 'https://' + _appid

    /* Open external app. */
    window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + url)
    // /* Validate mini app. */
    // if (isMiniApp) {
    //     await sdk.actions.openUrl('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
    //     // window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + _url)
    // } else {
    //     window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
    // }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
