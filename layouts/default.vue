<template>
   <div>
    <!-- begin navigation -->
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item is-half">
            <img
              src="https://www.graphicsprings.com/filestorage/stencils/f6e5c06cad423f0f7e6cae51c7a41f37.svg"
              alt="Logo: an image of a doggy biting a juicy bone!"
              width="112"
              height="28"
            />
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
          <nuxt-link
            active-class="is-active"
            to="/pet/new"
            class="navbar-item is-tab"
            exact
          >Post your own pet 😎</nuxt-link>
        </div>
      </div>
    </nav>
    <Nuxt />
     <!-- begin footer -->
    <footer class="footer home-footer has-background-black">
      <div class="content has-text-centered">
        <p class="has-text-white">
          <strong class="has-text-white">Pet adoption website</strong> by
          <a href="https://github.com/Jordanirabor">Jordan</a>
        </p>
      </div>
    </footer>
    <!-- end footer -->
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
