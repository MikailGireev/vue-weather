<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { API_KEY, BASE_URL } from './constants/index.ts';

import AppHighlights from './components/AppHighlights.vue';
import AppWeatherSummary from './components/AppWeatherSummary.vue';
import type { WeatherResponse } from './types/api';
import AppCoords from './components/AppCoords.vue';
import AppHumidity from './components/AppHumidity.vue';

const city = ref('Paris');
const weatherInfo = ref<WeatherResponse | null>(null);

const getWeather = async () => {
  try {
    const responce = await fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}`);
    const data: WeatherResponse = await responce.json();
    weatherInfo.value = data;
  } catch (error) {
    console.log(`Не удалось получить погоду ${error}`);
  }
};

onMounted(() => {
  getWeather();
});
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input @keyup.enter="getWeather" v-model="city" type="text" class="search" />
                </div>
                <AppWeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <AppHighlights :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div class="sections">
            <AppCoords :coord="weatherInfo?.coord" />
            <AppHumidity :humidity="weatherInfo?.main.humidity" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/styles/variable.scss' as *;
@use './assets/styles/main.scss' as *;

.page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
  background-color: #59585d;
}

.laptop {
  width: 100%;
  padding: 20px;
  background-color: #0e100f;
  border-radius: 25px;
}

.sections {
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.section-left {
  width: 30%;
  padding-right: 10px;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
  }
}

.section-right {
  width: 70%;
  padding-left: 10px;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 16px;
    padding-left: 0;
  }
}

.city-inner {
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 10px;
    width: 25px;
    height: 25px;
    background: url('./assets/img/search.svg') no-repeat 50% 50%;
    background-size: contain;
    transform: translateY(50%);
    cursor: pointer;
  }
}

.info {
  height: 100%;
  padding: 16px;
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%;
  background-size: cover;
  border-radius: 25px;
}

.search {
  width: 100%;
  padding: 16px;
  font-family: 'Inter', Arial, sans-serif;
  color: $white;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

.section-bottom {
  width: 50%;
  margin-top: 16px;

  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>
