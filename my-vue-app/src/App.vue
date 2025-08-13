<template>
  <header class="header">
    <div class="container-xl">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <img src="./images/svg/magnifico.svg" alt="Magnifico logo" class="header__logo-image" />
        </a>
        <nav class="header__nav">
          <ul class="header__menu">
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Products
                <svg class="header__menu-icon" width="15" height="8" viewBox="0 0 15 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.57114 5.314L12.5211 0.364004C12.6134 0.268494 12.7237 0.192312 12.8457 0.139903C12.9677 0.0874936 13.099 0.0599074 13.2317 0.0587536C13.3645 0.0575998 13.4962 0.0829015 13.6191 0.133182C13.742 0.183463 13.8536 0.257716 13.9475 0.351609C14.0414 0.445502 14.1157 0.557154 14.166 0.68005C14.2162 0.802946 14.2415 0.934626 14.2404 1.06741C14.2392 1.20018 14.2117 1.3314 14.1592 1.45341C14.1068 1.57541 14.0307 1.68576 13.9351 1.778L8.27814 7.435C8.09062 7.62247 7.83631 7.72779 7.57114 7.72779C7.30598 7.72779 7.05167 7.62247 6.86414 7.435L1.20714 1.778C1.11163 1.68576 1.03545 1.57541 0.983042 1.45341C0.930633 1.3314 0.903047 1.20018 0.901893 1.06741C0.900739 0.934626 0.926041 0.802946 0.976322 0.68005C1.0266 0.557154 1.10086 0.445502 1.19475 0.351609C1.28864 0.257716 1.40029 0.183463 1.52319 0.133182C1.64609 0.0829015 1.77777 0.0575998 1.91054 0.0587536C2.04332 0.0599074 2.17454 0.0874936 2.29655 0.139903C2.41855 0.192312 2.5289 0.268494 2.62114 0.364004L7.57114 5.314Z"
                    fill="#0F172A" />
                </svg>
              </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Solutions
                <svg class="header__menu-icon" width="15" height="8" viewBox="0 0 15 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.57114 5.314L12.5211 0.364004C12.6134 0.268494 12.7237 0.192312 12.8457 0.139903C12.9677 0.0874936 13.099 0.0599074 13.2317 0.0587536C13.3645 0.0575998 13.4962 0.0829015 13.6191 0.133182C13.742 0.183463 13.8536 0.257716 13.9475 0.351609C14.0414 0.445502 14.1157 0.557154 14.166 0.68005C14.2162 0.802946 14.2415 0.934626 14.2404 1.06741C14.2392 1.20018 14.2117 1.3314 14.1592 1.45341C14.1068 1.57541 14.0307 1.68576 13.9351 1.778L8.27814 7.435C8.09062 7.62247 7.83631 7.72779 7.57114 7.72779C7.30598 7.72779 7.05167 7.62247 6.86414 7.435L1.20714 1.778C1.11163 1.68576 1.03545 1.57541 0.983042 1.45341C0.930633 1.3314 0.903047 1.20018 0.901893 1.06741C0.900739 0.934626 0.926041 0.802946 0.976322 0.68005C1.0266 0.557154 1.10086 0.445502 1.19475 0.351609C1.28864 0.257716 1.40029 0.183463 1.52319 0.133182C1.64609 0.0829015 1.77777 0.0575998 1.91054 0.0587536C2.04332 0.0599074 2.17454 0.0874936 2.29655 0.139903C2.41855 0.192312 2.5289 0.268494 2.62114 0.364004L7.57114 5.314Z"
                    fill="#0F172A" />
                </svg>
              </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Services
                <svg class="header__menu-icon" width="15" height="8" viewBox="0 0 15 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.57114 5.314L12.5211 0.364004C12.6134 0.268494 12.7237 0.192312 12.8457 0.139903C12.9677 0.0874936 13.099 0.0599074 13.2317 0.0587536C13.3645 0.0575998 13.4962 0.0829015 13.6191 0.133182C13.742 0.183463 13.8536 0.257716 13.9475 0.351609C14.0414 0.445502 14.1157 0.557154 14.166 0.68005C14.2162 0.802946 14.2415 0.934626 14.2404 1.06741C14.2392 1.20018 14.2117 1.3314 14.1592 1.45341C14.1068 1.57541 14.0307 1.68576 13.9351 1.778L8.27814 7.435C8.09062 7.62247 7.83631 7.72779 7.57114 7.72779C7.30598 7.72779 7.05167 7.62247 6.86414 7.435L1.20714 1.778C1.11163 1.68576 1.03545 1.57541 0.983042 1.45341C0.930633 1.3314 0.903047 1.20018 0.901893 1.06741C0.900739 0.934626 0.926041 0.802946 0.976322 0.68005C1.0266 0.557154 1.10086 0.445502 1.19475 0.351609C1.28864 0.257716 1.40029 0.183463 1.52319 0.133182C1.64609 0.0829015 1.77777 0.0575998 1.91054 0.0587536C2.04332 0.0599074 2.17454 0.0874936 2.29655 0.139903C2.41855 0.192312 2.5289 0.268494 2.62114 0.364004L7.57114 5.314Z"
                    fill="#0F172A" />
                </svg>
              </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Help Center
                <svg class="header__menu-icon" width="15" height="8" viewBox="0 0 15 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.57114 5.314L12.5211 0.364004C12.6134 0.268494 12.7237 0.192312 12.8457 0.139903C12.9677 0.0874936 13.099 0.0599074 13.2317 0.0587536C13.3645 0.0575998 13.4962 0.0829015 13.6191 0.133182C13.742 0.183463 13.8536 0.257716 13.9475 0.351609C14.0414 0.445502 14.1157 0.557154 14.166 0.68005C14.2162 0.802946 14.2415 0.934626 14.2404 1.06741C14.2392 1.20018 14.2117 1.3314 14.1592 1.45341C14.1068 1.57541 14.0307 1.68576 13.9351 1.778L8.27814 7.435C8.09062 7.62247 7.83631 7.72779 7.57114 7.72779C7.30598 7.72779 7.05167 7.62247 6.86414 7.435L1.20714 1.778C1.11163 1.68576 1.03545 1.57541 0.983042 1.45341C0.930633 1.3314 0.903047 1.20018 0.901893 1.06741C0.900739 0.934626 0.926041 0.802946 0.976322 0.68005C1.0266 0.557154 1.10086 0.445502 1.19475 0.351609C1.28864 0.257716 1.40029 0.183463 1.52319 0.133182C1.64609 0.0829015 1.77777 0.0575998 1.91054 0.0587536C2.04332 0.0599074 2.17454 0.0874936 2.29655 0.139903C2.41855 0.192312 2.5289 0.268494 2.62114 0.364004L7.57114 5.314Z"
                    fill="#0F172A" />
                </svg>
              </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Pricing
              </a>
            </li>
          </ul>
        </nav>
        <div class="header__auth">
          <a href="#" class="header__login">Log In</a>
          <button type="button" class="header__signup-button button button-blue">Sign Up Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <section class="project">
    <div class="container">
      <div class="project__inner">
        <article class="project__article">
          <h2 class="project__title">
            Team projects, done well
          </h2>

          <p class="project__description">
            The only platform that gives your team all the tools needed to work together on their awesome projects.
          </p>

          <form class="project__form">
            <label class="visually-hidden" for="email">
              Email</label>
            <div class="project__input-wrapper">
              <svg width="15" height="15" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.598 2L9.345 7.12C9.52813 7.28306 9.76479 7.37316 10.01 7.37316C10.2552 7.37316 10.4919 7.28306 10.675 7.12L16.423 2H3.598ZM18 3.273L12.006 8.614C11.4565 9.10374 10.7461 9.37436 10.01 9.37436C9.27392 9.37436 8.56352 9.10374 8.014 8.614L2 3.254V12H18V3.273ZM2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0Z"
                  fill="#94A3B8" />
              </svg>

              <input class="project__form-input input" id="email" placeholder="Enter work email" type="email" />

            </div>
            <button type="submit" class="project__signup-button button button-blue">
              Sign Up Free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                  fill="white" />
              </svg>
            </button>
          </form>

          <div class="project__logos">
            <img src="./images/project-logo/1.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/2.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/3.png" alt="project logo" class="project__logo">
            <img src="./images/project-logo/4.png" alt="project logo" class="project__logo">
          </div>
        </article>

        <div class="project__image-container">
          <img src="./images/project-img.png" alt="people watching a screen" class="project__image-inner" />
          <img src="./images/magic.png" alt="magic stars" class="project__image-magic">
        </div>
      </div>
    </div>
  </section>
  <section class="enjoy">
    <div class="container">
      <div class="enjoy__inner">
        <div class="enjoy__image-container">
          <img src="./images/enjoy.png" alt="people watching a screen" class="enjoy__image-inner" />
          <img src="./images/magic-enjoy.png" alt="magic stars" class="enjoy__image-magic">
        </div>
        <article class="enjoy__article">
          <h2 class="enjoy__title">
            Enjoy your time working
          </h2>
          <p class="enjoy__description">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis
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
        </article>
      </div>
    </div>
  </section>

  <section class="tools">
    <div class="container">
      <div class="tools__inner">
        <article class="tools__article">
          <h2 class="tools__title">
            Get all the tools your team needs
          </h2>
          <p class="tools__description">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
            varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
            accumsan.
          </p>
          <a href="#" class="tools__link type">
            Check the tools
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741412 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.29301L13.707 5.95001C13.8002 6.04266 13.8741 6.15282 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03986C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.39179 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z"
                fill="currentColor" />
            </svg>
          </a>
        </article>
        <div class="tools__img">
          <img src="./images/tools.png" alt="google tools" class="tools__image">
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: 'FlexCenterBetween'
}
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

  &__auth {
    display: flex;
    gap: 24px;
    align-items: center;
  }


  &__login {
    color: var(--color-blue-600);
  }

  &__signup-button {
    font-weight: normal;

    svg {
      flex-shrink: 0;
    }
  }
}

.project {
  border-top: 1px solid var(--color-blue-gray-300);
  border-bottom: 1px solid var(--color-blue-gray-300);

  &__inner {
    @include flex-center-around;

  }

  &__article {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 15px;
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
    background-color: var(--color-blue-gray-300);
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
  &__inner {
    @include flex-center-around;
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
    display: flex;
    gap: 16px;
    align-items: center;
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
  &__inner {
    @include flex-center-around;
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
    display: flex;
    gap: 16px;
    align-items: center;
  }

}
</style>
