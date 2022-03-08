<script>
// props는 defineProps 함수를 사용해서 정의한다.
import { defineProps, defineEmits } from "vue";

// 부모 컴포넌트에서 전달받은 contents를 props로 정의한다.
const props = defineProps({
    contents: {
        type: String,
    },
});
const emit = defineEmits(["contents"]);
const action = (e) => {
    emit("FromChild", e.target.value);
};
</script>

<template>
    <div>
        <!-- defineProps로 정의된 props만 이용가능하다. -->
        <h2>{{ contents }} 입니다.</h2>
    </div>
    <input v-model="contents" @input="action" />
</template>

<style scoped></style>
