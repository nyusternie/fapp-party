<template>
    <main v-if="sponsored" @click="viewDetail(sponsored.hostname)" class="cursor-pointer w-full my-8 px-3 py-3 flex gap-3 bg-gradient-to-r from-stone-200 to-stone-50 border-4 border-stone-300 rounded-md hover:from-stone-800 hover:to-stone-600">
        <img :src="sponsored.iconUrl" class="size-32 border-2 border-stone-500 rounded-md" />

        <div class="w-full flex flex-col items-center flex-1">
            <h2 class="text-sky-800 font-bold text-3xl tracking-wider">
                {{sponsored.appName}}
            </h2>

            <h3 class="text-sky-400 font-bold text-sm tracking-tighter">
                {{sponsored.tagline || sponsored.hostname}}
            </h3>

            <!-- <section class="mt-3 isolate flex -space-x-2 overflow-hidden">
                <img class="relative z-30 inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="relative z-20 inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="relative z-10 inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                <img class="relative z-0 inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </section> -->
        </div>

        <img v-if="sponsored.heroImageUrl" :src="sponsored.heroImageUrl" class="h-16 border border-slate-700 rounded-md" />
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
    sponsored: Object as PropType<IApp>,
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
