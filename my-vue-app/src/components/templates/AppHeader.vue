<template>
  <header class="header">
    <div class="container-xl">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <SiteLogo class="header__logo-image" />
        </a>
        <HeaderNav :items="navItems" :with-icons="true" />
        <div class="header__desktop">
          <select v-model="locale" class="header__locale-select">
            <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
          <a href="#" class="header__login">{{ t("header.greet") }}</a>
          <UiButton class="header__signup-button">
            {{ t('header.btn-text') }}
            <ArrowRight />
          </UiButton>
        </div>
        <div class="header__arrow-mobile">
          <MenuIcon />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import UiButton from '../UI/UiButton.vue';
import HeaderNav from '../HeaderNav.vue';
import SiteLogo from '@svg/SiteLogo.vue';
import ArrowRight from '../icons/ArrowRight.vue';
import MenuIcon from '../icons/MenuIcon.vue';
import { useI18n } from 'vue-i18n';
const { t, locale, availableLocales } = useI18n({ useScope: 'global' });



const navItems = [
  { labelKey: 'nav.products', href: '/products' },
  { labelKey: 'nav.solutions', href: '/solutions' },
  { labelKey: 'nav.services', href: '/services' },
  { labelKey: 'nav.help', href: '/help' },
  { labelKey: 'nav.pricing', href: '/pricing' }
]

</script>

<style scoped lang="scss">
.header {
  &__inner {
    @include flex-center-between;
  }

  &__desktop {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  &__login {
    border-radius: var(--border-radius);
    color: var(--color-blue-600);
    padding: 10px;
  }

  &__locale-select {
    padding: 6px 10px;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-blue-gray-300);
    background: white;
    cursor: pointer;
  }

  &__login:hover {
    background-color: var(--color-blue-gray-300);
  }

  &__signup-button {
    font-weight: normal;

    svg {
      flex-shrink: 0;
    }
  }

  &__arrow-mobile {
    display: none;
  }
}

@include respond-to("sm") {
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
}
</style>
