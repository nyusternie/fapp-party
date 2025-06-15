<template>
    <footer class="w-full h-[45px] grid grid-cols-4 gap-0.5 justify-between bg-slate-900 border border-t-stone-700 overflow-hidden">
        <a href="/apps" @click="addHaptic()" class="group w-full flex flex-col justify-center items-center bg-stone-700 hover:bg-stone-200">
            <Squares2X2Icon class="size-6 text-fuchsia-100 font-bold text-lg tracking-wider uppercase group-hover:text-fuchsia-900" />
            <span class="uppercase text-xs font-bold text-fuchsia-300 tracking-wider">apps</span>
        </a>

        <a href="/search" @click="addHaptic()" class="group w-full flex flex-col justify-center items-center bg-stone-700 hover:bg-stone-200">
            <MagnifyingGlassCircleIcon class="size-6 text-fuchsia-100 font-bold text-lg tracking-wider uppercase group-hover:text-fuchsia-900" />
            <span class="uppercase text-xs font-bold text-fuchsia-300 tracking-wider">search</span>
        </a>

        <a href="/rewards" @click="addHaptic()" class="group w-full flex flex-col justify-center items-center bg-stone-700 hover:bg-stone-200">
            <TrophyIcon class="size-6 text-fuchsia-100 font-bold text-lg tracking-wider uppercase group-hover:text-fuchsia-900" />
            <span class="uppercase text-xs font-bold text-fuchsia-300 tracking-wider">rewards</span>
        </a>

        <a href="/help" @click="addHaptic()" class="group w-full flex flex-col justify-center items-center bg-stone-700 hover:bg-stone-200">
            <InformationCircleIcon class="size-6 text-fuchsia-100 font-bold text-lg tracking-wider uppercase group-hover:text-fuchsia-900" />
            <span class="uppercase text-xs font-bold text-fuchsia-300 tracking-wider">help</span>
        </a>
    </footer>
</template>

<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'
import { sdk } from '@farcaster/frame-sdk'
import {
    InformationCircleIcon,
    MagnifyingGlassCircleIcon,
    Squares2X2Icon,
    TrophyIcon,
} from '@heroicons/vue/20/solid'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const addHaptic = async () => {
    await sdk.haptics.impactOccurred('medium')
}

// const addNotif = async () => {
//     await sdk.haptics.notificationOccurred('success')
// }

// const addSelect = async () => {
//     await sdk.haptics.selectionChanged()
// }

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
