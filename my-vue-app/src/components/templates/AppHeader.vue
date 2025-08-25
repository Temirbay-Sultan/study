<template>
  <header class="header">
    <div class="container-xl">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <SiteLogo class="header__logo-image" />
        </a>
        <HeaderNav :items="navItems" :with-icons="true" />
        <div class="header__desktop">
          <a href="#" class="header__login">Log In</a>
          <UiButton class="header__signup-button">
            Sign Up Free
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

const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Help Center', href: '/help' },
  { label: 'Pricing', href: '/pricing' },
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
</style>
