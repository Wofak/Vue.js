<template>
    <div>
        <div v-show="!user.email" id="naverIdLogin"></div>
<button v-show="user.email" @click="logout">LogOut</button>

    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    computed: {
        user() { 
        return this.$store.state.user
    }
    },
    setup() {},
    created() {},
    mounted() {
        this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "fECEiSTrSWtfpZ_Ih0ex", 
      callbackUrl: "http://localhost:8080/naverlogin2",
      isPopup: false,
      loginButton: { color: "white", type: 2, height: 80 },
    });
    this.naverLogin.init();
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);
        this.$store.commit("user", this.naverLogin.user);
      }
    });
    },
    unmounted() {},
    methods: {
        logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url =
        "/oauth2.0/token?grant_type=delete&client_id=fECEiSTrSWtfpZ_Ih0ex&client_secret=8QLdyJENqm&access_token=" +
        accessToken +
        "&service_provider=NAVER";
      axios.get(url).then((res) => {
        console.log(res);
        this.$store.commit("user", {});
        this.$router.push({ path: "/naverlogin2" });
      });
    },
    }
}
</script>
