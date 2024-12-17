<template>
	<div class="navigation hidden box-border shrink-0 lg:block lg:w-[240px] lg:sticky top-0 h-[100vh]  bg-surface-100 pt-14 pr-8 pb-16 pl-8">
		<div class="logo mb-8" width="172">
			<RouterLink to="/">
				<img :src="logoIcon" alt="" class="block w-full" />
			</RouterLink>
		</div>
		<img src="../../assets/images/icon-nav-divider.svg" alt="" class="divider mb-8">
		<div>
			<nav class="menu">
				<ul>
					<li>
						<div class="nav-fir">
							<div class="nav-fir--item">
								<router-link :to="{ name: 'home', params: {} }">Get started</router-link>
							</div>
						</div>
					</li>
					<li>
						<RouterLink :to="{ name: 'Accessibility_Overview', params: {} }">Accessibility</RouterLink>
					</li>
					<li>
						<RouterLink to="/case">案例實績</RouterLink>
					</li>
					<li>
						<RouterLink to="/trend">市場動態</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import logoIcon from "@/assets/images/logo-vs.svg";
import navIcon from "@/assets/images/icon-nav-arrow.svg";
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>

</style>
