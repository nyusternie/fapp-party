<template>
    <main class="w-full h-full px-2 pb-7 flex-1 flex-col overflow-y-scroll overflow-x-hidden">
        TEST UI-3
        <div v-if="App && App.length > 0">
            BEFORE CARD
            <!-- SPOTLIGHT MINI APPS-->
            <SpotlightCard :spotlight="spotlight" />
            AFTER CARD

            <h3 class="text-center my-5 text-rose-200 font-bold text-lg tracking-wider">
                <span class="text-rose-300 font-extrabold text-xl">TOP3 <a href="/bangers">Bangers!</a></span> Since Yesterday<span class="text-3xl">↴</span>
            </h3>

            <!-- FEATURED MINI APPS-->
            <AppCard v-for="app of featured" :key="app.hostname" :app="app" />

            <h3 class="text-center my-5 text-rose-200 font-bold text-lg tracking-wider">
                New &amp; Noteworthy <span class="text-rose-300 font-extrabold text-xl">LIVE! Feed<span class="text-3xl">↴</span></span>
            </h3>

            <!-- ABOVE THE FOLD MINI APPS -->
            <AppCard v-for="app of aboveTheFold" :key="app.hostname" :app="app" />

            <!-- SPONSORED MINI APPS-->
            <SponsoredCard :sponsored="sponsored" />

            <!-- BELOW THE FOLD MINI APPS -->
            <AppCard v-for="app of belowTheFold" :key="app.hostname" :app="app" />

            <section class="my-5 w-full px-10 grid grid-cols-2 gap-0.5">
                <a href="#" class="opacity-30 cursor-not-allowed group px-5 py-2 flex justify-center items-center bg-amber-100 rounded-lg rounded-r-none">
                    <span span class="flex flex-row items-center gap-2 text-amber-500 font-bold text-2xl uppercase">
                        <svg class="size-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>

                        Newer
                    </span>
                </a>

                <a href="/apps/page2" class="group px-5 py-2 flex flex-row justify-center items-center bg-amber-100 rounded-lg rounded-l-none hover:bg-amber-600">
                    <span span class="flex flex-row items-center gap-2 text-amber-500 font-bold text-2xl uppercase group-hover:text-amber-50">
                        Older

                        <svg class="size-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </span>
                </a>
            </section>
        </div>
        <div v-else class="p-10">
            <h2 class="text-slate-200 font-bold text-2xl tracking-widest">
                now loading mini apps...
            </h2>
        </div>

    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { computed, onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { sdk } from '@farcaster/frame-sdk'
import moment from 'moment'

import $App from '../../stores/app'
import AppCard from './AppCard.vue'
import SpotlightCard from './SpotlightCard.vue'
import SponsoredCard from './SponsoredCard.vue'

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
const isMiniApp = await sdk.isInMiniApp()

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    cursor: String,
})

const App = useStore($App)

const spotlight = ref()
const sponsored = ref()

/* Initialize (compute) handlers. */
let featured
let aboveTheFold
let belowTheFold

featured = computed(() => $App.get().slice(0, 3))
aboveTheFold = computed(() => $App.get().slice(3, 16))
belowTheFold = computed(() => $App.get().slice(16, 18))

const unbindListener = $App.subscribe((value, oldValue) => {
    // console.log(`$APP value changed from ${oldValue ? JSON.stringify(oldValue[0]) : 'n/a'} to ${value ? JSON.stringify(value[0]) : 'no value'}`)

    /* Update app lists to latest. */
    featured = computed(() => $App.get().slice(0, 3))
    aboveTheFold = computed(() => $App.get().slice(3, 16))
    belowTheFold = computed(() => $App.get().slice(16, 18))
})

const init = async () => {
    console.log('APPS', $App.get())

    spotlight.value = {
        appName: 'Paragraph',
        hostname: 'paragraph.com',
        homeUrl: 'https://paragraph.com/home?frame=true',
        iconUrl: 'https://paragraph.com/branding/v2/logomark.png',
        createdAt: 1749417098,
    }

    sponsored.value = {
        appName: 'frames in blue',
        hostname: 'frames-in-blue.vercel.app',
        homeUrl: 'https://frames-in-blue.vercel.app',
        iconUrl: 'https://frames-in-blue.vercel.app/icon.png',
        createdAt: 1749419076,
    }
}

const viewDetail = async (_hostname) => {
    document.location = '/app/' + encodeURIComponent(_hostname)
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
