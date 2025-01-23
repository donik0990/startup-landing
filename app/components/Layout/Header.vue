<template>
  <header>
    <div class="container">
      <!-- Header menu -->
      <div class="mb-32 mt-5 flex items-center justify-between">
        <div>
          <img src="/image/logo.webp" alt="logo" />
        </div>
        <div class="flex gap-11">
          <ul class="flex gap-6">
            <li class="text-base leading-8 text-color500">
              <NuxtLink to="/">Pricing</NuxtLink>
            </li>
            <li class="text-base leading-8 text-color500">
              <a href="#">Support</a>
            </li>
            <li class="text-base leading-8 text-color500">
              <a href="#">Register</a>
            </li>
          </ul>
          <button class="text-base font-bold leading-8 text-colorIcons">
            Get Started <span><img src="/svg/getstart.svg" alt="" /></span>
          </button>
        </div>
      </div>
      <!-- Header text -->
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="w-[507px]">
            <h1 class="mb-5 text-6xl font-bold leading-[80px] text-color700">
              Professional Communication For Your Team
            </h1>
            <p class="mb-12 text-lg leading-10 text-color700">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <button
              class="text-colorWhite mb-11 rounded bg-colorIcons px-7 py-6 text-lg leading-3"
            >
              Explore Now
            </button>
            <div class="flex gap-7">
              <img src="/svg/paypal.svg" alt="Paypal" />
              <img src="/svg/google.svg" alt="Google" />
              <img src="/svg/Dropbox.svg" alt="Dropbox" />
            </div>
          </div>
          <div class="-mt-16 h-[677px] w-[714px]">
            <img
              class="h-full w-full"
              src="/image/people work.webp"
              alt="people Work"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
