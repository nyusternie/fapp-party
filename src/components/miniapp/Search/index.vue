<template>
    <main class="cursor-default w-full h-full px-2 pb-7 flex flex-col gap-4 overflow-y-scroll overflow-x-hidden">
		<h1 class="mt-2 text-pretty text-3xl font-semibold tracking-wider text-sky-100 uppercase">
			Search
		</h1>

		<p class="-mt-4 text-amber-100 font-medium text-base/6 tracking-wider">
			Discover the MOST Talked About Mini Apps
		</p>

		<section class="flex flex-col gap-2 items-end">
			<SelectCategory />
			<SelectFeature />
			<SearchBox />
		</section>

		<div class="w-full my-2 border-t border-sky-200/30" />

		<section v-if="typeof searchResults !== 'undefined'">
			<AppCard v-for="app of searchResults" :key="app?.hostname" :app="app" />
		</section>
		<section v-else class="relative block w-full rounded-lg border-2 border-dashed border-sky-200/30 p-12 text-center">
			<MagnifyingGlassPlusIcon class="mx-auto size-12 text-sky-300/30" />

			<span class="mt-2 block text-lg font-light text-sky-200/70">
				Start a new search
			</span>
		</section>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { computed, onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { MagnifyingGlassPlusIcon } from '@heroicons/vue/24/outline'

import $Search, { initApplist } from '../../../stores/search'
import SelectCategory from './SelectCategory.vue'
import SelectFeature from './SelectFeature.vue'
import SearchBox from './SearchBox.vue'
import AppCard from '../AppCard.vue'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const Search = useStore($Search)

const MAX_APPS_PER_PAGE = 20

/* Initialize (compute) handlers. */
let searchResults = ref(null)

// searchResults.value = computed(() => $Search.get().slice(0, MAX_APPS_PER_PAGE))

const unbindListener = $Search.subscribe((value, oldValue) => {
console.log('APP LIST CHANGED', value)
	/* Validate app list. */
	if (typeof value === 'undefined' || value === null) {
		return
	}

    /* Update app lists to latest. */
    // searchResults.value = computed(() => value.slice(0, MAX_APPS_PER_PAGE))
    searchResults.value = value.slice(0, MAX_APPS_PER_PAGE)
})

const init = async () => {
    console.log('APP (existing)', $Search.get())
    // initApplist()


}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
