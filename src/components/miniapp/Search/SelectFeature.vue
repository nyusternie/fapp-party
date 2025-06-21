<template>
    <main class="flex gap-2">
        <button @click="setBangers" class="cursor-pointer inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-base font-medium text-stone-200 ring-1 ring-inset ring-gray-200 line-clamp-1">
            <svg class="size-3 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            BANGERS!
        </button>

        <button @click="setFrenFavs" class="cursor-pointer inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-base font-medium text-stone-200 ring-1 ring-inset ring-gray-200 line-clamp-1">
            <svg class="size-3 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Fren Favs
        </button>

        <button @click="setTrendingNow" class="cursor-pointer inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-base font-medium text-stone-200 ring-1 ring-inset ring-gray-200 line-clamp-1">
            <svg class="size-3 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Trending Now
        </button>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import $Search, { clear } from '../../../stores/search'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize stores. */
const Search = useStore($Search)

/* Initialize handlers. */
const displayName = ref()

const init = async () => {
    // console.log('SYSTEM', $Search.get())

    /* Initialize display name. */
    // displayName.value = 'All Categories'
}

const setBangers = () => {
    /* Clear list. */
    clear()
}

const setFrenFavs = () => {
    /* Clear list. */
    clear()
}

const setTrendingNow = () => {
    /* Clear list. */
    clear()
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
