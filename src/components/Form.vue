<template>
  <form class="login-form" action="">
    <img src="../assets/img/logo.png" alt="" />

    <div class="fields">
      <label for="user-input">Username</label>
      <div class="username">
        <input type="text" class="user-input" placeholder="Enter Username" />
      </div>
      <label for="user-password">Password</label>
      <div class="password">
        <input
          type="password"
          class="user-password"
          placeholder="Enter Password"
        />
      </div>
      <label for="user-imei">Imei</label>
      <div class="imei">
        <input type="text" class="user-imei" placeholder="Enter Imei" />
      </div>
    </div>
    <button class="signin-button">Login</button>
  </form>
</template>

<script>
export default {};
</script>