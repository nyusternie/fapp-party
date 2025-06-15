<template>
    <div class="bg-stone-800 shadow rounded-lg border-2 border-stone-500">
        <SwitchGroup as="div" class="px-4 py-5 sm:p-6">
            <SwitchLabel as="h3" class="text-2xl font-semibold text-stone-200" passive>
                {{title}}
            </SwitchLabel>

            <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                <div class="max-w-xl text-base text-stone-300">
                    <SwitchDescription>
                        {{summary}}
                    </SwitchDescription>
                </div>

                <div class="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
                    <Switch
                        v-model="enabled"
                        :class="[enabled ? 'bg-stone-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2']"
                    >
                        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                    </Switch>
                </div>
            </div>
        </SwitchGroup>
    </div>
</template>

<script setup>
/* Import modules. */
import { ref } from 'vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    title: String,
    summary: String,
})

const enabled = ref(false)
</script>
