<template>
    <main class="w-full h-full px-2 pb-7 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden">
		<h1 class="mt-5 text-pretty text-5xl font-semibold tracking-tight text-amber-200 uppercase">
			Reward Pools
		</h1>

		<section class="text-white">
			<a href="/rewards/guests">
				Guests
			</a>
			|
			<a href="/rewards/builders">
				Builders
			</a>
			|
			<a href="/rewards/sponsors">
				Sponsors
			</a>
		</section>

		<div class="bg-white py-6">
			<div class="w-full px-6">
				<div class="mt-8 grid w-full grid-cols-1 gap-x-8 gap-y-20">
                    <article v-for="project of projects" :key="project.id" class="flex flex-col items-start justify-between">
                        <div class="relative w-full">
                            <img
                                :src="project.imgUrl"
                                alt=""
                                class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                            />
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        </div>

                        <div class="max-w-xl">
                            <div class="mt-8 flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">
                                    {{project.class}}
                                </time>

                                <a href="#" class="relative z-1b0 rounded-full bg-gray-50 px-2 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {{project.category}}
                                </a>
                            </div>

                            <div class="group relative">
                                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        {{project.title}}
                                    </a>
                                </h3>

                                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                                    {{project.desc}}
                                </p>
                            </div>

                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img :src="project.ownerImgUrl" alt="" class="size-10 rounded-full bg-gray-100" />

                                <div class="text-sm/6">
                                    <p class="font-semibold text-gray-900">
                                        <a href={project.ownerUrl}>
                                            <span class="absolute inset-0"></span>
                                            {{project.owner}}
                                        </a>
                                    </p>

                                    <p class="text-gray-600">
                                        {{project.builder}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
/* Import modules. */
import { onMounted, ref } from 'vue'
import { useStore } from '@nanostores/vue'

import $System from '../../stores/system'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const System = useStore($System)

const projects = ref()

const init = async () => {
    console.log('SYSTEM', $System.get())

    projects.value = []

    projects.value.push({
        id: '1',
        title: 'Frameception',
        desc: `Build your frame in a frame.`,
        category: 'Infrastructure',
        builder: 'Farcaster Builder',
        class: 'New Project/Build',
        owner: 'hellno the optimist',
        ownerUrl: 'https://warpcast.com/hellno.eth',
        ownerImgUrl: 'https://i.imgur.com/qoHFjQD.gif',
        imgUrl: 'https://i.ibb.co/0j8XKZcd/frameception.png',
    })

    projects.value.push({
        id: '2',
        title: 'Frameify',
        desc: `Wrap (almost) ANY website into a Farcaster v2 frame in just a few clicks.`,
        category: 'Utility',
        builder: 'Farcaster Master Builder',
        class: 'New Project/Build',
        owner: 'Shomari',
        ownerUrl: 'https://warpcast.com/shomari.eth',
        ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/57f8600f-2e51-4549-8cc4-f80e4c681800/rectcrop3',
        imgUrl: 'https://i.ibb.co/zVBWtkRW/frameify.png',
    })

    projects.value.push({
        id: '3',
        title: 'FrameHub',
        desc: `Generate a frame with a single cast, that is backed by beautiful, editable code, following best practices all the way, with no vendor lock-in.`,
        category: 'Infrastructure',
        builder: 'Farcaster Builder',
        class: 'New Project/Build',
        owner: 'Breck Yunits',
        ownerUrl: 'https://warpcast.com/breck',
        ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/bebf2f70-37fa-4114-9720-3bdc32f72a00/original',
        imgUrl: 'https://i.ibb.co/m5z7M0rL/frame-hub.png',
    })

    // projects.value.push({
    // 	id: '4',
    // 	title: 'TITLE',
    // 	desc: `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    // 	category: 'Infrastructure',
    // 	builder: 'Farcaster Builder',
    // 	class: 'New Project/Build',
    // 	owner: 'mide (aka fraye)',
    // 	ownerUrl: '',
    // 	ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/bebf2f70-37fa-4114-9720-3bdc32f72a00/original',
    // 	imgUrl: 'https://i.ibb.co/m5z7M0rL/frame-hub.png',
    // })

    projects.value.push({
        id: '5',
        title: 'Frames V2 Demo',
        desc: `Explore, Learn, Reuse and Contribute with new components, tutorials, and guides helping to grow this hub of community resources. Or just test your knowledge with a little quiz.`,
        category: 'Education',
        builder: 'Farcaster Builder',
        class: 'New Project/Build',
        owner: 'J. Valeska 🦊🎩🫂',
        ownerUrl: 'https://warpcast.com/jvaleska.eth',
        ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f82ddc2b-1c48-4e8f-61b3-e40eb4d59700/original',
        imgUrl: 'https://i.ibb.co/5XGx5Hjy/frames-v2-demo.png',
    })

    projects.value.push({
        id: '6',
        title: 'First v2 Frame',
        desc: `Create Your First v2 Frame Today!`,
        category: 'Infrastructure',
        builder: 'Farcaster Builder',
        class: 'New Project/Build',
        owner: 'cashlessman 🎩',
        ownerUrl: 'https://warpcast.com/cashlessman.eth',
        ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/a74b030e-2d92-405c-c2d0-1696f5d51d00/original',
        imgUrl: 'https://i.ibb.co/fdLpf0NH/first-v2-frame.png',
    })

    // projects.value.push({
    // 	id: '7',
    // 	title: 'TITLE',
    // 	desc: `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    // 	category: 'Infrastructure',
    // 	builder: 'Farcaster Builder',
    // 	class: 'New Project/Build',
    // 	owner: 'kt',
    // 	ownerUrl: '',
    // 	ownerImgUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/bebf2f70-37fa-4114-9720-3bdc32f72a00/original',
    // 	imgUrl: 'https://i.ibb.co/m5z7M0rL/frame-hub.png',
    // })

    projects.value.push({
        id: '8',
        title: 'DBee Builder',
        desc: `A development example and template for Framer Builder created with Svelte, featuring integrations such as: 1) val.town for managing React libraries.`,
        category: 'Library',
        builder: 'Farcaster Builder',
        class: 'New Project/Build',
        owner: 'Lord Dalresin🐝',
        ownerUrl: 'https://warpcast.com/dalresin',
        ownerImgUrl: 'https://i.imgur.com/Gtrkty9.jpg',
        imgUrl: 'https://i.ibb.co/PGSCHS1Y/dbee-builder.png',
    })
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
