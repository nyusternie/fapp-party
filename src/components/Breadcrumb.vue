<template>
    <nav class="flex border-b border-stone-200 bg-white" aria-label="Breadcrumb">
        <ol role="list" class="flex w-full max-w-screen-xl space-x-4 px-4">
            <li class="flex">
                <div class="flex items-center">
                    <a href="/help" class="text-stone-400 hover:text-sky-500">
                        <QuestionMarkCircleIcon class="size-7 shrink-0" aria-hidden="true" />
                        <span class="sr-only">Home</span>
                    </a>
                </div>
            </li>

            <li v-for="page in pages" :key="page.name" class="flex">
                <div class="flex items-center">
                    <svg class="h-full w-6 shrink-0 text-stone-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                    </svg>

                    <a :href="page.href" class="ml-4 text-lg font-medium text-stone-500 tracking-wider hover:text-sky-500" :aria-current="page.current ? 'page' : undefined">
                        {{ page.name }}
                    </a>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import {
    HomeIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/vue/20/solid'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    pageid: String,
})

type Page = {
    name: string;
    href: string;
    current: boolean;
}

/* Initializ pages. */
const pages: Page[] = []

switch(props.pageid) {
case 'roadmap':
    pages.push({
        name: 'Roadmap',
        href: 'javascript:;',
        current: true,
    })
    break
case 'transparency':
    pages.push({
        name: 'Transparency',
        href: 'javascript:;',
        current: true,
    })
    break
default:
    pages.push({
        name: 'Unknown Parent',
        href: 'javascript:;',
        current: true,
    })
    pages.push({
        name: 'Unknown Page',
        href: 'javascript:;',
        current: true,
    })
    break
}
</script>
