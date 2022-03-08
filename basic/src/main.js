import { createApp, ref } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// Vue 애플리케이션 생성
// const app = createApp({});

// // button-counter라는 새로운 전역 컴포넌트 정의
// app.component("button-counter", {
//     // index.html에서 받은 props를 옵션을 이용해 점검할 수 있다.
//     props: {
//         title: {
//             type: String,
//             required: true,
//             default: "default",
//             validator: function (value) {
//                 return typeof value == String;
//             },
//         },
//         arr: {
//             type: Object,
//             required: true,
//             default: [4, 5, 6],
//             validator: function (value) {
//                 return typeof value == Object;
//             },
//         },
//     },
//     // non-prop을 사용하기 위해서는 setup함수의 두번째 매개변수인 context를 이용해야한다. context에 attrs가 존재하기 때문이다.
//     setup(props, context) {
//         console.log(context.attrs.id);
//         const count = ref(0);
//         const msg = context.attrs.msg;
//         return { count, msg };
//     },
//     // template라고 생각하고 작성하면 된다.
//     template: `
//     <h2>{{title}}</h2>
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>
//     <ol>
//         <li v-for="(element, idx) in arr" :key="idx">{{element}}</li>
//     </ol>
//     <p>{{$attrs.msg}}</p>
//     `,
// });
// // setup 함수에서 msg를 정의하고, template에 msg를 호출해도 되고, setup함수에서 정의하지 않고 $attrs.msg를 사용해도 msg를 호출 할 수 있다.
// app.mount("#components-demo");
