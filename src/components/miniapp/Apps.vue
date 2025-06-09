<template>
    <main class="w-full h-full px-2 pb-10 flex flex-col gap-6 overflow-y-scroll">
        <!-- <h1 class="text-7xl font-semibold tracking-tight text-slate-200">
            Apps
        </h1> -->

        <div v-if="App && App.length > 0">
            <ClientOnly>
                <button v-if="spotlight" @click="openUrl(spotlight.homeUrl)" class="cursor-pointer w-full mt-2 mb-5 px-2 py-10 flex gap-3 bg-gradient-to-r from-lime-100 to-lime-50 border-2 border-slate-700 rounded-md hover:from-amber-100 hover:to-amber-50">
                    <img :src="spotlight.iconUrl" class="size-24 border border-slate-700 rounded-md" />

                    <div class="w-full flex flex-col items-start flex-1">
                        <h2 class="text-sky-800 font-bold text-2xl tracking-wider">
                            {{spotlight.appName}}
                        </h2>

                        <h3 class="-mt-1 text-sky-400 font-bold text-sm tracking-tighter italic">
                            {{spotlight.hostname}}
                        </h3>

                        <h3 class="text-sky-600 font-bold text-base tracking-tighter italic">
                            added {{moment.unix(spotlight.createdAt).fromNow()}}
                        </h3>
                    </div>
                </button>
            </ClientOnly>

            <p class="mb-5 text-amber-200">
                Listing of ALL the New &amp; Noteworthy Mini Apps
                <span class="block font-bold">10 PER PAGE↴</span>
            </p>

            <ClientOnly>
                <button v-for="app of aboveTheFold" :key="app.hostname" @click=openUrl(app.homeUrl) class="cursor-pointer w-full mt-5 px-2 py-2 flex gap-3 bg-gradient-to-r from-sky-100 to-sky-50 border-2 border-slate-700 rounded-md hover:from-amber-100 hover:to-amber-50">
                    <img :src="app.iconUrl" class="size-16 border border-slate-700 rounded-md" />

                    <div class="w-full flex flex-col items-start flex-1">
                        <h2 class="text-sky-800 font-bold text-xl tracking-tighter">
                            {{app.appName}}
                        </h2>

                        <h3 class="-mt-1 text-sky-400 font-bold text-xs tracking-tighter italic">
                            {{app.hostname}}
                        </h3>

                        <h3 class="text-sky-600 font-bold text-sm tracking-tighter italic">
                            added {{moment.unix(app.createdAt).fromNow()}}
                        </h3>
                    </div>

                    <img v-if="app.heroImageUrl" :src="app.heroImageUrl" class="h-16 border border-slate-700 rounded-md" />
                </button>
            </ClientOnly>

            <ClientOnly>
                <button v-if="sponsored" @click="openUrl(sponsored.homeUrl)" class="cursor-pointer w-full my-5 px-2 py-10 flex gap-3 bg-gradient-to-r from-fuchsia-300 to-fuchsia-100 border-2 border-fuchsia-700 rounded-md hover:from-amber-100 hover:to-amber-50">
                    <img :src="sponsored.iconUrl" class="size-24 border border-slate-700 rounded-md" />

                    <div class="w-full flex flex-col items-start flex-1">
                        <h2 class="text-sky-800 font-bold text-3xl tracking-wider">
                            {{sponsored.appName}}
                        </h2>

                        <h3 class="-mt-1 text-sky-400 font-bold text-sm tracking-tighter italic">
                            {{sponsored.hostname}}
                        </h3>

                        <h3 class="text-sky-600 font-bold text-base tracking-tighter italic">
                            added {{moment.unix(sponsored.createdAt).fromNow()}}
                        </h3>
                    </div>

                    <img v-if="sponsored.heroImageUrl" :src="sponsored.heroImageUrl" class="h-16 border border-slate-700 rounded-md" />
                </button>
            </ClientOnly>



            <ClientOnly>
                <button v-for="app of belowTheFold" :key="app.hostname" @click=openUrl(app.homeUrl) class="cursor-pointer w-full mt-5 px-2 py-2 flex gap-3 bg-gradient-to-r from-sky-100 to-sky-50 border-2 border-slate-700 rounded-md hover:from-amber-100 hover:to-amber-50">
                    <img :src="app.iconUrl" class="size-16 border border-slate-700 rounded-md" />

                    <div class="w-full flex flex-col items-start flex-1">
                        <h2 class="text-sky-800 font-bold text-xl tracking-tighter">
                            {{app.appName}}
                        </h2>

                        <h3 class="-mt-1 text-sky-400 font-bold text-xs tracking-tighter italic">
                            {{app.hostname}}
                        </h3>

                        <h3 class="text-sky-600 font-bold text-sm tracking-tighter italic">
                            added {{moment.unix(app.createdAt).fromNow()}}
                        </h3>
                    </div>

                    <img v-if="app.heroImageUrl" :src="app.heroImageUrl" class="h-16 border border-slate-700 rounded-md" />
                </button>
            </ClientOnly>
        </div>
        <div v-else>
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

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
const isMiniApp = await sdk.isInMiniApp()

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const App = useStore($App)

const spotlight = ref()
const sponsored = ref()

const aboveTheFold = computed(() => $App.get().slice(0, 8))
const belowTheFold = computed(() => $App.get().slice(8, 10))

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

const openUrl = async (_url) => {
    /* Validate mini app. */
    if (isMiniApp) {
        await sdk.actions.openUrl('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
        // window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + _url)
    } else {
        window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
    }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
