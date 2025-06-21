<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden">
		<Breadcrumb pageid="transparency" />

        <div class="py-6">
            <div class="mx-auto max-w-2xl px-4">
                <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
					<p class="text-stone-300 font-medium text-lg/8">
						At the beggining of this journey, I set out to create an OPEN community for BUILDERS!
						So as much as possible, transparency is thought of FIRST and FOREMOST when designing the systems that power this nascent community.
						<span @click="viewShomari" class="mt-1 pr-5 cursor-pointer block text-right text-rose-300 font-medium italic tracking-wider hover:text-rose-200">
							— 0xShomari
						</span>
					</p>

					<img
						src="https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80"
						alt=""
						class="aspect-[2/1] w-full rounded-lg bg-slate-100 object-cover"
					/>
                </div>

				<div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
                        <div class="sm:shrink-0">
                            <img class="p-2 size-16 bg-stone-300 rounded-full" :src="incentive.imageSrc" alt="" />
                        </div>

						<div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                            <h3 class="text-xl font-medium text-slate-200 tracking-wider">
								{{ incentive.name }}
							</h3>

							<p class="mt-2 text-base/7 text-stone-300">
								{{ incentive.description }}
							</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { sdk } from '@farcaster/frame-sdk'

import $System from '../../stores/system'
import Breadcrumb from '../Breadcrumb.vue'

const System = useStore($System)

const incentives = [
	{
		name: `Verified Smart Contracts`,
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
		description: `All of the smart contracts are verified on Basescan—with FULL audits planned for -as soon as economically possible.`,
	},
	{
		name: `10-year warranty`,
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
		description: `If it breaks in the first 10 years we'll replace it. After that you're on your own though.`,
	},
	{
		name: `Exchanges`,
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
		description: `If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.`,
	},
]

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
