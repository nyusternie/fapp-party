<template>
    <main class="inline-flex rounded-md shadow-sm">
        <button type="button" class="cursor-not-allowed w-[300px] relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-lg font-semibold text-slate-700 uppercase ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
            {{displayName}}
        </button>

        <Menu as="div" class="relative -ml-px block">
            <MenuButton class="cursor-pointer relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                <span class="sr-only">Open options</span>
                <ChevronDownIcon class="size-7" aria-hidden="true" />
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
                                @click="pickCat(category.name)"
                                :class="[active ? 'bg-gray-100 text-slate-700 outline-none' : 'text-gray-700', 'w-full block px-4 py-2 text-lg text-left']"
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

import $Search, { searchBy } from '../../../stores/search'

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
    displayName.value = 'All Categories'
}

const pickCat = (_cat) => {
    displayName.value = _cat

    searchBy(_cat)
}

/* Initialize categories. */
const categories = [
    { name: 'Art & Creativity', id: 'art-creativity' },
    { name: 'Developer Tools', id: 'developer-tools' },
    { name: 'Education', id: 'education' },
    { name: 'Entertainment', id: 'entertainment' },
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
