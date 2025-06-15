<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-8 overflow-y-scroll">
		<button @click="enableNotif()" class="group cursor-pointer w-full mt-5 px-5 py-3 flex flex-col justify-center items-center bg-fuchsia-800 border-2 hover:bg-fuchsia-200 border-amber-900 rounded-xl">
            <span class="inline-flex items-center gap-2 font-bold text-2xl text-center uppercase text-amber-300 group-hover:text-fuchsia-800">
                Enable Notifications
            </span>
        </button>

		<section v-if="notif" class="flex flex-col gap-6">
			<SettingToggle v-if="notif.fomo" :title="notif.fomo.title" :summary="notif.fomo.summary" />
			<SettingToggle v-if="notif.daily" :title="notif.daily.title" :summary="notif.daily.summary" />
			<SettingToggle v-if="notif.weekly" :title="notif.weekly.title" :summary="notif.weekly.summary" />
			<SettingToggle v-if="notif.seasonal" :title="notif.seasonal.title" :summary="notif.seasonal.summary" />
		</section>

		<section class="-mt-6 px-6">
			<a href="/season/1" class="block text-fuchsia-300 font-bold tracking-wider">
				<span class="text-lg uppercase">Season One:</span>
				<span class="-mt-1 block text-fuchsia-200 font-extrabold text-2xl hover:underline">The Chronicles of Warplet</span>
			</a>
		</section>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { sdk } from '@farcaster/frame-sdk'

import $System from '../../../stores/system'
import SettingToggle from './SettingToggle.vue'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

type Notif = {
	fomo?: Option;
	daily?: Option;
	weekly?: Option;
	seasonal?: Option;
}

type Option = {
	title: string;
	summary: string;
}

const System = useStore($System)

const notif = ref<Notif>()

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
const isMiniApp = await sdk.isInMiniApp()

const init = async () => {
    console.log('SYSTEM', $System.get())

	/* Initialize notif. */
	notif.value = {}

	/* Add FOMO. */
	notif.value.fomo = {
		title: `🚨 FOMO Alerts`,
		summary: `Receive REAL-TIME updates as NEW mini apps are added to the network. Be the FIRST to know!`,
	}

	/* Add Daily. */
	notif.value.daily = {
		title: `📆 Daily Activity Summaries`,
		summary: `Receive a daily summary of ALL the newest mini app arrivals—registered to the network in the last 24 hours.`,
	}

	/* Add Weekly. */
	notif.value.weekly = {
		title: `🏆 Weekly BANGER! Results`,
		summary: `Each and every Sunday @ 11:59 UTC, the Reward Pools are emptied and WINNERS are awarded from the previous week.`,
	}

	/* Add Seasonal. */
	notif.value.seasonal = {
		title: `🎉 Seasonal Festival`,
		summary: `Our team is busy-busy managing events &amp; competitions throughout the year—plus ONE week-long festival EVERY season!`,
	}
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
