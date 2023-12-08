# TODOGETHER APP

Multiplayer-todo-lists | the App
React Native based app.

## CONFIG

App strapbooted with `npx create-expo-app --template`. Development with React Native. Expo seems to only be working with Node 16.

### WATCHMAN: WORK AROUND FOR MAC 10.13

Expo crash du to a old version of `watchman`. AN normal update from Watchman via brew is not possible on an old Gurke running mac OS 10.13.
Here, is a trick to force the install: 
```
I have managed to install Facebook watchman in High Sierra 10.13.6 using MacPort tools.
1- Download MacPorts package related to your version from: https://guide.macports.org/#installing.macports.source
2- Extract and install it.
3- Run $sudo port -v selfupdate for any update.
4- Once successfully installed run the command: sudo port install watchman
```
(found on stackoverflow: https://stackoverflow.com/questions/69632043/watchman-installation-fails-on-mac-os-version-10-12 )

## COMMANDS

- `npm run start` (same as `expo start`): you can open iOS, Android, or web from here, or run them directly with the commands below.
- `npm run android`
- `npm run ios`
- `npm run web`

## API

The api is from the following repo: https://github.com/vanStaen/todogether. It's already up and runing on www.todogether.com (hosten on Heroku). 

## RESSOURCES

### TUTORIALS:

- Youtube walthrough: https://www.youtube.com/watch?v=0kL6nhutjQ8
- Medium Article: https://medium.com/how-to-react/create-your-first-react-native-app-70ee69d9ac2b