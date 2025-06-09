<template>
    <main class="w-full h-full px-2 pb-3 flex flex-col gap-6 overflow-y-scroll">
		<h1 class="mt-5 text-pretty text-5xl font-semibold tracking-tight text-amber-200 uppercase">
			Notifications
		</h1>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				FOMO (Real-time) Updates
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vel voluptates odit provident consectetur consequatur dolore obcaecati sequi, iure quia!
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				Daily (New Arrival) Updates
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vel voluptates odit provident consectetur consequatur dolore obcaecati sequi, iure quia!
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				Weekly (Reward Pool) Updates
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vel voluptates odit provident consectetur consequatur dolore obcaecati sequi, iure quia!
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				Seasonal (Event &amp; Competition) Updates
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vel voluptates odit provident consectetur consequatur dolore obcaecati sequi, iure quia!
			</p>
		</section>
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
