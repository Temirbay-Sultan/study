<template>
  <section class="enjoy">
    <div class="enjoy__inner">
      <div class="enjoy__image-container">
        <img :src="enjoy" alt="people watching a screen" class="enjoy__image-inner" />
        <img :src="magicEnjoy" alt="magic stars" class="enjoy__image-magic" />
      </div>
      <div class="enjoy__article">
        <h2 class="enjoy__title">
          Enjoy your time working
        </h2>
        <p class="enjoy__description">
          Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac
          neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
        </p>
        <div class="enjoy__more-info">
          <a href="#" class="enjoy__link type">
            See how it helped others
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
</style>
