<template>
    <figure v-if="testimonial" class="rounded-2xl bg-stone-100 p-3 shadow-lg ring-1 ring-stone-900/5">
        <blockquote class="text-stone-900" :class="[ props.isFeatured ? 'text-lg/6' : 'text-xs/4']">
            <p>{{ `“${testimonial.body}”` }}</p>
        </blockquote>

        <figcaption class="mt-3 flex items-center gap-x-4">
            <img
                class="size-10 rounded-full bg-stone-50"
                :src="testimonial.fan.pfpUrl"
                alt=""
            />

            <div>
                <div class="font-semibold">
                    {{ testimonial.fan.displayName }}
                </div>

                <div class="text-stone-600">
                    {{ `@${testimonial.fan.username}` }}
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
    fid: Number,
    isFeatured: Boolean,
})

const System = useStore($System)

const testimonial = ref()

const init = async () => {
    testimonial.value = {
        body: `Mini Apps Party by @shomari.eth is a great way to find new mini apps to try out! 👀✨`,
        fan: {
            displayName: `Hikari`,
            username: 'hikalipikali',
            pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9a81b43a-0a35-462f-926c-d11aef805d00/rectcrop3',
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
