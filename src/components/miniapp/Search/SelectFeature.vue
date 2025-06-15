<template>
    <main class="flex gap-2">
        <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-stone-200 ring-1 ring-inset ring-gray-200">
            <svg class="size-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Starred
        </span>

        <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-stone-200 ring-1 ring-inset ring-gray-200">
            <svg class="size-1.5 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Frens
        </span>

        <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-stone-200 ring-1 ring-inset ring-gray-200">
            <svg class="size-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Trending
        </span>

        <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-stone-200 ring-1 ring-inset ring-gray-200">
            <svg class="size-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
            </svg>
            Badge
        </span>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import $System from '../../../stores/system'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize stores. */
const System = useStore($System)

/* Initialize handlers. */
const displayName = ref()

const init = async () => {
    // console.log('SYSTEM', $System.get())

    /* Initialize display name. */
    // displayName.value = 'All Categories'
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
