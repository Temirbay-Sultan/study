<template>
    <section class="project">
        <div class="project__inner">
            <div class="project__article">
                <ResponsiveText tag="h2" class="project__title" desktopText="Team projects, done well"
                    mobileText="Teach students worldwide" />

                <ResponsiveText tag="p" class="project__description" desktopText="The only platform that gives your team all the tools needed to
              work together on their awesome projects." mobileText="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies." />

                <form class="project__form">
                    <label class="visually-hidden" for="email">
                        Email
                    </label>
                    <div class="project__input-wrapper">
                        <svg width="15" height="15" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.598 2L9.345 7.12C9.52813 7.28306 9.76479 7.37316 10.01 7.37316C10.2552 7.37316 10.4919 7.28306 10.675 7.12L16.423 2H3.598ZM18 3.273L12.006 8.614C11.4565 9.10374 10.7461 9.37436 10.01 9.37436C9.27392 9.37436 8.56352 9.10374 8.014 8.614L2 3.254V12H18V3.273ZM2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0Z"
                                fill="#94A3B8" />
                        </svg>
                        <input class="project__form-input input" id="email" placeholder="Enter work email"
                            type="email" />
                    </div>
                    <UiButton>
                        Sign Up Free
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                                fill="currentColor" />
                        </svg>
                    </UiButton>
                </form>

                <div class="project__logos">
                    <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="project logo"
                        class="project__logo">
                </div>
            </div>

            <div class="project__image-container">
                <img :src="projectImg" alt="people watching a screen" class="project__image-inner" />
                <img :src="magicImg" alt="magic" class="project__image-magic" />
            </div>
        </div>
    </section>

</template>
<script setup>
import UiButton from '../../../components/UI/UiButton.vue';
import ResponsiveText from "../../../components/ResponsiveText.vue"
import projectImg from "@img/project-img.png"
import magicImg from "@/assets/images/magic.png"

import logo1 from "@/assets/images/project-logo/1.png"
import logo2 from "@/assets/images/project-logo/2.png"
import logo3 from "@/assets/images/project-logo/3.png"
import logo4 from "@/assets/images/project-logo/4.png"

const logos = [logo1, logo2, logo3, logo4]

</script>

<style scoped lang="scss">

.project {
    @include container;
    border-top: 1px solid var(--color-blue-gray-300);
    border-bottom: 1px solid var(--color-blue-gray-300);

    &__inner {
        display: flex;
        align-items: center;
        gap: 80px;
    }

    &__article {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 24px;
    }

    &__title {
        @include font-title(72px, 900, 1.1, var(--color-blue-gray));
    }

    &__description {
        font-size: 18px;
        color: var(--color-blue-gray-600);
        font-weight: 200;
    }

    &__input-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        border: 1px solid var(--color-blue-gray);
        border-radius: var(--border-radius);
        padding: 0 12px;
        height: var(--input-height);
        max-width: 500px;
        background-color: transparent;
    }

    &__input-wrapper svg {
        flex-shrink: 0;
    }

    &__form-input {
        color: var(--color-blue-gray-600);
        background-color: transparent;
        height: 100%;
    }

    &__form {
        display: flex;
        gap: 16px;
    }

    &__logos {
        display: flex;
        background-color: var(--color-blue-gray-100);
        justify-content: space-around;
        padding: 16px;
        border-radius: var(--border-radius);
    }

    &__image-container {
        position: relative;
        display: inline-block;
    }

    &__image-inner {
      position: relative;
      z-index: 2;

    }

    &__image-magic {
        @include inside-image(-50px,-50px);
    }

}
</style>