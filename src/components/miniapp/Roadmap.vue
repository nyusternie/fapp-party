<template>
    <main class="w-full h-full px-2 pb-3 flex flex-col gap-6 overflow-y-scroll">
		<h1 class="mt-5 text-pretty text-5xl font-semibold tracking-tight text-amber-200 uppercase">
            Roadmap
        </h1>

        <p class="text-slate-300 font-medium text-lg">
            Let's #BUIDL as a community.
            Submit your ideas here to help improve the NEXT PARTY!
        </p>

        <p class="text-slate-300 font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae sunt accusamus dolorum, vero veniam omnis, incidunt sint ea, rerum itaque corporis dolores exercitationem sapiente. Minus ut voluptatibus nulla iste.
        </p>

        <p class="text-slate-300 font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae sunt accusamus dolorum, vero veniam omnis, incidunt sint ea, rerum itaque corporis dolores exercitationem sapiente. Minus ut voluptatibus nulla iste.
        </p>

        <ol class="pl-10 list-decimal text-lg font-medium text-amber-200 leading-9">
            <li>Enable automatic Mini App discovery</li>
            <li>Complete treasury (Solidity) contract</li>
        </ol>
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

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
