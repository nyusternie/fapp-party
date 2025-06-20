<template>
    <main v-if="app" @click=viewDetail(app.hostname) class="relative cursor-pointer w-full mt-5 px-2 py-2 flex items-center gap-3 bg-gradient-to-r from-sky-100 to-sky-50 border-2 border-slate-700 rounded-md hover:from-amber-100 hover:to-amber-50">
        <img :src="app.iconUrl" class="size-16 bg-slate-900 border border-slate-700 rounded-md" />

        <div class="w-full flex flex-col items-start flex-1" :class="[ app.heroImageUrl ? 'pr-[120px]' : '' ]">
            <h2 class="text-sky-800 font-bold text-2xl tracking-wide text-left line-clamp-1">
                {{app.appName}}
            </h2>

            <h3 class="text-sky-400 font-bold text-sm tracking-tighter text-left line-clamp-1">
                {{app.tagline || app.hostname}}
            </h3>

            <h3 class="text-sky-600 font-bold text-xs tracking-tighter italic">
                added {{moment.unix(app.createdAt).fromNow()}}
            </h3>
        </div>

        <img v-if="app.heroImageUrl" :src="app.heroImageUrl" class="absolute right-2 flex-0 h-16 border border-slate-700 rounded-md" />
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import { useStore } from '@nanostores/vue'
// import { sdk } from '@farcaster/frame-sdk'
import moment from 'moment'

import $App from '../../stores/app'

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
// const isMiniApp = await sdk.isInMiniApp()

interface IApp {
    appName: string;
    hostname: string;
    tagline: string;
    iconUrl: string;
    heroImageUrl: string;
    createdAt: number;
}

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    app: Object as PropType<IApp>,
})

const App = useStore($App)

const init = async () => {
// console.log('APP CARD (init)', props.app)
}

const viewDetail = async (_hostname: string) => {
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
