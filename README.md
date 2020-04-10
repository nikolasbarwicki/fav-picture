# FavPicture

Simple React app to deliver daily recommendations of best photos.

<p align="center">
  <img width="700" src="https://i.ibb.co/qCrc8yY/Annotation-2020-04-10-154131.png">
</p>

## 📝General info

React project done for training purposes. Its main goal was to implement API to React project. There are three APIs: getting user's location, current weather based on location and photos from Unsplash with search query made of obtained data.

## ⚙️Built with

- [React.js](https://reactjs.org/)
- [axios](https://github.com/axios/axios)
- [Geolocation DB API](https://geolocation-db.com/documentation), [Weatherbit.io API](https://www.weatherbit.io/), [Unsplash API](https://unsplash.com/developers)
- [styled-components](https://styled-components.com/)
- [ESLint](https://eslint.org/), [Husky](https://www.npmjs.com/package/husky), [Prettier](https://prettier.io/), [lint-staged](https://github.com/okonet/lint-staged)

## 🚀Setup

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. From your command line:

    $ git clone https://github.com/nikolasbarwicki/fav-picture
    $ cd fav-picture
    $ npm install

Start app

    $ npm start

Go to:

      http://localhost:3000

## ✅Features

A few of the things you can do with FavPicture:

- Get photos based on your location and current weather
- Save photos to favourites with their search querries

## To-do:

- [ ] Add resposivity to the UI
- [ ] Add form validation
- [ ] Conntect app state with localStorage or Firebase
- [ ] Automatically display photos after loading the app
- [ ] Display spinner in UI when fetchin data from the API

## 👁‍🗨Project status

This project is currently in development - find out more in [To-do](#to-do) section.

## 📘License

This project is licensed under the MIT License © [Nikolas Barwicki](https://github.com/nikolasbarwicki)
