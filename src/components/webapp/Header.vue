<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">FappParty</span>
                    <img class="size-20" src="/icon.svg" alt="FappParty logo" />
                </a>
            </div>

            <div class="flex lg:hidden">
                <button @click="isShowingMobileMenu = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="size-12" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <div class="hidden lg:flex lg:gap-x-12">
                <a href="/apps" class="text-xl/6 font-semibold text-slate-900">
                    Mini Apps
                </a>

                <a href="/rewards" class="text-xl/6 font-semibold text-slate-900">
                    Reward Pools
                </a>

                <a href="/spotlight" class="text-xl/6 font-semibold text-slate-900">
                    Spotlight
                </a>

                <a href="/help" class="text-xl/6 font-semibold text-slate-900">
                    Need help?
                </a>
            </div>

            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/profile" class="px-5 py-2 text-2xl/6 font-semibold text-sky-800 bg-sky-300 rounded-xl border border-sky-500 shadow hover:bg-sky-200">
                    Sign-In
                </a>
            </div>
        </nav>

        <div v-if="isShowingMobileMenu" class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">FappParty</span>
                        <img class="size-20" src="/icon.svg" alt="FappParty icon" />
                    </a>

                    <button @click="isShowingMobileMenu = false" type="button" class="-m-2.5 rounded-md p-2.5 text-slate-700">
                        <span class="sr-only">Close menu</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-4 py-6">
                            <a href="/apps" class="-mx-3 block rounded-lg px-2 py-2 text-3xl font-semibold text-slate-900 hover:bg-gray-50">
                                Mini Apps
                            </a>

                            <a href="/rewards" class="-mx-3 block rounded-lg px-2 py-2 text-3xl font-semibold text-slate-900 hover:bg-gray-50">
                                Reward Pools
                            </a>

                            <a href="/spotlight" class="-mx-3 block rounded-lg px-2 py-2 text-3xl font-semibold text-slate-900 hover:bg-gray-50">
                                Spotlight
                            </a>

                            <a href="/help" class="-mx-3 block rounded-lg px-2 py-2 text-3xl font-semibold text-slate-900 hover:bg-gray-50">
                                Need help?
                            </a>
                        </div>

                        <div class="py-6">
                            <a href="/profile" class="-mx-3 block rounded-lg px-2 py-2.5 text-3xl font-semibold text-slate-900 hover:bg-gray-50">
                                Sign-In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const isShowingMobileMenu = ref(false)

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
