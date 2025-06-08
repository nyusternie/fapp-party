<template>
    <main class="px-3 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
        <h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
            Apps
        </h1>

        <p>
            Listing of ALL the newest Mini Apps.
            10 PER PAGE
        </p>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const isShowingMobileMenu = ref(false)

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
