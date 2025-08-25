  <template>
    <AppHeader />
    <MainBlock />

    <AppFooter />
  </template>

<script setup>

import AppFooter from './components/templates/AppFooter.vue';
import AppHeader from './components/templates/AppHeader.vue';
import MainBlock from './components/templates/MainBlock.vue';

</script>

<style scoped lang="scss">
@media (max-width: 767px) {
  .header {
    .container-xl {
      padding: 16px;
      justify-content: center;
      width: 100%;
    }

    display: grid;
    place-items: center;
    text-align: center;
    width: 100%;


    &__nav {
      display: none;
    }

    &__desktop {
      display: none;
    }

    &__arrow-mobile {
      display: flex;
    }

  }

  .project {
    @include container(48px 16px);

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

    &__article {
      order: 1;
      width: 100%;
    }
  }

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
      display: block;
      margin: 0 auto;
      transform: scale(1.3);
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

  .ease {
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

  .footer {
    @include container(24px 16px);

    &__inner {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    &__brand {
      flex-direction: column;
    }

    &__column {
      gap: 8px;
    }
  }
}
</style>
