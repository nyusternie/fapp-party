<template>
    <main class="px-2 max-w-5xl mx-auto py-24 sm:py-16 flex flex-col gap-6">
		<h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-fuchsia-700 sm:text-7xl">
			My Profile
		</h1>

		<p>
			TBD
		</p>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import $Profile from '../../stores/profile'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const Profile = useStore($Profile)

const init = async () => {
    console.log('PROFILE', $Profile.get())
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
