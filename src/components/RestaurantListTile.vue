<template>
<div class="col-md-6">
  <div class="restaurant-tile mb-2">
      <div class="restaurant-tile__logo">
        <img src="https://placekitten.com/100/100">
      </div>
      <div class="restaurant-tile__inner">
        <p style="margin-bottom: 0.5rem; font-size: 20px;"><strong>{{restaurant.name}}</strong></p>
        <p style="font-size: 14px;"><i>{{restaurant.address}}</i></p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["restaurant"]
};
</script>

<style lang="scss">
.restaurant-tile {
  width: 100%;
  min-height: 100px;
  border-top: 3px solid #7755ff;
  color: #fff;
  text-align: left;
  background: rgba(0, 0, 0, 0.2);

  &__inner {
    padding: 17px 30px 10px;
    display: inline-block;
  }

  &__logo {
    float: left;
  }
}
</style>
