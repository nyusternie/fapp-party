<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden">
		<Breadcrumb pageid="roadmap" />

        <h2 class="-mt-3 text-amber-300 font-medium text-2xl">
            Let's #BUIDL As ONE Community
        </h2>

        <h3 class="-mt-6 text-amber-300 font-medium text-lg">
            Submit your ideas below to help improve the NEXT PARTY! 🎉
        </h3>

        <p class="text-slate-300 font-medium text-lg">
            FappParty aims to be a community-driven platform with the OPEN sharing of ideas being the primary driving force behind its direction.
        </p>

        <p class="text-slate-300 font-medium text-lg">
            As this platform was launched on June 10th, it may take some time to get things "properly" up-to-speed.

        </p>

        <h3 class="text-slate-300 font-medium text-lg">
            Your patience is MUCH appreciated! 🙏
        </h3>

        <ul class="pl-5 list-decimal text-lg font-medium text-amber-100 leading-9">
            <li v-for="goal of goals" :key="goal.desc">
                {{goal.desc}} <span v-if="goal.isCompleted">✅</span>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import $System from '../../stores/system'
import Breadcrumb from '../Breadcrumb.vue'

const System = useStore($System)

const goals = ref([
    { desc: `Enable automatic Mini App discovery`, isCompleted: true },
    { desc: `Complete treasury (Solidity) contract`, isCompleted: false },
    { desc: `Enable automatic LIVE notifications`, isCompleted: false },
    { desc: `Enable automatic DAILY notifications`, isCompleted: false },
    { desc: `Enable automatic WEEKLY notifications`, isCompleted: false },
    { desc: `Search multiple categories at once`, isCompleted: false },
])

const init = async () => {
    console.log('SYSTEM', $System.get())
    console.log('PAGE ID', props.pageid)
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
