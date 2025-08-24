<template>
    <section class="join">
        <div class="join__inner">
            <div class="join__image-container">
                <div class="join__article">
                    <h2 class="join__title">
                        Join the community today
                    </h2>
                    <p class="join__description">
                        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et
                        tellus ac
                        varius
                        tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
                        in accumsan.
                    </p>
                    <UiButton class="join__my-big-btn">
                        Sign Up Free
                        <ArrowRight/>
                    </UiButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ArrowRight from "@svg/ArrowRight.vue"
import UiButton from "../../UI/UiButton.vue"
</script>

<style scoped lang="scss">
.join {
    @include container;


    &__inner {
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }

    &__image-container {
        position: relative;
        background: url('@img/join.png') center center / cover no-repeat;
        border-radius: 20px;
        height: 382px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    &__article {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 90%;
        padding: 0 20px;
        z-index: 1;
        gap: 24px;
    }

    &__title {
        @include font-title(56px, 900, 1.1, var(--color-light));
        text-align: center;
    }

    &__description {
        font-size: 18px;
        color: var(--color-light);
        font-weight: 200;
        text-align: center;
    }

    &__my-big-btn {
        padding: 10px 40px;
        font-size: 24px;
        gap: 30px;

        svg {
            flex-shrink: 0;
        }
    }
}
</style>