const LoginScreen = require("../../screenObjects/android/Login.screen.js");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen.js");
const CatalogScreen = require("../../screenObjects/android/Catalog.screen.js")

describe("End-to-end login testing", () =>  {

  before(async () => {
    try {
      await LeftSideMenuScreen.menuButton.click();
      await LeftSideMenuScreen.loginMenu.click();
      // await driver.pause(3000)
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in without entering anything.", async () => {
    try {
      await LoginScreen.loginButton.click();
      await LoginScreen.requiredUsernameError.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in without entering username.", async () => {
    try {
      await LoginScreen.enterPassword("Test");
      await LoginScreen.loginButton.click();
      await LoginScreen.requiredUsernameError.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in without entering password.", async () => {
    try {
      await LoginScreen.clearPasswordField();
      await LoginScreen.enterUsername("Test");
      await LoginScreen.loginButton.click();
      await LoginScreen.requiredPasswordError.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.requiredPasswordError).toHaveText("Password is required");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in with invalid credentials.", async () => {
    try {
      await LoginScreen.clearUsernameField();
      await LoginScreen.clearPasswordField();
      await LoginScreen.login("Test", "Test");
      await LoginScreen.loginButton.click();
      await LoginScreen.errorMessageText.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in with invalid username.", async () => {
    try {
      await LoginScreen.clearUsernameField();
      await LoginScreen.clearPasswordField();
      await LoginScreen.login("Test", "10203040");
      await LoginScreen.loginButton.click();
      await LoginScreen.errorMessageText.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should not be able to log in with invalid password.", async () => {
    try {
      await LoginScreen.clearUsernameField();
      await LoginScreen.clearPasswordField();
      await LoginScreen.login("bob@example.com", "test");
      await LoginScreen.loginButton.click();
      await LoginScreen.errorMessageText.waitForDisplayed({ timeout: 1000 });
      await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
    } catch (error) {
      console.log(error);
    }
  });

  it("User should be able to log in with valid credentials.", async () => {
    try {
      await LoginScreen.login("bob@example.com", "10203040");
      await CatalogScreen.productTitleHeader.waitForDisplayed({ timeout: 3000 });
      await expect(CatalogScreen.productTitleHeader).toHaveText("Products");
  
      await LeftSideMenuScreen.menuButton.click();
      await driver.pause(1000);
      await LeftSideMenuScreen.logoutMenu.click();
      await LeftSideMenuScreen.frameLogoutLayOut.waitForExist({ timeout: 5000 });
      await LeftSideMenuScreen.logoutButton.click();
    } catch (error) {
      console.log(error);
    };
  });

});