<template>
    <main class="w-full h-full px-3 py-3 flex flex-col gap-6 overflow-y-scroll">
        <h1 class="text-7xl font-semibold tracking-tight text-slate-200">
            Apps
        </h1>

        <div v-if="App && App.length > 0">
            <p class="mb-5 text-amber-200">
                Listing of ALL the New &amp; Noteworthy Mini Apps
                <span class="block font-bold">10 PER PAGE↴</span>
            </p>

            <a v-for="app of App" :key="app.hostname" :href="app.homeUrl" class="mt-5 px-3 py-2 flex gap-3 bg-gradient-to-r from-sky-100 to-sky-50 border-2 border-slate-700 rounded-md hover:from-amber-100 hover:to-amber-50">
                <img :src="app.iconUrl" class="size-16 border border-slate-700 rounded-md" />

                <div class="flex flex-col flex-1">
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
            </a>
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
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import moment from 'moment'

import { $App } from '../../stores/app'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const App = useStore($App)

const isShowingMobileMenu = ref(false)

const init = async () => {
    console.log('APPS', $App.get())
}

const openUrl = async (_url) => {
    await sdk.actions.openUrl(_url)
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
