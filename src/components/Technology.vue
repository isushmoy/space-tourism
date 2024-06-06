<script setup>
import data from './data.json';
import { computed, ref } from 'vue';

const content = data.technology;

const index = ref(0);

const contentName = computed(() => content[index.value].name);
const contentDescription = computed(() => content[index.value].description);

const images = computed(() => "src" + content[index.value].images.portrait);
const imagesLandscape = computed(() => "src" + content[index.value].images.landscape);
const distance = computed(() => content[index.value].distance);
const travel = computed(() => content[index.value].travel);

const isActive = (key) => index.value === key;

</script>

<template>
<div class="min-h-screen bg-[url('../assets/technology/background-technology-mobile.jpg')] bg-cover bg-bottom sm:bg-[url('../assets/technology/background-technology-tablet.jpg')] md:bg-[url('../assets/technology/background-technology-desktop.jpg')]" alt="background-image-technology">
    <div class="text-center pt-[5.5rem] sm:pt-[8.5rem] md:pt-[13.25rem] md:flex md:flex-col mx-auto md:max-w-[94rem]">
        <div class="md:flex md:justify-around md:flex-row-reverse">
            <div class="mb-[0.75rem]">
                <h1 class="md:hidden ff-sans-cond sm:ps-[2.375rem] md:ps-0 tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">03</span> SPACE LAUNCH 101</h1>
                <div class="flex justify-center pb-6 sm:pb-[3.3125rem] md:pb-0">
                    <img :src="images" class="hidden md:block md:h-[32.938rem]" alt="technology-img">
                    <img :src="imagesLandscape" class="md:hidden h-[10.625rem] sm:h-[19.375rem]" alt="technology-img">
                </div>
            </div>
            <div>
                <h1 class="hidden md:block ff-sans-cond tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">03</span> SPACE LAUNCH 101</h1>
                <div>
                    <div class="self-end md:self-center md:justify-self-start mx-auto md:flex md:mx-0 w-[20.4375rem] sm:w-[35.8125rem] md:h-[18.938rem] md:w-[37.688rem] md:text-start">
                        <div class="nav mb-[1.625rem] w-[9.5rem] sm:w-[13.125rem] md:w-[19rem] mx-auto md:mx-0 flex justify-between md:flex-col">
                            <div v-for="(item, key) in content" :key="key">
                                <button @click="index = key" :class="['ff-serif sm:text-[1.5rem] md:text-[2rem] w-[2.5rem] h-[2.5rem] sm:w-[3.75rem] sm:h-[3.75rem] md:w-[5rem] md:h-[5rem] rounded-full text-white border-[#ffffff25] border-[0.063rem] hover:border-white', {'': !isActive(key), 'bg-white !text-[#0B0D17]': isActive(key)}]">{{ key + 1 }}</button>
                            </div>
                        </div>
                        <div class="details mt-[1rem] md:mt-0">
                            <h4 class="text-[0.875rem] sm:text-[1rem] uppercase">The Terminology...</h4>
                            <div class="description">
                                <h2 class="md:w-[29.375rem] text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] ff-serif uppercase text-white mb-[1rem] md:mb-0">{{ contentName }}</h2>
                                <p class="md:w-[27.75rem] mx-auto md:mx-0 text-[0.938rem] sm:text-[1rem] md:text-[1.125rem]">{{ contentDescription }}</p>
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