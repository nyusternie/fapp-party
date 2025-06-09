<template>
    <main class="w-full h-full px-2 pb-3 flex flex-col gap-6 overflow-y-scroll">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			Help Center
		</h1>

		<p class="text-slate-300 font-medium text-lg">
			Need help?
			Reach out directly to
			<button @click="openShomari" class="group cursor-pointer px-2 py-0 inline-flex flex-col items-center text-sky-800 bg-sky-300 border border-sky-500 rounded-xl hover:bg-sky-900 hover:text-sky-100">
				shomari.eth
				<span class="-mt-2 block text-xs text-sky-700 tracking-widest group-hover:text-sky-200">BDFL</span>
			</button>
			for immediate assistance.
		</p>

		<ul class="pl-10 list-disc">
			<li>
				<a href="/roadmap" class="text-xl font-medium text-amber-200 tracking-wider hover:text-amber-100 hover:underline">
					View Our Official Roadmap
				</a>
			</li>
		</ul>

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

const openShomari = async () => {
	/* Set FID. */
	const fid = 870594

	/* Open profile. */
	await sdk.actions.viewProfile({ fid })
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
