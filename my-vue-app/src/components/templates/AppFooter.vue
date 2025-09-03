<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <a href="#" class="footer__logo">
          <div class="footer__logo-image">
            <SiteLogo />
          </div>
        </a>
        <p class="footer__copyright base">
          © 2023. All rights reserved.
        </p>
      </div>

      <FooterColumn :items="footerItems" />
    </div>
  </footer>
</template>

<script setup>
import FooterColumn from '../FooterColumn.vue'
import SiteLogo from '../icons/SiteLogo.vue'

const footerItems = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]
</script>


<style scoped lang="scss">
.footer {
  @include container(10px 80px 92px);

  &__inner {
    @include flex-center-between;
  }

  &__brand {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    gap: 10px;
  }

  &__logo-image {
    min-width: 80px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 100%;
      width: auto;
      display: block;
    }
  }
}

.footer {
  @include respond-to("sm") {
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