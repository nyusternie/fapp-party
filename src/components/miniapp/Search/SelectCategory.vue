<template>
    <main class="inline-flex rounded-md shadow-sm">
        <button type="button" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
            {{displayName}}
        </button>

        <Menu as="div" class="relative -ml-px block">
            <MenuButton class="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                <span class="sr-only">Open options</span>
                <ChevronDownIcon class="size-5" aria-hidden="true" />
            </MenuButton>

            <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
                <MenuItems class="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="py-1">
                        <MenuItem v-for="category in categories" :key="category.name" v-slot="{ active }">
                            <button
                                @click="displayName = category.name"
                                :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                            >
                                {{ category.name }}
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
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
    displayName.value = 'All Categories'
}

/* Initialize categories. */
const categories = [
    { name: 'Art & Creativity', id: 'art-creativity' },
    { name: 'Developer Tools', id: 'developer-tools' },
    { name: 'Education', id: 'entertainment' },
    { name: 'Entertainment', id: 'education' },
    { name: 'Finance', id: 'finance' },
    { name: 'Games', id: 'games' },
    { name: 'Health & Fitness', id: 'health-fitness' },
    { name: 'Music', id: 'music' },
    { name: 'News & Media', id: 'news-media' },
    { name: 'Productivity', id: 'productivity' },
    { name: 'Shopping', id: 'shopping' },
    { name: 'Social', id: 'social' },
    { name: 'Utility', id: 'utility' },
]

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
