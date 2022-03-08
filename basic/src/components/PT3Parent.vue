<script setup>
import PT3Child from "./PT3Child.vue";

// 자식 컴포넌트에서 전달받은 이벤트 함수를 처리(handler)하는 함수를 정의한다.
const updateChange = (contents) => {
    contents = contents;
};
</script>

<template>
    <!-- 부모 컴포넌트에서 자식 컴포넌트로 contents props를 전달한다. -->
    <PT3Child
        @FromChild="updateChange"
        contents="부모 컴포넌트에서 전달된 값"
    />
    {{ contents }}
</template>

<style scoped></style>
