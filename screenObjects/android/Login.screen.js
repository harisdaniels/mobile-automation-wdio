class LoginScreen {

  get inputUsername() {
    return $('//*[@content-desc="Username input field"]');
  }

  get inputPassword() {
    return $('//*[@content-desc="Password input field"]');
  }

  get loginButton() {
    return $('//*[@content-desc="Login button"]');
  }

  /*
  a method to encapsule automation code to interact with the page
  e.g. to login using username and password
  */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }

  async clearUsernameField() {
    await this.inputUsername.clearValue();
  }

  async clearPasswordField() {
    await this.inputPassword.clearValue();
  }

  // Error message element
  get requiredUsernameError() {
    return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView');
  }
  get requiredPasswordError() {
    return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView');
  }

  get errorMessageText() {
    return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView');
  }

}

module.exports = new LoginScreen();