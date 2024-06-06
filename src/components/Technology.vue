<script setup>
import data from './data.json';
import { computed, ref } from 'vue';

const content = data.technology;

const index = ref(0);

const contentName = computed(() => content[index.value].name);
const contentDescription = computed(() => content[index.value].description);

const images = computed(() => "src" + content[index.value].images.portrait);
const distance = computed(() => content[index.value].distance);
const travel = computed(() => content[index.value].travel);

const isActive = (key) => index.value === key;

</script>

<template>
<div class="min-h-screen bg-[url('../assets/technology/background-technology-mobile.jpg')] bg-cover bg-bottom sm:bg-[url('../assets/technology/background-technology-tablet.jpg')] md:bg-[url('../assets/technology/background-technology-desktop.jpg')]" alt="background-image-technology">
    <div class="text-center pt-[5.5rem] sm:pt-[8.5rem] md:pt-[13.25rem] mx-auto md:max-w-[94rem]">
        <h1 class="ff-sans-cond tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:ps-[2.40625rem] sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">03</span> SPACE LAUNCH 101</h1>
        <div class="md:flex md:justify-around md:flex-row-reverse">
            <div>
                <div class="flex justify-center pb-6 sm:pb-[3.3125rem]">
                    <img :src="images" class="h-[10.625rem] sm:h-[18.75rem] md:h-[27.8125rem]" alt="technology-img">
                </div>
            </div>
            <div class="self-end mx-auto md:mx-0 w-[20.4375rem] sm:w-[35.8125rem] md:w-[27.75rem] md:text-start">
                <div class="nav w-[9.5rem] sm:w-[13.125rem] md:w-[19rem] mx-auto md:mx-0 flex justify-between">
                    <div v-for="(item, key) in content" :key="key">
                        <button @click="index = key" :class="['ff-serif sm:text-[1.5rem] md:text-[2rem] w-[2.5rem] h-[2.5rem] sm:w-[3.75rem] sm:h-[3.75rem] md:w-[5rem] md:h-[5rem] rounded-full text-white border-[#ffffff25] border-[0.063rem] hover:border-white', {'': !isActive(key), 'bg-white text-black': isActive(key)}]">{{ key + 1 }}</button>
                    </div>
                </div>
                <div class="details mt-[1rem]">
                    <h4 class="text-[0.875rem] sm:text-[1rem] uppercase">The Terminology...</h4>
                    <div class="description pb-[2rem] sm:pb-[3.063rem] md:pb-[3.375rem]">
                        <h2 class="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] ff-serif uppercase text-white">{{ contentName }}</h2>
                        <p class="mx-auto text-[0.938rem] sm:text-[1rem] md:text-[1.125rem]">{{ contentDescription }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>