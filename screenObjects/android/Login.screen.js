class LoginScreen {

  get inputUsername() { return $('//*[@content-desc="Username input field"]'); }
  get inputPassword() { return $('//*[@content-desc="Password input field"]'); }
  get loginButton() { return $('//*[@content-desc="Login button"]'); }

  // Error message element
  get requiredUsernameError() { return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView'); }
  get requiredPasswordError() { return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView'); }
  get errorMessageText() { return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'); }

  async clearPasswordField() { await this.inputPassword.clearValue(); }
  async clearUsernameField() { await this.inputUsername.clearValue(); }
  async enterUsername(username) { await this.inputUsername.setValue(username); }
  async enterPassword(password) { await this.inputPassword.setValue(password); }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }

}

module.exports = new LoginScreen();