Requirements:
- Node.js
- MongoDB

Required tools
```
npm i -g nodemon
npm i -g mongod
npm i -g yarn
```

installing dependencies
```
yarn
```

Development:
```
yarn start
```

Server:
```
yarn mongo
yarn start
```

Installing everything on Linux Arch (or Linux whatever-else)

If using Arch **Linux**, go to terminal, type
```
sudo pacman -S mongodb
yaourt -S boost-libs
```
*Note: if you have installed other pacman wrapper than yaourt then you obviously need to use installed one. If you have no clue what all of this means read https://wiki.archlinux.org/index.php/Arch_User_Repository*

After that `yarn mongo` should work perfectly fine.

If using **other Linux distribution** you need to download mongodb from https://docs.mongodb.com/manual/administration/install-on-linux/ and install it. If you do not have boost libraries you need to download them too from http://www.boost.org/.
