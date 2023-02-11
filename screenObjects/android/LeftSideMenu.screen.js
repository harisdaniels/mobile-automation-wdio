class LeftSideMenuScreen {

  get menuButton() { return $("~open menu"); }
  get loginMenu() { return $('android=new UiSelector().text("Log In").className("android.widget.TextView")'); }
  get logoutMenu() { return $('android=new UiSelector().text("Log Out").className("android.widget.TextView")'); }
  get logoutButton() { return $('id=android:id/button1'); }
  get frameLogoutLayOut() { return $('id=android:id/content'); }


  /**
   * https://webdriver.io/docs/selectors/#mobile-selectors
   * get loginMenu() { return $('~menu item log in'); }
   * get logoutMenu() { return $('~menu item log out'); }
   * get loginMenu() { return $('//*[@text="Log In"]'); }
   * get logoutMenu() { return $('//*[@text="Log Out"]'); }
   * get frameLogoutLayOut() { return $('android=new UiSelector().resourceId("android:id/content")');
   * frameLogoutLayOut() { return $('android=new UiSelector().resourceId("android:id/parentPanel")'); }
   * frameLogoutLayOut() { return $('id=android:id/alertTitle'); }
   */
  
}

module.exports = new LeftSideMenuScreen();