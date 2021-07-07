import {
    createStore
} from 'vuex';
import persistedstate from 'vuex-persistedstate'

const store = createStore({
    state() {
        // return {
        //     count: 0,
        //     cart: []
        // } /* 장바구니 */
        return {
            user: {}
        }
    },
    mutations: {
        user(state, data) {
            state.user = data;
        }
        // increment(state) {
        //     state.count++;
        // },
        // addCart(state, data) {
        //     state.cart.push(data);
        //     state.count++;
        // }
        /* 장바구니 */
    },
    plugins: [
        // persistedstate({
        //     paths: ["cart"]
        // }) /* 장바구니 */
        persistedstate({
            paths: ["user"]
        })
    ]
})
export default store;