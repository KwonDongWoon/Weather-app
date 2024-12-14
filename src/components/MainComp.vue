<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import WeatherInfo from './WeatherInfo.vue';

// const emits = defineEmits(['onSearchCity']);

// 날씨 데이터 상태변수 -> stor.js으로 props 사용하지 않아도됨
// const props = defineProps({
//     weatherData: Object,
// })
// console.log(props.weatherData);


//검색어 이벤트 함수
// const onSearchCity = (city) => {
//     console.log(city);
//     emits('onSearchCity', city);
// }
</script>

<template>
    <div class="container">
        <!-- <SearchBar @onSearchCity="onSearchCity"/>
        <WeatherInfo :weatherData="props.weatherData" /> -->
        <SearchBar />
        <WeatherInfo />
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 20px;
}
</style>
