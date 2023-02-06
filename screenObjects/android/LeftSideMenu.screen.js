class LeftSideMenuScreen {

  get menuButton() { return $("~open menu"); }
  get loginMenu() { return $('//*[@text="Log In"]'); }
  get logoutMenu() { return $('//*[@text="Log Out"]');}
  get logoutButton() { return $('android=new UiSelector().resourceId("android:id/button1")'); }
  
}

module.exports = new LeftSideMenuScreen();