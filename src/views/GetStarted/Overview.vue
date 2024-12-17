<script setup>
import Herobanner from '../../layouts/Herobanner/Herobanner.vue'
import SectionTitle from '../../layouts/SectionTitle/SectionTitle.vue'
</script>

<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Get started</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques that ensure equal access, usability, and inclusion for all users, regardless of their abilities.</template>
        </Herobanner>
        <div class="article flex mt-16 mr-20 ml-20 gap-10">
            <div class="mainbox w-full">
                <SectionTitle :showTitle="false">
                    <template #sectionBrief>By implementing these accessible design principles, software and web designers can create digital products that are more inclusive, usable, and accessible to a diverse range of users, including those with disabilities.<br>Accessible design is not only beneficial for individuals with disabilities but also for a broader range of users. It promotes inclusivity, equal access to information and services, and a more user-friendly experience for everyone. By considering diverse user needs from the beginning of the design process, accessible design aims to create inclusive environments and products that can be enjoyed and utilized by all individuals, regardless of their abilities or disabilities.</template>
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
