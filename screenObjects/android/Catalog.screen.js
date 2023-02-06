class CatalogScreen {

  get productTitleHeader() { return $('android=new UiSelector().text("Products").className("android.widget.TextView")'); }
  
}

module.exports = new CatalogScreen();