const LoginScreen = require("../../screenObjects/android/Login.screen.js");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen.js");
const CatalogScreen = require("../../screenObjects/android/Catalog.screen.js")

describe("End-to-end login testing", () =>  {

  beforeEach(async () => {
    await LeftSideMenuScreen.menuButton.click();
    await LeftSideMenuScreen.loginMenu.click();
    // await driver.pause(3000)
  });

  it("User should not be able to log in without entering anything.", async () => {
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
  });

  it("User should not be able to log in without entering username.", async () => {
    await LoginScreen.login("", "Test");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
  });

  it("User should not be able to log in without entering password.", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.login("Test", "");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredPasswordError).toHaveText("Password is required");
  });

  it("User should not be able to log in with invalid credentials.", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.clearPasswordField();
    await LoginScreen.login("Test", "Test");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("User should not be able to log in with invalid username.", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.clearPasswordField();
    await LoginScreen.login("Test", "10203040");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("User should not be able to log in with invalid password.", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.clearPasswordField();
    await LoginScreen.login("bob@example.com", "test");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("User should be able to log in with valid credentials.", async () => {
    await LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productTitleHeader).toHaveText("Products");

    await LeftSideMenuScreen.menuButton.click();
    await LeftSideMenuScreen.logoutMenu.click();
    await LeftSideMenuScreen.logoutButton.waitForDisplayed({ timeout: 3000 });
    await LeftSideMenuScreen.logoutButton.click();
  });

});