<script setup>
import data from './data.json';
import { computed, ref, onMounted, onBeforeUpdate, watch } from 'vue';
import animateContent, {onLoading} from './animations';

const content = data.crew;

const index = ref(0);

const contentName = computed(() => content[index.value].name);
const contentBio = computed(() => content[index.value].bio);

const images = computed(() => content[index.value].images.webp);
const role = computed(() => content[index.value].role);

const isActive = (key) => index.value === key;

// animation

onMounted(() => {
    onLoading();
})

onBeforeUpdate(() => {
  animateContent();
})

watch(() => {
  animateContent();
})
</script>

<template>
<div class="min-h-screen bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-bottom sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/assets/crew/background-crew-desktop.jpg')]" role="main" aria-label="Background image of Crew">
    <div class="text-center pt-[5.5rem] sm:pt-[8.5rem] md:pt-[13.25rem] mx-auto md:max-w-[94rem]">
        <div class="onLoad">
            <div class=" sm:flex flex-col-reverse md:flex-row-reverse md:justify-around">
                <h1 class="sm:hidden d-block ff-sans-cond tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">02</span> MEET YOUR CREW</h1>
                <div class="mb-[2rem]">
                    <div class="border-b-[1px] border-[#383B4B] sm:border-0">
                        <div class="appear flex justify-center md:justify-start">
                            <img :src="images" class="h-[13.938rem] sm:h-[35.75rem] md:h-[44.5rem]" alt="crew image">
                        </div>
                    </div>
                </div>
                <div class="sm:w-[28.523rem] md:w-[38.375rem] self-start mx-auto md:mx-0 w-[20.4375rem] sm:w-[35.8125rem] md:w-[27.75rem] md:text-start">
                    <div class="details flex flex-col-reverse sm:flex-col">
                        <div class="bio mb-[2rem]">
                            <h1 class="hidden sm:block d-block ff-sans-cond tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">02</span> MEET YOUR CREW</h1>
                            <p class="appear ff-serif text-[1rem] sm:text-[1.5rem] md:text=[2rem] text-[#8e9095] uppercase">{{ role }}</p>
                            <h2 class="appear text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] ff-serif uppercase text-white mb-[1rem]">{{ contentName }}</h2>
                            <p class="appear mx-auto text-[0.938rem] sm:text-[1rem] md:text-[1.125rem]">{{ contentBio }}</p>
                        </div>
                        <div class="nav w-[5.5rem] md:w-[8.25rem] mx-auto md:mx-0 flex justify-between mb-[2rem] sm:mb-[2rem]" aria-label="Crew navigation">
                            <div v-for="(item, key) in content" :key="key">
                                <button @click="index = key" :class="['h-2.5 w-2.5 md:h-[0.938rem] md:w-[0.938rem] rounded-full tracking-[0.148rem] sm:tracking-[0.169rem] hover:bg-[#ffffff50]', {'bg-[#ffffff17]': !isActive(key), 'bg-white': isActive(key)}]" :aria-pressed="isActive(key)"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>