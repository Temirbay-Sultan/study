<template>
  <section class="enjoy">
    <div class="enjoy__inner">
      <div class="enjoy__image-container">
        <img :src="enjoy" alt="people watching a screen" class="enjoy__image-inner" />
        <img :src="magicEnjoy" alt="magic stars" class="enjoy__image-magic" />
      </div>
      <div class="enjoy__article">
        <h2 class="enjoy__title">
          {{ t('enjoy-text.title') }}
        </h2>
        <p class="enjoy__description">
          {{ t('enjoy-text.description') }}
        </p>
        <div class="enjoy__more-info">
          <a href="#" class="enjoy__link type">
            {{ t('enjoy-text.link') }}
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import enjoy from "@img/enjoy.png"
import magicEnjoy from "@img/magic-enjoy.png"
import ArrowRight from "@svg/ArrowRight.vue"
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style scoped lang="scss">
.enjoy {
  @include container;

  &__inner {
    @include flex-center-between;
  }

  &__article {
    display: flex;
    flex-direction: column;
    width: 40%;
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

  &__image-container {
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
    top: 35%;
    left: -10%;
    z-index: 1;
  }
}

@include respond-to("sm") {
    .enjoy {
    @include container(48px 16px);

    &__inner {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 24px;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      font-size: 16px;
      color: var(--color-blue-gray-900);
    }

    &__image-container {
      order: 2;
    }

    &__image-magic{
      left: -18px;
      top: 25px;
    }

    &__article {
      order: 1;
      width: 100%;
    }
  }
}
</style>
