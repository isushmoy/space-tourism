<script setup>
import data from './data.json';
import { computed, ref, onBeforeUpdate, watch, onMounted } from 'vue';
import animateContent, {onLoading} from './animations';

const content = data.destinations;

const index = ref(0);

const contentName = computed(() => content[index.value].name);
const contentDescription = computed(() => content[index.value].description);

const images = computed(() => content[index.value].images.png);
const distance = computed(() => content[index.value].distance);
const travel = computed(() => content[index.value].travel);

const isActive = (key) => index.value === key;



// animation
onMounted(() => {
    onLoading();
})

onBeforeUpdate(() => {
    animateContent();
})

watch(index, () => {
    animateContent();
})
</script>

<template>
<div class="min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-bottom sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/assets/destination/background-destination-desktop.jpg')]" alt="background-image-destination" role="main" aria-label="Background image of destination">
    <div class="text-center pt-[5.5rem] sm:pt-[8.5rem] md:pt-[13.25rem] md:flex md:justify-around mx-auto md:max-w-[94rem]">
        <div class="onLoad">
            <h1 class="ff-sans-cond tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] text-white mb-8 sm:mb-[3.75rem] md:mb-[6.0625rem] sm:ps-[2.40625rem] md:ps-0 sm:text-[1.25rem] sm:text-left md:text-[1.75rem]"><span class="text-[#ffffff28] font-bold">01</span> PICK YOUR DESTINATION</h1>
            <div class="appear flex justify-center pb-6 sm:pb-[3.3125rem]">
                <img :src="images" class="h-[10.625rem] sm:h-[18.75rem] md:h-[27.8125rem]" alt="planet image">
            </div>
        </div>
        <div class="onLoad self-end mx-auto md:mx-0 w-[20.4375rem] sm:w-[35.8125rem] md:w-[27.75rem] md:text-start">
            <div class="nav w-[14.844rem] sm:w-[17.844rem] mx-auto md:mx-0 flex justify-center gap-[2.188rem] text-sm md:text-[1rem] md:justify-start" aria-label="Destination navigation">
                <div v-for="(item, key) in content" :key="key">
                    <button @click="index = key" :class="['inline uppercase ff-sans-cond tracking-[0.148rem] sm:tracking-[0.169rem] hover:border-b-2 hover:border-[#ffffff50] pb-[0.5rem]', {'': !isActive(key), 'text-white border-b-2': isActive(key)}]" :aria-pressed="isActive(key)">{{ item.name }}</button>
                </div>
            </div>
            <div class="appear details divide-y-[1px] divide-[#383B4B] mt-[1rem]">
                <div class="description pb-[2rem] sm:pb-[3.063rem] md:pb-[3.375rem]">
                    <h2 class="text-[5rem] md:text-[6.25rem] ff-serif uppercase text-white">{{ contentName }}</h2>
                    <p class="mx-auto text-[0.938rem] sm:text-[1rem] md:text-[1.125rem]">{{ contentDescription }}</p>
                </div>
                <div class="pt-[2rem] sm:pt-[1.75rem] sm:flex justify-around md:justify-start md:gap-20">
                    <div class="distance">
                        <h4 class="ff-sans-cond text-sm tracking-[0.148rem] pb-3">AVG. DISTANCE</h4>
                        <p class="ff-serif text-[1.75rem] text-white pb-8 uppercase">{{ distance }}</p>
                    </div>
                    <div class="travel">
                        <h4 class="ff-sans-cond text-sm tracking-[0.148rem] pb-3">EST. TRAVEL TIME</h4>
                        <p class="ff-serif text-[1.75rem] text-white pb-8 uppercase">{{ travel }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>