# mobiliar-appseed
# Installation

## Preconditions
node/npm, bower, cordova, ionic sind installiert.

## Installation mobiliar-appseed
* npm install
* bower install
* grunt
* gulp install
* cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME=mycustomurlscheme
* ionic platform add ios android
* ionic build

## After regeneration of platforms
### Add native localizations for App (Screen) name:
* platform/android/res/values/strings.xml --> Translations into localized folders (values-de, values-fr, values-it)
* XCode: see [iOS_Localization.pdf](docs/iOS_Localization.pdf)

# Run
## Browser
* ionic serve

## Emulate
### Examples
* ionic emulate ios --target="iPhone-6"
* ionic emulate ios --target="iPhone-5"
* ionic emulate ios --target="iPhone-4s"
* other ios emulators see: cordova run ios --list
* Android emulators see: cordova run android --list (have to be activated in AVD Manager)


## Gerät
### iOS
* Make first deployment on device in XCode (or register device in Apple Developer Console)
* connect device via USB to Mac
* ionic run ios --device
### Android
* Android Setup in Android Studio
* ionic run android --device
