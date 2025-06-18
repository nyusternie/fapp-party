<template>
    <div>
        <div class="grid grid-cols-1 sm:hidden">
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select
                aria-label="Select a tab"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-sky-900 outline outline-1 -outline-offset-1 outline-sky-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600"
            >
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
                    {{ tab.name }}
                </option>
            </select>
            <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-sky-500" aria-hidden="true" />
        </div>

        <div class="hidden sm:block">
            <nav class="isolate flex divide-x divide-sky-200 rounded-lg shadow" aria-label="Tabs">
                <a
                    v-for="(tab, tabIdx) in tabs"
                    :key="tab.name"
                    :href="tab.href"
                    :class="[tab.current ? 'text-sky-900' : 'text-sky-700 hover:text-sky-500', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-xl font-medium hover:bg-sky-50 focus:z-10']"
                    :aria-current="tab.current ? 'page' : undefined"
                >
                    <span>{{ tab.name }}</span>
                    <span aria-hidden="true" :class="[tab.current ? 'bg-amber-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const tabs = [
    { name: 'Leaderboard', href: '#', current: false },
    { name: 'Trollbox', href: '#', current: false },
    { name: 'BANGERS!', href: '#', current: false },
]
</script>
