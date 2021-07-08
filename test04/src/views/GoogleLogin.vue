<template>
  <div>
    <div id="google-signin-btn"></div>
    <button @click="signOut">Sign out</button>
  </div>
</template>
<script>
export default {
  mounted() {
    window.gapi.signin2.render("google-signin-btn", {
      onsuccess: this.onSignIn,
    });
  },
  methods: {
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId());
      console.log("Full Name: " + profile.getName());
      console.log("Given Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image Url: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      const idToken = googleUser.getAuthResponse().id_token;
      console.log("ID Token : " + idToken);
    },
    signOut() {
      window.gapi.auth2.getAuthInstance().disconnect();
    },
  },
};
</script>
