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
                    <div class="project__input-wrapper">
                        <FormIcon />
                        <input class="project__form-input input" id="email" placeholder="Enter work email"
                            type="email" />
                    </div>
                    <UiButton class="project__btn">
                        Sign Up Free
                        <ArrowRight />
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
import ArrowRight from '../../icons/ArrowRight.vue';
import FormIcon from '../../icons/FormIcon.vue';

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
        flex: 1;
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
        width: 100%;
        background-color: transparent;
    }

    &__input-wrapper svg {
        flex-shrink: 0;
    }

    &__form-input {
        color: var(--color-blue-gray-600);
        background-color: transparent;
        flex: 1;
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
        @include inside-image(-50px, -50px);
    }
}

@include respond-to("sm") {
    .project {
        @include container(48px 16px);
        border-bottom: none;

        &__inner {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        &__description {
            font-size: 16px;
            color: var(--color-blue-gray-900);
        }

        &__title {
            font-size: 40px;
        }

        &__form {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        &__btn {
            width: 100%;
            display: flex;
        }

        &__logos {
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 30px;
            justify-items: center;
        }

        &__image-magic {
            display: none;
        }
    }
}
</style>