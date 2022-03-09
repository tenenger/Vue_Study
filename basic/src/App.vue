<script>
import { Practices01, Practices02 } from "/@components/index.vue";

// import하는 컴포넌트가 있으면, 이를 이용하겠다고 작성해줘야 에러가 안난다.
export default {
    components: {
        Practices01,
    },
};
</script>

<template>
    <Practices01></Practices01>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
