<script setup>
import { onBeforeUpdate, onMounted, watchEffect } from 'vue';
import {onLoading} from './animations';

// animation
onMounted(() => {
  onLoading();
})

watchEffect(() => {
  onLoading();
})
</script>

<template>
  <div
    class="min-h-screen mt-0 top-0 bg-[url('../assets/home/background-home-mobile.jpg')] bg-cover bg-center sm:bg-[url('../assets/home/background-home-tablet.jpg')] md:bg-[url('../assets/home/background-home-desktop.jpg')]"
    role="main" aria-label="Background image of Space"
  >
    <div
      class=" text-center pt-[7rem] sm:pt-[12.625rem] md:pt-[24.1875rem] md:flex md:justify-around mx-auto md:max-w-[94rem]"
    >
      <div class="onLoad mx-6">
        <h1
          class="md:text-start ff-sans-cond sm:[1.25rem] md:text-[1.75rem] tracking-[0.169rem] sm:tracking-[0.211rem] md:tracking-[0.295rem] ff-sans-cond uppercase"
        >
          So, you want to travel to
        </h1>
        <span
          class="md:text-start text-[5rem] block sm:text-[9.375rem] tracking-normal ff-serif text-white uppercase"
          >Space</span
        >
        <div
          class="md:text-start max-w-[27.75rem] text-center mx-auto text-[0.938rem] sm:text-[1rem] md:text-[1.125rem]"
        >
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <router-link to="/destination"
        class="onLoad md:self-end flex justify-center items-center mt-[5.063rem] sm:mt-[8.5rem] md:mt-0 cursor-pointer" aria-label="Explore space destinations"
      >
        <div
          class="absolute w-[9.375rem] h-[9.375rem] sm:w-[15.125rem] sm:h-[15.125rem] md:w-[17.125rem] md:h-[17.125rem] bg-[#ffffff15] transition-all hover:scale-150 duration-500 rounded-full mx-auto flex justify-center items-center"  aria-hidden="true"
        ></div>
        <div
          class="w-[9.375rem] h-[9.375rem] sm:w-[15.125rem] sm:h-[15.125rem] md:w-[17.125rem] md:h-[17.125rem] bg-white rounded-full mx-auto flex justify-center items-center"
        >
          <div
            class="uppercase rounded-full text-xl sm:text-[2rem] ff-serif tracking-[0.078rem] sm:tracking-[0.125rem] text-[#0B0D17]"
            >Explore</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
