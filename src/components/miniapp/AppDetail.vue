<template>
    <main class="px-2 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			App: {{props.appid}}
		</h1>

        <button class="cursor-pointer text-white" @click="openUrl(props.appid)">
            LAUNCH MINI APP
        </button>

		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti repudiandae voluptas recusandae, doloremque dignissimos dicta qui quod beatae perferendis, a maxime explicabo tempore optio? Atque reprehenderit voluptas excepturi quia iure?
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
    appid: String,
})

const System = useStore($System)

const init = async () => {
    console.log('SYSTEM', $System.get())
}

const openUrl = async (_appid) => {
    const url = 'https://' + _appid
    window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + url)
    // /* Validate mini app. */
    // if (isMiniApp) {
    //     await sdk.actions.openUrl('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
    //     // window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + _url)
    // } else {
    //     window.open('https://farcaster.xyz/~/mini-apps/launch?url=' + encodeURIComponent(_url))
    // }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
