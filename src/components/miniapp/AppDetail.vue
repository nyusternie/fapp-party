<template>
    <main class="w-full h-full px-2 pb-3 flex flex-col gap-4 overflow-y-scroll">
        <header v-if="appDetails.appName" class="mt-5 flex flex-col gap-3">
            <div class="flex flex-row gap-2">
                <img
                    class="size-28 border-2 border-amber-400 rounded-2xl shadow-md"
                    :src="appDetails.iconUrl"
                />

                <div class="flex flex-col gap-3">
                    <h1 class="text-pretty text-4xl font-semibold tracking-tight text-amber-200 uppercase">
                        {{appDetails.appName}}
                    </h1>

                    <h3 class="-mt-4 pl-1 text-lg font-semibold tracking-tight text-amber-400 line-clamp-1">
                        {{appDetails.subtitle}}
                    </h3>
                </div>
            </div>

            <button class="group cursor-pointer w-full mt-2 px-5 py-3 flex justify-center items-center bg-blue-800 border-2 hover:bg-blue-400 border-amber-900 rounded-xl" @click="openUrl(props.appid)">
                <span class="inline-flex items-center gap-3 font-bold text-2xl uppercase text-amber-300 group-hover:text-amber-200">
                    Launch Mini App

                    <svg class="size-5 text-amber-400 group-hover:text-amber-200" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                    </svg>
                </span>
            </button>
        </header>

        <p v-if="appDetails.description" class="px-3 py-2 text-stone-200 font-light text-xl/9 tracking-wider">
            {{appDetails.description}}
        </p>

        <div v-if="appDetails.primaryCategory" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                Category
            </span>

            <span class="col-span-2 text-amber-200 font-bold">
                {{appDetails.primaryCategory}}
            </span>
        </div>

        <section v-if="appDetails.tags" class="grid grid-cols-3 gap-5">
            <h3 class="text-slate-200 font-medium uppercase text-right">
                Tags
            </h3>

            <div class="flex flex-col gap-1 col-span-2">
                <span v-for="tag of appDetails.tags.split(',')" :key="tag" class="text-amber-200 font-bold">
                    {{tag}}
                </span>
            </div>
        </section>

        <section v-if="appDetails.createdAt" class="grid grid-cols-3 gap-5">
            <h3 class="text-slate-200 font-medium uppercase text-right">
                Listing Date
            </h3>

            <div class="col-span-2">
                <span class="text-amber-200 font-bold">
                    {{moment.unix(appDetails.createdAt).format('llll')}}
                </span>

                <span class="block -mt-1 text-amber-400 font-medium text-xs">
                    ( approx {{moment.unix(appDetails.createdAt).fromNow()}} )
                </span>
            </div>

        </section>

        <!-- DIVIDER -->
        <div class="my-5 w-full border-t border-rose-300" />
        <!-- DIVIDER -->

        <section class="flex flex-col gap-5">
            <div v-if="appDetails.fid" class="grid grid-cols-1 gap-1">
                <span class="text-center text-slate-200 font-medium uppercase">
                    {{appDetails.appName}} Creator
                </span>

                <span class="text-center text-amber-200 font-bold text-2xl tracking-wider text-ellipsis">
                    {{appDetails.fid}}
                </span>
            </div>

            <div v-if="appDetails.account" class="grid grid-cols-1 gap-1">
                <span class="text-center text-slate-200 font-medium uppercase">
                    Sponsorship Account
                </span>

                <a :href="'https://address.vision/' + appDetails.account" target="_blank" class="text-center text-blue-200 font-bold tracking-tighter text-ellipsis hover:text-blue-100 hover:underline">
                    {{appDetails.account}}
                </a>
            </div>
        </section>

        <!-- DIVIDER -->
        <div class="my-5 w-full border-t border-rose-300" />
        <!-- DIVIDER -->

        <img
            v-if="appDetails.heroImageUrl"
            class="w-2/3 border-4 border-amber-500 rounded-2xl shadow-md aspect-[1200/630]"
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
    appDetails.value = await getDetailsFor(props.appid)
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
