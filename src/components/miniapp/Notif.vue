<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-8 overflow-y-scroll">
		<button @click="enableNotif()" class="group cursor-pointer w-full mt-5 px-5 py-3 flex flex-col justify-center items-center bg-fuchsia-800 border-2 hover:bg-fuchsia-200 border-amber-900 rounded-xl">
            <span class="inline-flex items-center gap-2 font-bold text-2xl text-center uppercase text-amber-300 group-hover:text-fuchsia-800">
                Enable Notifications
            </span>
        </button>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				🚨 FOMO Alerts
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Receive REAL-TIME updates as NEW mini apps are added to the network.
				Be the FIRST to know!
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				📆 Daily Activity Summaries
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Receive a daily summary of ALL the newest mini app arrivals—registered to the network in the last 24 hours.
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				🏆 Weekly BANGER! Results
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Each and every Sunday @ 11:59 UTC, the <a href="/rewards" class="text-bold hover:underline">Reward Pools</a> are emptied and WINNERS are awarded from the previous week.
			</p>
		</section>

		<section>
			<h2 class="text-slate-100 font-bold text-2xl tracking-wider">
				🎉 Seasonal Festival
			</h2>

			<p class="text-slate-300 font-medium text-lg">
				Our team is busy-busy managing events &amp; competitions throughout the year—plus ONE week-long festival EVERY season!

				<a href="/season/1" class="block text-fuchsia-300 font-bold tracking-wider">
					<span class="text-lg uppercase">Season One:</span>
					<span class="-mt-1.5 block text-fuchsia-200 font-extrabold text-2xl hover:underline">The Chronicles of Warplet</span>
				</a>
			</p>
		</section>
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

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
const isMiniApp = await sdk.isInMiniApp()

const init = async () => {
    console.log('SYSTEM', $System.get())
}

const enableNotif = async () => {
	if (isMiniApp) {
		await sdk.actions.addMiniApp()
	}
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
