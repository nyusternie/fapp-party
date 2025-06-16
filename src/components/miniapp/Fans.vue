<template>
    <main class="cursor-default w-full h-full px-2 pb-7 flex flex-col gap-4 overflow-y-scroll">
		<Breadcrumb :pageid="pageid" />

        <div class="mx-auto max-w-7xl px-6">
            <div class="mx-auto max-w-2xl text-center">
                <p class="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900">
                    We have worked with thousands of amazing people
                </p>
            </div>

            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-9008">
                <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="p-6 text-lg font-semibold tracking-tight text-gray-900">
                        <p>{{ `“${featuredTestimonial.body}”` }}</p>
                    </blockquote>

                    <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4">
                        <img
                            class="size-10 flex-none rounded-full bg-gray-50"
                            :src="featuredTestimonial.author.imageUrl"
                            alt=""
                        />

                        <div class="flex-auto">
                            <div class="font-semibold">
                                {{ featuredTestimonial.author.name }}
                            </div>

                            <div class="text-gray-600">
                                {{ `@${featuredTestimonial.author.handle}` }}
                            </div>
                        </div>

                        <img
                            class="h-10 w-auto flex-none"
                            :src="featuredTestimonial.author.logoUrl"
                            alt=""
                        />
                    </figcaption>
                </figure>

                <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
                    <div
                        v-for="(column, columnIdx) in columnGroup"
                        :key="columnIdx"
                        :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']"
                    >
                        <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <blockquote class="text-gray-900">
                                <p>{{ `“${testimonial.body}”` }}</p>
                            </blockquote>

                            <figcaption class="mt-6 flex items-center gap-x-4">
                                <img class="size-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />

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
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    pageid: String,
})

const featuredTestimonial = {
    body:
        'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
    author: {
        name: 'Brenna Goyette',
        handle: 'brennagoyette',
        imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
        logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
    },
}

const testimonials = [
    [
        [
            {
                body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
                author: {
                    name: "Leslie Alexander",
                    handle: "lesliealexander",
                    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
        [
            {
                body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
                author: {
                    name: "Lindsay Walton",
                    handle: "lindsaywalton",
                    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
    ],
    [
        [
            {
                body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
                author: {
                    name: "Tom Cook",
                    handle: "tomcook",
                    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
        [
            {
                body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
                author: {
                    name: "Leonard Krasner",
                    handle: "leonardkrasner",
                    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
    ],
]
</script>
