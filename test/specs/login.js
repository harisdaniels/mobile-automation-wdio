const LoginScreen = require("../../screenObjects/android/Login.screen.js");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen.js");
const CatalogScreen = require("../../screenObjects/android/Catalog.screen.js")

describe("End-to-end login testing", () =>  {
  /*
  beforeEach(async () => {
    //Access the hamburguer/toggle button by its accessibility id
    await $('~open menu').click();
    //Access the login left menu option by its text
    await $('//*[@text="Log In"]').click();
    // await driver.pause(3000)
  });

  it("User should not be able to login without input anything", async () => {
    await $('~Login button').click();

    const text = await $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView');
    console.log(text.getText());
    await expect($(text).toHaveText("Username is required"));
    // assert(text === "Username is required");
  });

  it("User should not be able to login without input username", async () => {
    await $('//*[@content-desc="Password input field"]').setValue("10203040");
    await $('~Login button').click();

    const text = await $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView');
    console.log(text.getText());
    await expect($(text).toHaveText("Username is required"));
  });

  it("User should not be able to login without input password", async () => {
    await $('//*[@content-desc="Password input field"]').clearValue();

    await $('//*[@content-desc="Username input field"]').setValue("bob@example.com");
    await $('~Login button').click();

    const text = await $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView');
    console.log(text.getText());
    await expect($(text).toHaveText("Password is required"));
  });

  it("User should not be able to login with invalid credentials", async () => {
    await $('//*[@content-desc="Username input field"]').setValue("Test");
    await $('//*[@content-desc="Password input field"]').setValue("Test");
    await $('~Login button').click();

    //Validate error massage
    const text = await $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView');
    console.log(text.getText());
    await expect($(text).toHaveText("Provided credentials do not match any user in this service."));
  });

  it("User should be able to login with valid credentials", async () => {
    //Access the username input element by its content-desc
    await $('//*[@content-desc="Username input field"]').setValue("bob@example.com");
    //Access the username input element by its class + content-desc
    await $('//android.widget.EditText[@content-desc="Password input field"]').setValue("10203040");
    //Access the login button by the default xpath
    await $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView').click();
    // await driver.pause(3000);

    //Access the product header element using the UISelector
    //https://webdriver.io/docs/selectors/#android-uiautomator
    //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
    const selector ='new UiSelector().text("Products").className("android.widget.TextView")';
    const productsUISelector = await $(`android=${selector}`);
    console.log(productsUISelector);
    await expect(productsUISelector).toHaveText("Products");
  });
  */

  beforeEach(async () => {
    await LeftSideMenuScreen.menuButton.click();
    await LeftSideMenuScreen.loginMenu.click();
    // await driver.pause(3000)
  });

  it("User should not be able to login without input anything", async () => {
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
  });

  it("User should not be able to login without input username", async () => {
    await LoginScreen.login("", "Test");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredUsernameError).toHaveText("Username is required");
  });

  it("User should not be able to login without input Password", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.login("Test", "");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.requiredPasswordError).toHaveText("Password is required");
  });

  it("User should not be able to login with invalid credentials", async () => {
    await LoginScreen.clearUsernameField();
    await LoginScreen.clearPasswordField();
    await LoginScreen.login("Test", "Test");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessageText).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("User should be able to login with valid credentials", async () => {
    await LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productTitleHeader).toHaveText("Products");

    await LeftSideMenuScreen.menuButton.click();
    await LeftSideMenuScreen.logoutMenu.click();
    await LeftSideMenuScreen.logoutButton.waitForDisplayed({ timeout: 3000 });
    await LeftSideMenuScreen.logoutButton.click();
  });

});