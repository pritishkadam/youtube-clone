# YouTube Clone - Frontend

This project is a YouTube Clone built using React.js, React Redux Toolkit, Tailwind CSS and many other tools.

## Screenshots

#### YouTube Home Page

![YouTube Home Page.](/Youtube_Clone_Home.png "YouTube Home Page")

#### YouTube Watch Page

![YouTube Watch Page.](/YouTube_Watch_Page.png "YouTube Watch Page")

## Tools/Packages Used

- React
- Redux Toolkit
- React Router DOM
- Create React App
- Tailwind CSS
- YouTube APIs

## Features

- Home Page: Displays list of videos with their details, such as video title, duration type and channel name
- Shimmer UI: Loading screen which provides better User Experience
- Watch Page: Displays the user selected video
- Side Bar Menu: Allows user to explore different pages/options
- Search Functionality: Allow users to search for videos or channels and provides a list of suggestions
- Comment Section: Displays list of comments under a video on Watch Page
- Live Videos: List of live videos
- Filtered Options: Filter videos on Home Page based on specific category
- Caching Suggestions: Suggestions are cached in order to reduce the number of API calls

#### NOTE:

1. Since, YouTube APIs have a quota limit, hence users might come across an error 'Sorry for the inconvenience but something's wrong at our end', once they go beyond that limit.
2. Some of the Category specific page will list videos of different category just to make use of Config Driven UI and populate the UI.
3. Authentication features are not added.
4. Due to quota limit, the comments are coming in from a config

## Future Improvements/Additions

- Authentication
- Fetching more YouTube videos based on Infinite Scroll
- Comments Section for Live Videos
- Fully Responsive

## Tech Stack

- React: JS Library for building user interfaces
- Redux Toolkit: A centralized state management tool
- React Router DOM: A npm package for routing
- Create-React-App: A tool to create and run React projects quickly
- Tailwind CSS: A utility first CSS framework for styling our application
- YouTube APIs

## Dependencies

| npm modules      |
| ---------------- |
| react            |
| reduxjs/toolkit  |
| react-dom        |
| react-redux      |
| react-router-dom |

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine

### Installation

1. Clone the repository

```
https://github.com/pritishkadam/youtube-clone.git
```

2. Change into the project directory

```
cd youtube-clone
```

3. Install the dependencies

```
npm install
```

4. Start the development server

```
npm run start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app running.

##### NOTE: In order to experience the full range of features offered by this application, it is essential to install the necessary external dependencies
