<template>
    <section class="ease">
        <div class="ease__inner">
            <div class="ease__image-container">
                <div class="ease__article">
                    <h2 class="ease__title">Problems come and get solved with ease</h2>
                    <p class="ease__description">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
                        Neque
                        pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet.
                        Purus malesuada
                        placerat arcu at enim elit in accumsan.</p>

                    <a href="#" class="ease__link type">
                        Improve workflow
                        <ArrowRight/>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ArrowRight from "@svg/ArrowRight.vue"
</script>

<style scoped lang="scss">
.ease {
    @include container;

    &__inner {
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }

    &__image-container {
        position: relative;
        background: url('@img/ease.png') center center / cover no-repeat;
        border-radius: 20px;
        width: 100%;
        height: 496px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0 auto;
    }

    &__article {
        display: flex;
        flex-direction: column;
        max-width: 50%;
        padding: 40px;
        z-index: 1;
        gap: 24px;
    }

    &__title {
        @include font-title(56px, 900, 1.1, var(--color-light));
    }

    &__description {
        font-size: 18px;
        color: var(--color-light);
        font-weight: 200;
    }


    &__link {
        @include link-base(var(--color-light), 16px);
    }
}
</style>