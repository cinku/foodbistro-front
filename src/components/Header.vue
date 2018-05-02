<template>
  <header>
      <div class="container">
        <router-link to="/"><img src="../assets/bistroheader.svg" :class="{ 'header-img--small': $route.path !== '/' }"></router-link>
        <h1 :class="{ 'hidden': $route.path !== '/' }">Welcome to foodbistro</h1>
        <div class="row animated fadeIn" :class="{ 'hidden': $route.path !== '/' }">
          <div class="input-group col-md-6 offset-md-3 mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-utensils"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Co chcesz zjesc?" aria-label="Username">
          </div>
          <div class="input-group col-md-6 offset-md-3 mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker" style="padding-left: 2px;"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Gdzie?" aria-label="Username">
          </div>
          <div class="input-group col-md-6 offset-md-3 mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-globe"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Kuchnia" aria-label="Username">
          </div>
          <div class="col-md-6 offset-md-3">
            <router-link to="/search" tag="button" class="btn btn-block search-btn">SZUKAJ JEDZENIA</router-link>
          </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "hero",

};
</script>

<style lang="scss" scoped>
img {
  width: 550px;
  transition: width 0.3s ease-in-out;
}

.header-img--small {
  width: 400px;
}

h1 {
  font-weight: 300;
  text-transform: uppercase;
}
header {
  position: relative;
  background: #474ebd;
  background: -webkit-radial-gradient(50% 1%, circle, #474ebd, #371c84);
  background: radial-gradient(circle at 50% 1%, #474ebd, #371c84);
  padding: 2rem 0 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 80px -2px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  text-align: center;
  color: white;
  transition: height 1s ease-in-out;
}

.input-group-text {
  background: -webkit-linear-gradient(335deg, #ff79aa, #b743ff);
    background: linear-gradient(115deg, #ff79aa, #b743ff);
    box-shadow: 0 5px 20px -2px rgba(200, 50, 150, 0.7);
    border: none;
    color: white;
    font-weight: 700;
    padding: 0 0.75rem;
    min-width: 40px;
}

input.form-control {
  font-size: 1.1rem !important;
    padding: 0.8rem 1rem !important;
    position: relative;
    background: rgba(0, 10, 25, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-bottom-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 12px -2px rgba(0, 0, 0, 0.3);
    font-weight: 300;
    color: #fff;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &:focus {
      border-color: #5cb3fd;
      outline: 0;
    }
}

.search-btn {
    background: rgba(0, 10, 25, 0.5);
    color: #61efa7;
    border: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 17px !important;
    cursor: pointer;
    z-index: 1;
    padding: 1rem !important;
    font-size: 0.9rem !important;
    box-shadow: 0 5px 12px -2px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
}

.hidden {
  display: none; 
}
</style>
