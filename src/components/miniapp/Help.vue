<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden">
		<h1 class="mt-5 text-pretty text-5xl font-semibold tracking-tight text-amber-200 uppercase">
			Help Desk
		</h1>

		<p class="text-slate-300 font-medium text-lg/9 text-center">
			Need immediate assistance?
			<br />Reach out directly to BDFL
			<button @click="viewShomari" class="cursor-pointer px-2 py-0 mx-1 inline-flex text-sky-800 bg-sky-300 border border-sky-500 rounded-xl hover:bg-sky-900 hover:text-sky-100">
				shomari.eth
			</button>
			for priority support.
		</p>

		<small class="-mt-6 text-center text-sm font-medium text-rose-200">
			or simply give a <span @click="viewShomari" class="cursor-pointer text-base font-bold text-rose-300 hover:text-rose-200 hover:underline">follow</span>—he's only got like 55 😭
		</small>

		<h3 class="mt-2 text-xl font-medium text-stone-300 tracking-wider uppercase">
			Recommended Links
		</h3>

		<ul class="-mt-4 pl-10 leading-[50px]">
			<li>
				<a href="/roadmap" class="text-2xl font-medium text-amber-200 tracking-wider hover:text-amber-100 hover:underline">
					↳ Our Roadmap
				</a>
			</li>

			<li>
				<a href="https://docs.fapp.party" target="_blank" class="text-2xl font-medium text-amber-200 tracking-wider hover:text-amber-100 hover:underline">
					↳ ReadTheDocs
				</a>
			</li>

			<li>
				<a href="/transparency" class="text-2xl font-medium text-amber-200 tracking-wider hover:text-amber-100 hover:underline">
					↳ Transparency
				</a>
			</li>
		</ul>
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

const viewShomari = async () => {
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
