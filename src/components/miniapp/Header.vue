<template>
    <header class="w-full h-[60px] flex flex-row gap-3 justify-between bg-slate-900 overflow-hidden">
        <div class="w-full h-full flex justify-center items-center border-4 border-rose-500">
            <h1 class="text-sky-200 font-bold text-2xl">
                PARTY CENTER
            </h1>

        </div>

        <a href="/notif" class="group w-[75px] flex justify-center items-center bg-amber-200 hover:bg-amber-700">
            <svg class="p-3 text-amber-700 font-bold text-lg tracking-wider uppercase group-hover:text-amber-200" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"></path>
            </svg>
        </a>

        <a href="/profile" class="group w-[75px] flex justify-center items-center bg-amber-200 hover:bg-amber-700">
            <svg class="p-3 text-amber-700 font-bold text-lg tracking-wider uppercase group-hover:text-amber-200" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
            </svg>
        </a>
    </header>
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
