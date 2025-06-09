<template>
    <main class="px-3 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			My Profile
		</h1>

		<p class="text-slate-200 font-bold text-2xl tracking-widest">
			TBD
		</p>

        <a href="/notif" class="text-blue-300 font-bold text-2xl tracking-tighter hover:underline">
            Manage Your Notifications
        </a>

        <pre class="text-slate-200 font-bold tracking-widest">{{debug}}</pre>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { sdk } from '@farcaster/frame-sdk'

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
const isMiniApp = await sdk.isInMiniApp()

import { $Profile, quickAuth } from '../../stores/profile'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const Profile = useStore($Profile)

const debug = ref()

const init = async () => {
    console.log('PROFILE', $Profile.get())

    debug.value = `Lorem ipsum dolor sit amet
consectetur adipisicing elit.
Cum sapiente esse nisi eum voluptas.
Laboriosam, quam, repellendus
unde nulla quos
necessitatibus atque eum
nesciunt neque enim laborum ad
consectetur commodi.`

    /* Validate mini app. */
    if (isMiniApp) {
        const response = await quickAuth()
console.log('QUICK AUTH', response)
        /* Request quick auth. */
        debug.value = JSON.stringify(response)
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
