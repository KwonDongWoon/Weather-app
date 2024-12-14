import { createStore } from 'vuex';

//store 만들기
export default createStore({
    state: {
        // initial state
        count: 0,
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        },
        toggle: false, //true일때 about을 보여주기
    },
    mutations: {
        // mutations(데이터 변경)
        addCount(state, palyload) {
            state.count += 1 + palyload;
        },
        updateWeather(state, palyload){
            state.weatherData.icon = palyload.weather[0].icon;
            state.weatherData.temp = palyload.main.temp;
            state.weatherData.text = palyload.weather[0].description;
            state.weatherData.location = palyload.sys.country;
            state.weatherData.city = palyload.name;
        },
        onSearchCity(state, palyload) {
            state.weatherData.city = palyload;
        },
        toggleButton(state){
            state.toggle = !state.toggle;
        }
    },
    actions: {
        getWeather(context) {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
            fetch(API_URL)
                .then(res => res.json())
                //서버에서 받은 데이터를 json으로 변환
                .then(data => {
                    console.log(data);
                    // mutation 함수로 날씨 정보 업데이트
                    context.commit('updateWeather', data);
                })
                .catch(err => {
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
                })
        }
    }
})