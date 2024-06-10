<script setup>
import { ref } from "vue"; 

let toggle = ref(false);
</script>

<template>
  <nav class="relative flex justify-between items-center m-[1.5rem]" role="navigation" aria-label="Main Navigation">
    <!-- Logo -->
    <div class="cursor-pointer">
      <img
        alt="space tourism logo"
        class="logo w-10 md:w-12 md:m-[2.5rem]"
        src="/assets/shared/logo.svg"
      />
    </div>
    <!-- Toggle Button -->
    <button
      class="sm:hidden fixed right-6"
      @click="(toggle = !toggle)"
      aria-expanded="toggle" aria-controls="menu"
    >
      <img src="/assets/shared/icon-hamburger.svg" alt="hamburger-menu" />
    </button>
    <!-- Menu Desktop -->
    <div class="hidden w-[80vw] md:block absolute ms-[10.438rem]">
      <div class="border-[#ffffff25] border-b-[0.0625rem] w-full"></div>
    </div>
    <div
      class="hidden sm:block sm:w-[29.125rem] md:w-[51.875rem] h-[6rem] bg-[#ffffff04] backdrop-blur-xl md:mt-[2.5rem] sm:fixed top-0 right-0"
    >
      <div
        class="flex justify-center sm:gap-[2.25rem] md:gap-[3rem] text-white mt-[2.25rem] tracking-[0.169rem] uppercase ff-sans-cond"
      >
        <router-link active-class="border-b-[0.1875rem] pb-8" class="hover:border-b-[0.1875rem] hover:border-[#ffffff50]" to="/"
          ><span class="sm:hidden font-bold md:inline-block">00</span>
          Home</router-link
        >
        <router-link active-class="border-b-[0.1875rem] pb-8" class="hover:border-b-[0.1875rem] hover:border-[#ffffff50]" to="/destination"
          ><span class="sm:hidden font-bold md:inline-block">01</span>
          Destination</router-link
        >
        <router-link active-class="border-b-[0.1875rem] pb-8" class="hover:border-b-[0.1875rem] hover:border-[#ffffff50]" to="/crew"
          ><span class="sm:hidden font-bold md:inline-block">02</span>
          Crew</router-link
        >
        <router-link active-class="border-b-[0.1875rem] pb-8" class="hover:border-b-[0.1875rem] hover:border-[#ffffff50]" to="/technology"
          ><span class="sm:hidden font-bold md:inline-block">03</span>
          Technology</router-link
        >
      </div>
    </div>
    <!-- Menu Mobile -->
    <div
      v-if="toggle"
      class="sm:hidden fixed h-full w-full top-0 left-0 z-40"
    >
      <div
        class="` w-[15.875rem] h-full bg-[#ffffff04] backdrop-blur-2xl fixed top-0 right-0"
      >
        <button
          class="mt-10 ms-8 mb-12"
          @click="(toggle = !toggle)"
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              class="hover:fill-[--orange]"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="ms-8 flex flex-col justify-center sm:gap-[2.25rem] md:gap-[3rem] text-white mt-[2.25rem] tracking-[0.169rem] uppercase ff-sans-cond"
        >
          <router-link active-class="" class="hover:text-[#ffffff50] mb-8" to="/"
            ><span class="sm:hidden font-bold md:inline-block">00</span>
            Home</router-link
          >
          <router-link
            active-class="" class="hover:text-[#ffffff50] mb-8"
            to="/destination"
            ><span class="sm:hidden font-bold md:inline-block">01</span>
            Destination</router-link
          >
          <router-link active-class="" to="/crew" class="hover:text-[#ffffff50] mb-8"
            ><span class="sm:hidden font-bold md:inline-block">02</span>
            Crew</router-link
          >
          <router-link active-class="" to="/technology" class="hover:text-[#ffffff50] mb-8"
            ><span class="sm:hidden font-bold md:inline-block">03</span>
            Technology</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
