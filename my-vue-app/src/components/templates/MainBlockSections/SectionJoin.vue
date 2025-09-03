<template>
    <section class="join">
        <div class="join__inner">
            <div class="join__image-container">
                <div class="join__article">
                    <h2 class="join__title">
                        {{ t('join-text.title') }}
                    </h2>
                    <p class="join__description">
                        {{ t('join-text.description') }}
                    </p>
                    <UiButton class="join__my-big-btn">
                        {{ t('join-text.btn-text') }}
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
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

@include respond-to("sm") {
 .join {
    @include container(0);

    &__inner {
      border-radius: 0;
      gap: 24px;
    }

    &__image-container {
      height: 434px;
      border-radius: 0;
    }

    &__article {
      max-width: 100%;
      padding: 0 24px;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      font-size: 16px;
    }
  }
}

</style>