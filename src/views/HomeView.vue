<script setup>
import Herobanner from '../layouts/Herobanner/Herobanner.vue'
import SectionTitle from '../layouts/SectionTitle/SectionTitle.vue'
</script>

<template>
    <main class="grow">
        <Herobanner>
            <template #pageTitle>Get started</template>
            <template #pageBrief>Get started</template>
        </Herobanner>
        <div class="article flex mt-16 mr-20 ml-20 gap-10">
            <div class="mainbox w-full">
                <SectionTitle>
                    <template #sectionTitle>Get started</template>
                    <template #sectionBrief>Get started</template>
                </SectionTitle>
                
            </div>
            <div class="content hidden lg:block w-[120px] min-h-[200px]">
                <h5>On this page</h5>
                <ul>
                    <li>content link1</li>
                    <li>content link2</li>
                    <li>content link3</li>
                    <li>content link4</li>
                    <li>content link5</li>
                </ul>
            </div>
        </div>
    </main>
</template>
