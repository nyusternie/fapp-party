<template>
    <nav class="flex border-b border-stone-600 bg-stone-700" aria-label="Breadcrumb">
        <ol role="list" class="flex w-full max-w-screen-xl space-x-4 px-4">
            <li class="flex">
                <div class="flex items-center">
                    <button class="text-stone-400 hover:text-amber-300">
                        <img src="/icon.svg" class="size-6 shrink-0" aria-hidden="true" />
                        <span class="sr-only">Mini Apps</span>
                    </button>
                </div>
            </li>

            <li v-for="page in pages" :key="page.name" class="flex">
                <div class="flex items-center">
                    <svg class="h-full w-6 shrink-0 text-stone-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                    </svg>

                    <span v-if="page.current" class="ml-4 text-lg font-medium text-stone-100 tracking-wider cursor-default" :aria-current="page.current ? 'page' : undefined">
                        {{ page.name }}
                    </span>
                    <a v-else :href="page.href" class="ml-4 text-lg font-medium text-stone-100 tracking-wider hover:text-amber-300" :aria-current="page.current ? 'page' : undefined">
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
    InformationCircleIcon,
    QuestionMarkCircleIcon,
    Squares2X2Icon,
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
// REWARDS
case 'rewards':
    pages.push({
        name: 'Reward Pools',
        href: 'javascript:;',
        current: true,
    })
    break
// REWARDS: Leadership
case 'rewards/leadership':
    pages.push({
        name: 'Reward Pools',
        href: '/rewards',
        current: false,
    })
    pages.push({
        name: 'Leadership',
        href: 'javascript:;',
        current: true,
    })
    break
// ROADMAP
case 'roadmap':
    pages.push({
        name: 'Help Desk',
        href: '/help',
        current: false,
    })
    pages.push({
        name: 'Our Roadmap',
        href: 'javascript:;',
        current: true,
    })
    break
// TRANSPARENCY
case 'transparency':
    pages.push({
        name: 'Help Desk',
        href: '/help',
        current: false,
    })
    pages.push({
        name: '100% Transparency',
        href: 'javascript:;',
        current: true,
    })
    break
default:
    pages.push({
        name: 'Unknown Parent',
        href: 'javascript:;',
        current: false,
    })
    pages.push({
        name: 'Unknown Page',
        href: 'javascript:;',
        current: true,
    })
    break
}
</script>
