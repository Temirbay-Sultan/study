<template>
  <section class="tools">
    <div class="tools__inner">
      <div class="tools__article">

        <ResponsiveText tag="h2" class="tools__title" :desktopText="t('tools-text.title-desktop')"
          :mobileText="t('tools-text.title-mobile')" />
        <ResponsiveText tag="p" class="tools__description" :desktopText="t('tools-text.description-desktop')"
          :mobileText="t('tools-text.description-mobile')" />
        <a href="#" class="tools__link type">
          {{ t('tools-text.link') }}
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
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

@include respond-to("sm") {
  .tools {
    @include container(48px 16px);

    &__inner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    &__img {
      width: 360px;
      padding-left: 40px;
    }

    &__image {
      display: flex;
      justify-content: flex-start;
    }

    &__title {
      font-size: 40px;
    }

    &__article {
      width: 100%;
    }

    &__link {
      display: none;
    }

    &__description {
      font-size: 16px;
      color: var(--color-blue-gray-900);
    }
  }
}
</style>