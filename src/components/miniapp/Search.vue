<template>
    <main class="px-2 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">

		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			Search
		</h1>

		<p>
			These are community SPONSORED Mini Apps that fund the Party Treasury—the primary funding source for ALL <a href="/rewards" class="text-lg font-bold text-blue-500 hover:text-blue-400 hover:underline">Reward Pools</a> and community events.
		</p>

		<!-- <section>
			<h3>
				IMPORTANT NOTE:
			</h3>

			<p>

				5% of staked assets are non-refundable.
				These funds are considered a Tribute to the Party and are utilized to facilitate event activities for the community.
			</p>
		</section> -->
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
