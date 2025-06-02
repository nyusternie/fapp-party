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

<template>
    <header class="h-[100px] bg-slate-800 overflow-hidden">
        <div class="w-full h-full flex justify-center items-center border-4 border-rose-500">
            <h1 class="text-sky-700 font-bold text-3xl">
                MINI APP HEADER
            </h1>

            <!--  -->
        </div>
    </header>
</template>
