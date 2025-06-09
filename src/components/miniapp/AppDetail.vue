<template>
    <main class="w-full h-full px-2 pb-3 flex flex-col gap-4 overflow-y-scroll">
        <section v-if="appDetails.appName" class="mt-5 flex flex-col gap-3">
            <div class="flex flex-row gap-3">
                <img
                    class="size-32 mr-2 border-4 border-amber-500 rounded-2xl shadow-md"
                    :src="appDetails.iconUrl"
                />

                <div class="flex flex-col gap-3">
                    <h1 class="text-pretty text-6xl font-semibold tracking-tight text-amber-200 uppercase">
                        {{appDetails.appName}}
                    </h1>

                    <h3 class="-mt-4 pl-2 text-lg font-semibold tracking-tight text-amber-400 line-clamp-1">
                        {{appDetails.subtitle}}
                    </h3>
                </div>
            </div>

            <button class="group cursor-pointer w-full px-5 py-3 flex justify-center items-center bg-blue-800 border-2 hover:bg-blue-400 border-amber-900 rounded-xl" @click="openUrl(props.appid)">
                <span class="inline-flex items-center gap-3 font-bold text-2xl text-blue-300 group-hover:text-blue-800">
                    LAUNCH MINI APP

                    <svg class="size-5 text-amber-600 group-hover:text-amber-200" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                    </svg>
                </span>
            </button>
        </section>

        <div v-if="appDetails.fid" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                FID
            </span>

            <span class="col-span-3 text-amber-200 font-bold">
                {{appDetails.fid}}
            </span>
        </div>

        <div v-if="appDetails.account" class="grid grid-cols-4 gap-3">
            <span class="col-span-4 text-slate-200 font-medium uppercase">
                Account
            </span>

            <span class="col-span-4 text-amber-200 font-bold text-ellipsis">
                {{appDetails.account}}
            </span>
        </div>

        <div v-if="appDetails.version" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                Version
            </span>

            <span class="col-span-3 text-amber-200 font-bold text-ellipsis">
                {{appDetails.version}}
            </span>
        </div>

        <div v-if="appDetails.description" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                Description
            </span>

            <p class="col-span-3 text-amber-200 font-bold text-ellipsis">
                {{appDetails.description}}
            </p>
        </div>

        <div v-if="appDetails.primaryCategory" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                Category
            </span>

            <span class="col-span-3 text-amber-200 font-bold text-ellipsis">
                {{appDetails.primaryCategory}}
            </span>
        </div>

        <div v-if="appDetails.tags" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                Tags
            </span>

            <span class="col-span-3 text-amber-200 font-bold text-ellipsis">
                {{appDetails.tags}}
            </span>
        </div>

        <div v-if="appDetails.createdAt" class="grid grid-cols-4 gap-3">
            <span class="text-slate-200 font-medium uppercase">
                Listing Date
            </span>

            <span class="col-span-3 text-amber-200 font-bold text-ellipsis">
                {{moment.unix(appDetails.createdAt).format('llll')}}
            </span>
        </div>

        <img
            v-if="appDetails.heroImageUrl"
            class="w-1/2 border-4 border-amber-500 rounded-2xl shadow-md aspect-[1200/630]"
            :src="appDetails.heroImageUrl"
        />

        <section v-if="appDetails.screenshotUrl1">
            <h2>
                Screenshots
            </h2>

            <div>
                screenshotUrl1
            </div>

            <div>
                screenshotUrl2
            </div>

            <div>
                screenshotUrl3
            </div>
        </section>

        <!-- <pre class="text-slate-300 font-medium text-xs">{{appDetails}}</pre> -->
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import moment from 'moment'

import $App, { getDetailsFor } from '../../stores/app'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    appid: String,
})

const App = useStore($App)

const appDetails = ref({})

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
