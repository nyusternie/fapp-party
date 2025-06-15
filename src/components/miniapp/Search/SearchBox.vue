<template>
    <main class="w-full grid grid-cols-1">
        <input
            type="text"
            class="col-start-1 row-start-1 block w-full rounded-md bg-white py-2 pl-12 pr-3 text-xl tracking-wider text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            placeholder="Search"
        />
        <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-7 self-center text-gray-400" aria-hidden="true" />
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'

import $System from '../../../stores/system'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const System = useStore($System)

const init = async () => {
    // console.log('SYSTEM', $System.get())
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
