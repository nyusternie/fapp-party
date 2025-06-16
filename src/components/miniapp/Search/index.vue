<template>
    <main class="cursor-default w-full h-full px-2 pb-7 flex flex-col gap-4 overflow-y-scroll">
		<h1 class="mt-5 text-pretty text-3xl font-semibold tracking-wider text-sky-100 uppercase">
			Search
		</h1>

		<p class="-mt-4 text-amber-100 font-medium text-base/6 tracking-widest">
			Discover the MOST Talked About Mini Apps
		</p>

		<section class="flex flex-col gap-2 items-end">
			<SelectCategory />
			<SelectFeature />
			<SearchBox />
		</section>

		<div class="w-full my-5 px-10 border-t border-sky-200" />

		<section class="relative block w-full rounded-lg border-2 border-dashed border-sky-200 p-12 text-center">
			<MagnifyingGlassPlusIcon class="mx-auto size-12 text-sky-300" />

			<span class="mt-2 block text-lg font-semibold text-sky-200">
				Start a new search
			</span>
		</section>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { MagnifyingGlassPlusIcon } from '@heroicons/vue/24/outline'

import $System from '../../../stores/system'
import SelectCategory from './SelectCategory.vue'
import SelectFeature from './SelectFeature.vue'
import SearchBox from './SearchBox.vue'

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

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
