<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll">
		<Breadcrumb :pageid="pageid" />

        <p class="text-slate-300 font-medium text-lg">
            Ready to boost your crypto earnings?
            Our Reward Pools are designed to help you maximize your USDC earnings—while enjoying time on Farcaster.
            Here's a quick overview of how it works:
        </p>

        <h2 class="text-amber-300 font-medium text-2xl tracking-wider">
            What is a Rewards Pool?
        </h2>

        <p class="text-slate-300 font-medium text-lg">
            Each Rewards Pool is a dynamic, community-driven feature that allows users to support one another.
            By participating, you're not only increasing your own earning but also contributing to the growth of the Mini Apps ecosystem.
        </p>

        <dl class="px-3 w-full grid grid-cols-1 gap-5 sm:grid-cols-2">
            <button v-for="item in stats" :key="item.id" class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-fuchsia-700 p-3">
                        <component :is="item.icon" class="size-7 text-fuchsia-100" aria-hidden="true" />
                    </div>

                    <p class="ml-16 truncate text-2xl font-bold text-stone-500">
                        {{ item.name }}
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        {{ item.stat }}
                    </p>

                    <p :class="[item.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
                        <ArrowUpIcon v-if="item.changeType === 'increase'" class="size-5 shrink-0 self-center text-green-500" aria-hidden="true" />
                        <ArrowDownIcon v-else class="size-5 shrink-0 self-center text-red-500" aria-hidden="true" />
                        <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                        {{ item.change }}
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div class="text-sm">
                            <span class="text-sm font-medium text-stone-500 uppercase">
                                Enter Pool<span class="sr-only"> {{ item.name }} stats</span>
                            </span>
                        </div>
                    </div>
                </dd>
            </button>
        </dl>

        <h2 class="text-amber-300 font-medium text-2xl tracking-wider">
            How Does It Work?
        </h2>

        <ol class="text-slate-300 font-medium text-lg">
            <li>
                Join the Pool: Simply opt into the Rewards Pool from the settings menu in the app.
            </li>

            <li>
                Earn Rewards: As the pool earns crypto from successful Sponsorships, those rewards are distributed proportionally among all pool participants.
            </li>

            <li>
                Withdraw Your Earnings: You can withdraw your earned crypto directly to your Warplet at anytime.
            </li>
        </ol>

        <a href="/rewards/leadership" class="block text-stone-700 text-center">
            PREVIEW Leadership Pool
        </a>

        <h2 class="text-amber-300 font-medium text-2xl tracking-wider">
            Why Participate?
        </h2>

        <ol class="text-slate-300 font-medium text-lg">
            <li>
                Increased Earnings: TBD
            </li>

            <li>
                Community Support: TBD
            </li>

            <li>
                Ease of Use: TBD
            </li>
        </ol>

    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import $System from '../../stores/system'
import Breadcrumb from '../Breadcrumb.vue'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    pageid: String,
})

const stats = [
    {
        id: 'builders',
        name: `Builder's Pool`,
        stat: '71,897',
        icon: WrenchScrewdriverIcon,
        change: '122',
        changeType: 'increase',
    },
    {
        id: 'leadership',
        name: `Leadership Pool`,
        stat: '58.16%',
        icon: EnvelopeOpenIcon,
        change: '5.4%',
        changeType: 'increase',
    },
    {
        id: 'guests',
        name: `Guest's Pool`,
        stat: '24.57%',
        icon: CursorArrowRaysIcon,
        change: '3.2%',
        changeType: 'decrease',
    },
]
</script>
