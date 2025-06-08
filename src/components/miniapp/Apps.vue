<template>
    <main class="px-3 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
        <h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-slate-200 sm:text-7xl">
            Apps
        </h1>

        <p class="text-slate-200">
            Listing of ALL the newest Mini Apps.
            10 PER PAGE
        </p>

        <div v-if="App">
<pre v-for="app of App" :key="app.hostname" class="text-slate-200">Hostname: {{app.hostname}}</pre>
        </div>

    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

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
