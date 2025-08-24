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

      <FooterColumn
        :items="footerItems"
      />
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
        align-items: center;
        gap: 8px;
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
</style>