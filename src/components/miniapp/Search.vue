<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll">
		<h1 class="mt-5 text-pretty text-5xl font-semibold tracking-tight text-amber-200 uppercase">
			Search
		</h1>

		<p class="text-slate-300 font-medium text-lg">
			These are community SPONSORED Mini Apps that fund the Party Treasury—the primary funding source for ALL <a href="/rewards" class="text-lg font-bold text-blue-500 hover:text-blue-400 hover:underline">Reward Pools</a> and community events.
		</p>
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
