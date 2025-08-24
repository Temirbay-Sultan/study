<template>
    <section class="tools">
        <div class="tools__inner">
            <div class="tools__article">

                <ResponsiveText tag="h2" class="tools__title" desktopText="Get all the tools your team needs"
                    mobileText="Enjoy your time working" />

                <ResponsiveText tag="p" class="tools__description" desktopText="Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis 
              ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan." mobileText="Etiam condimentum duis molestie malesuada volutpat pellentesque sed. 
              Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus 
              imperdiet aenean nulla id." />
                <a href="#" class="tools__link type">
                    Check the tools
                    <ArrowRight />
                </a>
            </div>
            <div class="tools__img">
                <img :src="tools" alt="google tools" class="tools__image">
            </div>
        </div>
    </section>
</template>

<script setup>
import tools from "@img/tools.png"
import ArrowRight from "@svg/ArrowRight.vue"
import ResponsiveText from "@components/ResponsiveText.vue"
</script>

<style lang="scss" scoped>
.tools {
    @include container;

    &__inner {
        @include flex-center-between;
    }

    &__article {
        display: flex;
        flex-direction: column;
        width: 46%;
        gap: 15px;

    }

    &__title {
        @include font-title(56px, 900, 1.1, var(--color-blue-gray));
    }

    &__description {
        font-size: 18px;
        color: var(--color-blue-gray-600);
        font-weight: 200;
    }


    &__link {
        @include link-base(var(--color-blue-600), 16px);

    }

}
</style>