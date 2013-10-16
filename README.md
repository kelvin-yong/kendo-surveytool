# SurveyTool: Advanced Kendo UI Mobile Application

## Commits / Tutorial Outline
You can clone the project by running `git clone https://github.com/kelvin-yong/kendo-surveytool.git`  

This will create a folder `kendo-survey` and download all code into that folder.

You can check out any point of the tutorial using `git checkout -f step?`. For example, to check out Step 3, run `git checkout -f step3`

To see the changes which between any two lessons use the `git diff` command. For example` git diff step3..step4`

## Step 0: Simple Navigation
- We start with a simple app navigation structure.

## Step 1: Navigation
- Structuring of application using [Require.js](http://requirejs.org/)  
- See also [Making a Well Structured Kendo UI Mobile App in Icenium with Require.js](http://codingwithspike.wordpress.com/2012/11/30/making-a-well-structured-kendo-ui-mobile-app-in-icenium-with-require-js/)  

## Step 2: Survey Questions and Using MVVM
A good read to MVVM is [Understanding MVVM – A Guide For JavaScript Developers](http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/)

- We have the survey questions in each view now
- There is also additonal file `survey-model.js`
- Now you can see how useful Require.js can be

## Step 3: Refactoring the views into remote views
- There are now individual files
  - `views/page1-view.html`
  - `views/page2-view.html`
  - `views/page3-view.html`
  - `views/page4-view.html`
  - `views/thankyou-view.html`
  
- The app.js has been refactored. viewWillAppear is now renamed as viewDidAppear. Changing of the text of the back button in goPrev and goNext has been moved to viewDidAppear.

- All the views uses a data-show event instead of data-before-show event.

## Step 4: Logic to Save App State  
- There is a new file `storage-service.js` that abstracts away the storing mechanism. For now it is using localStorage but it can be changed to any other methods (e.g. cookies).

- `survey-model.js` uses `storage-service.js` to check if there is data saved locally. If yes, it will update the survey-model's data.

- `app.js` uses `survey-model.js` and `storage-service.js`. Upon a new survey page/view load, `app.js` will call upon `storage-service.js` to save the survey answers. 

- You can also cancel the survey.

## Step 5: Reset Survey with Prompt

- When you reset the survey, you are now being prompted with an action sheet to confirm your decision.


## Interlude: Debugging your Apps on Devices

### For Android
- See [Remote Debugging on Android](https://developers.google.com/chrome-developer-tools/docs/remote-debugging)

### For iOS
- See [Debugging Web Content on iOS](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/DebuggingSafarioniPhoneContent/DebuggingSafarioniPhoneContent.html)


### Using Weinre for both iOS and Android
weinre is WEb INspector REmote. Works for both iOS and Android.

For more information, please see the 2 links below

- [Remote Debugging with Weinre](http://www.broken-links.com/2013/06/28/remote-debugging-with-weinre/)

- [Remote Debugging Icenium Apps With Weinre](http://www.icenium.com/blog/icenium-team-blog/2013/09/24/remote-debugging-icenium-apps-with-weinre)

### Using the Ripple Emulator
- Helps to change between different device profiles and behaviour.
- Check out the Ripple Emulator at [http://emulate.phonegap.com](http://emulate.phonegap.com)

## Step 6: Using PhoneGap
- Not done yet

## Step 7: Using PhoneGap Build
- Not done yet

