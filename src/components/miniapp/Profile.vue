<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden">
        <div v-if="Profile.user?.pfpUrl" class="mt-5 flex justify-center">
            <img :src="Profile.user.pfpUrl" class="size-32 rounded-full border-2 border-amber-300" />
        </div>

        <div v-if="Profile.user?.fid" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                FID
            </span>

            <span class="col-span-2 text-amber-200 font-bold">
                {{Profile.user.fid}}
            </span>
        </div>

        <div v-if="Profile.user?.username" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                Username
            </span>

            <span class="col-span-2 text-amber-200 font-bold">
                {{Profile.user.username}}
            </span>
        </div>

        <div v-if="Profile.user?.displayName" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                Display
            </span>

            <span class="col-span-2 text-amber-200 font-bold">
                {{Profile.user.displayName}}
            </span>
        </div>

        <div v-if="Profile.authToken" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                Auth Token
            </span>

            <span class="col-span-2 text-amber-200 font-bold truncate text-ellipsis">
                {{Profile.authToken.slice(0, 20)}}...
            </span>
        </div>

        <div v-if="Profile.sessionid" class="grid grid-cols-3 gap-5">
            <span class="text-slate-200 font-medium uppercase text-right">
                Session ID
            </span>

            <span class="col-span-2 text-amber-200 font-bold truncate text-ellipsis">
                {{Profile.sessionid.slice(0, 20)}}...
            </span>
        </div>

        <!-- <pre class="text-slate-200 font-bold text-xs tracking-tighter overflow-x-scroll">{{debug}}</pre> -->
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
// import { sdk } from '@farcaster/frame-sdk'

import $Profile, { sync as syncProfile } from '../../stores/profile'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const Profile = useStore($Profile)

// const debug = ref()

/* Request Mini App flag. */
// TODO Maybe we set a SESSION flag??
// const isMiniApp = await sdk.isInMiniApp()

const init = async () => {
    console.log('PROFILE (vue)', $Profile.get())

    // debug.value = `please wait...`

    /* Request quick auth. */
    // debug.value = JSON.stringify(profile, null, 2)
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
