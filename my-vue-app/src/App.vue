<template>
  <header class="header">
    <div class="container-xl">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <img src="./images/svg/magnifico.svg" alt="Magnifico logo" class="header__logo-image" />
        </a>
        <HeaderNav class="header__nav" />
        <div class="header__desktop">
          <a href="#" class="header__login">Log In</a>
          <UiButton class="header__signup-btn">
            Sign Up Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                fill="currentColor" />
            </svg>
          </UiButton>
        </div>
        <div class="header__arrow-mobile">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 8C3 7.58579 3.33579 7.25 3.75 7.25H20.25C20.6642 7.25 21 7.58579 21 8C21 8.41421 20.6642 8.75 20.25 8.75H3.75C3.33579 8.75 3 8.41421 3 8Z"
              fill="#0F172A" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 12.5C3 12.0858 3.33579 11.75 3.75 11.75H20.25C20.6642 11.75 21 12.0858 21 12.5C21 12.9142 20.6642 13.25 20.25 13.25H3.75C3.33579 13.25 3 12.9142 3 12.5Z"
              fill="#0F172A" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 17C3 16.5858 3.33579 16.25 3.75 16.25H20.25C20.6642 16.25 21 16.5858 21 17C21 17.4142 20.6642 17.75 20.25 17.75H3.75C3.33579 17.75 3 17.4142 3 17Z"
              fill="#0F172A" />
          </svg>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section class="project">
      <div class="project__inner">
        <div class="project__article">
          <ResponsiveText tag="h2" class="project__title" desktopText="Team projects, done well"
            mobileText="Teach students worldwide" />

          <ResponsiveText tag="p" class="project__description" desktopText="The only platform that gives your team all the tools needed to
             work together on their awesome projects." mobileText="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
             massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies." />

          <form class="project__form">
            <label class="visually-hidden" for="email">
              Email
            </label>
            <div class="project__input-wrapper">
              <svg width="15" height="15" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.598 2L9.345 7.12C9.52813 7.28306 9.76479 7.37316 10.01 7.37316C10.2552 7.37316 10.4919 7.28306 10.675 7.12L16.423 2H3.598ZM18 3.273L12.006 8.614C11.4565 9.10374 10.7461 9.37436 10.01 9.37436C9.27392 9.37436 8.56352 9.10374 8.014 8.614L2 3.254V12H18V3.273ZM2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0Z"
                  fill="#94A3B8" />
              </svg>
              <input class="project__form-input input" id="email" placeholder="Enter work email" type="email" />
            </div>
            <UiButton>
              Sign Up Free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="currentColor" />
              </svg>
            </UiButton>
          </form>

          <div class="project__logos">
            <img src="./images/project-logo/1.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/2.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/3.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/4.png" alt="project logo" class="project__logo">
          </div>
        </div>

        <div class="project__image-container">
          <img src="./images/project-img.png" alt="people watching a screen" class="project__image-inner" />
          <img src="./images/magic.png" alt="magic stars" class="project__image-magic">
        </div>
      </div>
    </section>

    <section class="enjoy">

      <div class="enjoy__inner">
        <div class="enjoy__image-container">
          <img src="./images/enjoy.png" alt="people watching a screen" class="enjoy__image-inner" />
          <img src="./images/magic-enjoy.png" alt="magic stars" class="enjoy__image-magic">
        </div>
        <div class="enjoy__article">
          <h2 class="enjoy__title">
            Enjoy your time working
          </h2>
          <p class="enjoy__description">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque
            lobortis
            sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
          </p>
          <div class="enjoy__more-info">
            <a href="#" class="enjoy__link type">
              See how it helped others
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="currentColor" />
              </svg>

            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="tools">
      <div class="tools__inner">
        <div class="tools__article">

          <ResponsiveText tag="h2" class="tools__title" desktopText="Get all the tools your team needs"
            mobileText="Enjoy your time working" />

          <ResponsiveText tag="p" class="tools__description" desktopText="Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
             Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis 
             ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan." mobileText="Etiam condimentum duis molestie malesuada volutpat pellentesque sed. 
            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus 
            imperdiet aenean nulla id." />
          <a href="#" class="tools__link type">
            Check the tools
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                fill="currentColor" />
            </svg>
          </a>
        </div>
        <div class="tools__img">
          <img src="./images/tools.png" alt="google tools" class="tools__image">
        </div>
      </div>
    </section>

    <section class="ease">
      <div class="ease__inner">
        <div class="ease__image-container">
          <div class="ease__article">
            <h2 class="ease__title">Problems come and get solved with ease</h2>
            <p class="ease__description">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
              pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada
              placerat arcu at enim elit in accumsan.</p>

            <a href="#" class="ease__link type">
              Improve workflow
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="workflow">
      <div class="container">
        <div class="workflow__inner">
          <div class="workflow__article">
            <h2 class="workflow__title">
              Improve workflow
            </h2>
            <ButtonGroup :buttons="['Research', 'Plan', 'Design']" @click="onClick" />

            <p class="workflow__description">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
              pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada
              placerat arcu at enim elit in accumsan.</p>

            <a href="#" class="workflow__link type">
              Check the tools
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="currentColor" />
              </svg>
            </a>
          </div>
          <div class="workflow__image-container">
            <img src="./images/workflow.png" alt="people watching a screen" class="workflow__image-inner" />
            <img src="./images/magic-workflow.png" alt="magic stars" class="workflow__image-magic">
          </div>
        </div>
      </div>
    </section>

    <section class="join">
      <div class="join__inner">
        <div class="join__image-container">
          <div class="join__article">
            <h2 class="join__title">
              Join the community today
            </h2>
            <p class="join__description">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
              varius
              tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
            </p>
            <UiButton class="join__my-big-btn">
              Sign Up Free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="currentColor" />
              </svg>
            </UiButton>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <a href="#" class="footer__logo">
          <img src="./images/svg/magnifico.svg" alt="Magnifico logo" class="footer__logo-image" />
        </a>
        <p class="footer__copyright base">
          @ 2023. All rights reserved.
        </p>
      </div>
      <FooterColumn :items="['Terms', 'Privacy', 'Support', 'About', 'Resources', 'Contact']" @click="onClick" />

    </div>
  </footer>
</template>

<script setup>
import UiButton from './components/UiButton.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import FooterColumn from './components/FooterColumn.vue';
import HeaderNav from './components/HeaderNav.vue';
import ResponsiveText from "./components/ResponsiveText.vue"

</script>

<style scoped lang="scss">
@use "./assets/styles/mixins" as *;

.header {
  &__inner {
    @include flex-center-between;
  }

  &__nav {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__menu {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  &__menu-link {
    color: var(--color-blue-gray);
    font-size: 16px;
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

.project {
  @include container;
  border-top: 1px solid var(--color-blue-gray-300);
  border-bottom: 1px solid var(--color-blue-gray-300);

  &__inner {
    display: flex;
    align-items: center;
    gap: 80px;

  }

  &__article {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
  }

  &__title {
    @include font-title(72px, 900, 1.1, var(--color-blue-gray));
  }

  &__description {
    font-size: 18px;
    color: var(--color-blue-gray-600);
    font-weight: 200;
  }

  &__input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-blue-gray);
    border-radius: var(--border-radius);
    padding: 0 12px;
    height: var(--input-height);
    max-width: 400px;
    background-color: transparent;
  }

  &__input-wrapper svg {
    flex-shrink: 0;
  }

  &__form-input {
    color: var(--color-blue-gray-600);
    background-color: transparent;
    height: 100%;
    max-width: 400px;
  }

  &__form {
    display: flex;
    gap: 16px;
  }

  &__logos {
    display: flex;
    background-color: var(--color-blue-gray-100);
    gap: 20px;
    padding: 16px;
    border-radius: var(--border-radius);
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
    @include inside-image(-55px, -55px);
    z-index: 1;
  }

}

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

.ease {
  @include container;

  &__inner {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }

  &__image-container {
    position: relative;
    background: url('./images/ease.png') center center / cover no-repeat;
    border-radius: 20px;
    width: 100%;
    height: 496px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
  }

  &__article {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    padding: 40px;
    z-index: 1;
    gap: 24px;
  }

  &__title {
    @include font-title(56px, 900, 1.1, var(--color-light));
  }

  &__description {
    font-size: 18px;
    color: var(--color-light);
    font-weight: 200;
  }


  &__link {
    @include link-base(var(--color-light), 16px);
  }
}

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

.join {
  @include container;


  &__inner {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }

  &__image-container {
    position: relative;
    background: url('./images/join.png') center center / cover no-repeat;
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

.footer {

  @include container(10px 80px 92px);

  &__inner {
    @include flex-center-between;
  }

  &__brand {
    display: flex;
    gap: 8px;
  }

  &__logo-image {
    min-width: 80px;
    height: 20px;
  }

}

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
