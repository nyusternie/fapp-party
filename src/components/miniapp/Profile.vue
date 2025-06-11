<template>
    <main class="px-2 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			My Profile
		</h1>

        <a href="/notif" class="text-blue-300 font-bold text-2xl tracking-tighter hover:underline">
            Manage Your Notifications
        </a>

        <pre class="text-slate-200 font-bold text-xs tracking-tighter">{{debug}}</pre>
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

import $Profile, { init as initProfile } from '../../stores/profile'

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
Cum sapiente esse nisi
eum voluptas.
Laboriosam, quam, repellendus
unde nulla quos
necessitatibus atque eum
nesciunt neque enim
laborum ad
consectetur commodi.`

    /* Initialize profile. */
    // await initProfile()

    /* Validate mini app. */
    if (isMiniApp) {
        debug.value = `please wait a moment...`

        /* Request user. */
        const context = await sdk.context

        /* Request quick auth. */
        debug.value = JSON.stringify(context, null, 2)
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
