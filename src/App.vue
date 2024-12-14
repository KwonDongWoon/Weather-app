<script setup>
import Navbar from './components/Navbar.vue';
import Maincomp from './components/MainComp.vue';
import About from './components/About.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

// 날씨 데이터 상태변수 -> store.js 이동
// const weatherData = ref({
//   icon: 'icon',
//   temp: 0,
//   text: 'text',
//   location: 'location',
//   city: 'Seoul',
// });

//날씨 데이터 가져오기 -> store.js 이동
// function getWeather() {
//   console.log('mounted')
//   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=14220fcf5d17dbe367ee2fde5bc4c49f`
//   fetch(API_URL)
//     .then(res => res.json())
//     //서버에서 받은 데이터를 json으로 변환
//     .then(data => {
//       console.log(data);
//       weatherData.value.icon = data.weather[0].icon;
//       weatherData.value.temp = data.main.temp;
//       weatherData.value.text = data.weather[0].description;
//       weatherData.value.location = data.sys.country;
//       weatherData.value.city = data.name;
//       console.log(weatherData.value);
//     })
//     .catch(err => {
//       alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
//     })
// }

//앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  store.dispatch('getWeather');
})

const onSearchCity = (city) => {
  weatherData.value.city = city;
  getWeather();
}

</script>

<template>
  <!-- <p>count: {{ $store.state.count }}</p>
  <button @click="$store.commit('addCount', 10)">count++</button> -->


  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <!-- <Maincomp :weatherData="weatherData" @onSearchCity="onSearchCity" /> -->
  <div v-if="!$store.state.toggle">
    <Maincomp />
  </div>
  <div v-else>
    <About/>
  </div>
</template>

<style scoped lang="scss"></style>
