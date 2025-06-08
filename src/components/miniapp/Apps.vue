<template>
    <main class="px-3 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
        <h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-slate-200 sm:text-7xl">
            Apps
        </h1>

        <div v-if="App && App.length > 0">
            <p class="mb-5 text-amber-200">
                Listing of ALL the New &amp; Noteworthy Mini Apps
                <span class="block font-bold">10 PER PAGE↴</span>
            </p>

            <section v-for="app of App" :key="app.hostname" class="mt-5 flex flex-col">
                <h2 class="text-rose-200 font-bold text-xl tracking-tighter">
                    {{app.appName}}
                </h2>

                <h3 class="text-rose-300 font-bold text-sm tracking-tighter italic">
                    {{app.hostname}}
                </h3>

                <h3 class="text-rose-300 font-bold text-sm tracking-tighter italic">
                    {{moment.unix(app.createdAt).fromNow()}}
                </h3>
            </section>
        </div>
        <div v-else>
            <h2 class="text-slate-200 font-bold text-2xl tracking-widest">
                now loading mini apps...
            </h2>
        </div>

    </main>
</template>

<script setup lang="ts">
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

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
