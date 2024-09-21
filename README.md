# This Is My Sample Project of Mobile Automation Testing with Appium-WebdriverIO and using Github Actions as CI/CD Tool

## Project Information
For this project, i use:
- WebdriverIO (https://webdriver.io/)
- Appium (https://appium.io/docs/en/2.0/quickstart/test-js/)
- Timeline Reporter (https://webdriver.io/docs/wdio-timeline-reporter/)

## Preparation
- Clone from this repo https://github.com/harisdaniels/mobile-automation-wdio. 
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
- Or, you can download this repository as ZIP file

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.
Make sure you have [Java](https://www.oracle.com/id/java/technologies/downloads/), [Appium](https://appium.io/docs/en/2.0/quickstart/install/), and [Android Studio](https://developer.android.com/studio) installed.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:
- Go to your project repo directory in your local machine.
- Open your terminal or Git Bash (if you have this)
- Type `npm install` in your terminal and press ENTER on your keyboard to install all dependecies
- Wait, and done

## Run Test
To run the test, you need to follow these steps
- Start the Appium server
- Go to the file that you have cloned
- Open file with code editor
- Open terminal in your Code Editor by clicking ctrl + ` (or you can use default terminal, but make sure you are already on the right path).
- Then type `npm run test` and press ENTER on your keyboard

## Run Test through Github Actions
- Go to `Actions` tab on the top of Github page
- Choose `Run Automation Mobile` workflow
- Click `Run Workflow` dropdown on the right side of the page
- Click `Run Workflow` button
