<template>
    <footer class="w-full h-[60px] grid grid-cols-3 gap-0.5 justify-between bg-slate-900 overflow-hidden">
        <a href="/profile" class="group w-full flex justify-center items-center bg-amber-200 hover:bg-amber-700">
            <span class="text-amber-700 font-bold text-xl tracking-wider uppercase group-hover:text-amber-200">
                Profile
            </span>
        </a>

        <a href="/sponsors" class="group w-full flex justify-center items-center bg-amber-200 hover:bg-amber-700">
            <span class="text-amber-700 font-bold text-xl tracking-wider uppercase group-hover:text-amber-200">
                Sponsors
            </span>
        </a>

        <a href="/spotlight" class="group w-full flex justify-center items-center bg-amber-200 hover:bg-amber-700">
            <span class="text-amber-700 font-bold text-xl tracking-wider uppercase group-hover:text-amber-200">
                Spotlight
            </span>
        </a>
    </footer>
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
