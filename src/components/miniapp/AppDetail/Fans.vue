<template>
    <figure v-if="testimonial" class="rounded-2xl bg-stone-100 p-3 shadow-lg ring-1 ring-gray-900/5">
        <blockquote class="text-gray-900">
            <p>{{ `“${testimonial.body}”` }}</p>
        </blockquote>

        <figcaption class="mt-6 flex items-center gap-x-4">
            <img
                class="size-10 rounded-full bg-gray-50"
                :src="testimonial.author.imageUrl"
                alt=""
            />

            <div>
                <div class="font-semibold">
                    {{ testimonial.author.name }}
                </div>

                <div class="text-gray-600">
                    {{ `@${testimonial.author.handle}` }}
                </div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'
// import { sdk } from '@farcaster/frame-sdk'

import $System from '../../../stores/system'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const System = useStore($System)

const testimonial = ref()

const init = async () => {
    testimonial.value = {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
