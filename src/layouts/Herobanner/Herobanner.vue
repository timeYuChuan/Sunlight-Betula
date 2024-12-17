<template>
  <div class="hero-container w-full bg-herobannerbg bg-no-repeat bg-cover pt-14 pr-20 pb-16 pl-20">
    <h1 class="pageTitle text-2xl font-semibold lg:text-[56px] text-neutral-0 mb-6">
        <slot name="pageTitle">Page Title</slot>
    </h1>
    <p class="pageBrief text-sm text-neutral-0" v-if="showHeroBrief">
      <slot name="pageBrief">slotThis is the page brief.</slot>
    </p>
  </div>
</template>
<script setup>
	defineProps({
		showHeroBrief: {
			type: Boolean,
			default: true,
		},
	});
</script>
