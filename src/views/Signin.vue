<template>
  <div style="display:flex">
    <div class="input_div">
      <img
        src="../assets/arrow_back.svg"
        alt="화살표"
        width="25px"
        height="25px"
        class="arrow"
        @click="back()"
      />
      <img src="../assets/logo.svg" alt="로고" class="title_logo" />
      <h1 class="signin_title">Hello, Planit!</h1>
      <div class="signin_text">
        <input
          type="email"
          class="input-email"
          placeholder="Email"
          v-model="email"
          v-on:keyup.enter="submit"
        />
        <input
          type="password"
          class="input-password"
          placeholder="Password"
          v-model="password"
          v-on:keyup.enter="submit"
        />
        <div class="errorMes">{{ error }}</div>
        <input
          type="submit"
          class="input-login"
          value="Sign In"
          @click="submit()"
        />
      </div>

      <div @click="signupgo()" class="input-signup">Sign Up</div>
      <div
        style=" display:flex; flex-direction:column; width:100%; margin: 10px auto 0px auto; align-items: center;"
      >
        <div class="forgot__password" style="margin-top:16px;" @click="findPassword()">
          Forgot password?
        </div>
      </div>
    </div>
    <div class="image_div">
      <img
        src="../assets/undraw_authentication_fsn5.svg"
        alt="로고"
        class="logo-2"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    signupgo() {
      this.$router.push("/account/signup");
    },
    back() {
      this.$store.state.transtionStatus = "bottom";
      this.$router.push("/");
    },
	   findPassword(){
		        this.$router.push("/account/find");
	  },
    submit() {
      this.$store
        .dispatch("signin", { email: this.email, password: this.password })
        .then(response => {
          if (response.data.result == true) {
            console.log("ddd");
            localStorage.setItem("token", response.data.token);
            this.$store.state.userdata = response.data.userdata;
            (this.email = ""),
              (this.password = ""),
              (this.error = ""),
              (this.$store.state.transtionStatus = "bottom");
            this.$router.push("/wrap/main");
          } else {
            this.error = response.data.mes;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="css" scoped>
	.signin_text > *{
		box-sizing:content-box !important;
	}
.errorMes {
  font-size: 14px;
  color: red;
  margin: 5px 0px;
		background-color:white;
}
.signin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 30px;
		box-sizing:content-box;

}
.background {
  width: 100%;
  height: 100%;
  display: flex;
}
.background-2 {
  background-color: #ffffff;
}
.signin__main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input_div {
  background-color: white;
  width: 40vw;
  height: 80vh;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px 0px 0px 30px;
  position: relative;
}
.signin_title {
  font-family: "ProductSansM";
  color: black;
  text-align: center;
 
	margin-bottom: 2%;
  font-size: 36px;
}
.input-email {
  border-radius: 3px;
  min-width: 300px;
  width: 330px;
  height: 30px;
  border: 1px solid #adb5bd;
  margin: 5px auto;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSRB";
}
.input-email::placeholder {
  font-size: 14px;
  font-family: "ProductSansR";
  color: #adb5bd;
}
.input-password {
  border-radius: 3px;
  min-width: 300px;
  width: 330px;
  height: 30px;
  margin: 5px auto;
  border: 1px solid #adb5bd;
  padding: 5px 10px;
  font-family: "ProductSansR";
}
.input-password::placeholder {
  font-size: 14px;
  font-family: "ProductSansR";
  color: #adb5bd;
}
.input-login {
  border-radius: 3px;
  font-family: "ProductSansR";
  cursor: pointer;
  height: 30px;
  margin: 5px auto;
  border: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: #6c63ff;
  min-width: 300px;
  width: 330px;
  box-sizing: content-box;
}
.input-signup {
  border: 1px solid #6c63ff;
  border-radius: 3px;
  font-family: "ProductSansR";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  text-align: center;
  font-size: 14px;
  padding: 3px 10px;
  color: #6c63ff;
  background-color: #ffffff;
  min-width: 300px;
  width: 330px;
  box-sizing: content-box;
}
.image_div {
  width: 40vw;
  height: 80vh;
  background-color: #a1c8fe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 30px 30px 0px;
}
.title_logo {
  width: 100px;
  height: 100px;
  text-align: center;
}
.logo-2 {
  /*padding: 36px;*/
  width: 80%;
  min-width: 300px;
  text-align: center;
}
.signup,
.find-password {
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  text-decoration-line: none;
  text-align: left;
}
.signup {
  margin-top: 100px;
  color: black;
  margin: 0px 3px;
}
.forgot__password {
  cursor:pointer;
  font-size: 14px;
  font-family: "ProductSansR";
  text-decoration: none;
  color: #868e96;
  width: fit-content;
}
.signin__container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 16px 0.2px #868e96;
  border-radius: 30px;
}
</style>
