class LeftSideMenuScreen {

  get menuButton() { return $("~open menu"); }
  get loginMenu() { return $('//*[@text="Log In"]'); }
  get logoutMenu() { return $('//*[@text="Log Out"]');}
  get logoutButton() { return $('android=new UiSelector().resourceId("android:id/button1")'); }
  get frameLogoutLayOut() { return $('android=new UiSelector().resourceId("android:id/content")'); }


  // get loginMenu() { return $('~menu item log in'); }
  // get logoutMenu() { return $('~menu item log out');}
  
}

module.exports = new LeftSideMenuScreen();