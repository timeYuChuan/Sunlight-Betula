<template>
	<section class="title">
		<h2 class="text-[32px] font-semibold text-surface-100 mt-10 mb-8" v-if="showTitle">
			<slot name="sectionTitle">Section Title</slot>
		</h2>
		<p class="text-sm">
			<slot name="sectionBrief">The checklist was created based on the Web Content Accessibility Guidelines (WCAG). It focuses solely on the visual design aspect and does not cover development or code-related aspects.</slot>
		</p>
	</section>
</template>
<script setup>
	defineProps({
		showTitle: {
			type: Boolean,
			default: true,
		},
	});
</script>
