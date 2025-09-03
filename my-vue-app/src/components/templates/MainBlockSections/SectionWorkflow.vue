<template>
    <section class="workflow">
        <div class="container">
            <div class="workflow__inner">
                <div class="workflow__article">
                    <h2 class="workflow__title">
                        {{ t('workflow-text.title') }}
                    </h2>
                    <ButtonGroup :buttons="buttons" @click="onClick" />

                    <p class="workflow__description">
                        {{ t('workflow-text.description') }}
                    </p>

                    <a href="#" class="workflow__link type">
                        {{ t('workflow-text.btn-text') }}
                        <ArrowRight />
                    </a>
                </div>
                <div class="workflow__image-container">
                    <img src="@img/workflow.png" alt="people watching a screen" class="workflow__image-inner" />
                    <img src="@img/magic-workflow.png" alt="magic stars" class="workflow__image-magic">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ArrowRight from "@svg/ArrowRight.vue"
import ButtonGroup from "../../UI/ButtonGroup.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
import { computed } from 'vue'

const buttons = computed(() => [
    t('workflow-text.research'),
    t('workflow-text.plan'),
    t('workflow-text.design')
])

const onClick = (button) => {
    console.log('Clicked:', button)
}
</script>

<style scoped lang="scss">
.workflow {
    @include container;

    &__inner {
        @include flex-center-between;
        gap: 80px;
    }

    &__article {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
    }

    &__title {
        @include font-title(56px, 900, 1.1, var(--color-blue-gray));
    }

    &__description {
        font-size: 18px;
        font-weight: 200;
    }

    &__link {
        @include link-base(var(--color-blue-600), 16px);
    }

    &__image-container {
        flex: 1;
        position: relative;
        display: inline-block;
    }

    &__image-inner {
        display: block;
        z-index: 2;
        position: relative;
    }

    &__image-magic {
        position: absolute;
        top: 20%;
        right: -10%;
        z-index: 1;
    }
}

@include respond-to("sm") {

    .workflow {
        @include container(48px 16px);

        &__inner {
            flex-direction: column;
            gap: 32px;
        }

        &__title {
            font-size: 40px;
        }

        &__image-magic {
            display: none;
        }

        &__description {
            font-size: 16px;
        }
    }
}
</style>