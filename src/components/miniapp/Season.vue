<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll">
        <header class="mt-5">
            <h3 class="text-pretty text-xl font-semibold tracking-tight text-amber-300 uppercase">
                Season One
            </h3>

            <h1 class="text-pretty text-4xl font-semibold tracking-tight text-amber-200 uppercase">
                The Chronicles of Warplet
            </h1>
        </header>

        <p class="text-slate-300 font-light text-xl/9">
            In the bustling, digital realm of the newly discovered Based Peninsula, there existed a wallet unlike any other.
            <span class="text-rose-300 font-bold">WARPLET was her name.</span>
            This wasn't your average, boring wallet.
            NO! Warplet was a thrill-seeker, a risk-taker, and a master of decentralized finance, or DeFi as the cool kids called it.
        </p>

        <p class="text-slate-300 font-light text-xl/9">
            Warplet's favorite past-time?
            Why, that would be diving headfirst into the volatile, exhilarating world of crypto trading, lending, and borrowing.
            With a keen eye for opportunity and a heart that pounded with the thrill of the market, Warplet was a force to be reckoned with.
        </p>

        <p class="text-slate-300 font-light text-xl/9">
            Her digital tendrils reached into every corner of the DeFi ecosystem, from liquidity pools to yield farming—always on the hunt for the next big score.
            Warplet's adventures were legendary, and her balance sheet?
            Well, that was a rollercoaster ride of EP!C proportions.
        </p>
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { sdk } from '@farcaster/frame-sdk'

import $System from '../../stores/system'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const System = useStore($System)

const init = async () => {
    console.log('SYSTEM', $System.get())
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
