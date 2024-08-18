# Movie Search


## Overview
A simple movie search application, written in React using the NextJS stack. This application queries a REST API to get a list of movies, which can be filtered down by genre. It includes some basic paging within the movie list, as well as a dedicated page for each movie with some details about it.


I decided to stick with only the tech stack that came with the NextJS starter.dev pack, and I didn't import any other third party libraries or utilities. I felt that for this demo application it would be best to stick with just the basics. I also appreciated the separation of concerns that the starter had in its file structure, and decided to keep to that as much as possible. I've not seen that particular pattern applied before, but it was fun to work with. One thing that I did do is update the libraries in the starter to match the latest stable.


### Highlight
If I had to highlight one interesting aspect of this project, it is for me the decision to make the URL for the search something that could be shared. I've put the parameters I used to call the API into the URLSearchParams. By doing so, this allows users of the application to share their search and to show the same results that they see to others. In the case of this API the search itself is rather trivial, but in my day to day where we have complex and multi-faceted queries, it is _really_ useful to encode the search into the URL. It was entertaining having to work around the side effects of this decision.


### Most pleased or proud
Continuing on the same theme as above, I am most pleased with the use of the custom `useMovieSearch` hook and the side effects of trying to be able to call react-query on demand rather than with the `useQuery` hook. I wanted the MovieList component to not only update the URLSearchParams, but to be able to reload without having to browse to the new URL / search page. This meant that I needed to have a useEffect call and would not be able to work with the useQuery hook. Figuring out how to switch to calling the fetchQuery API of the client, and wrap that all into the custom hook so it could be called as the parameters for the MovieList component changed is certainly my favourite part of this build.


### If I had more time...
Oh, this is a long list. I have lots of plans and ideas for this that I would love to implement. In fact I may do so, as I've really enjoyed getting the chance to build something outside of my current tech stack. It's been a good reminder of some of the joys I have when creating projects from scratch.


#### Technical improvements
- Testing. I feel that there always can be more testing. While I've implemented some tests for the main components (Search, Movie list and row), I'd like to add more. In particular, tests for the custom hook would be something I'd want to have in place. I felt that I had run into the time constraints, and I have to settle a bit for the basic tests that I have. But having something that would leverage the msw in the custom hook would be awesome. I also didn't get a chance to put the storybook in place. For these simple components it's certainly overkill, but it is nice to have for doing dev work.
- GraphQL. Being honest I'm not a huge fan of REST. I greatly prefer the flexibility and workflow the GraphQL provides, and that is what I use when I am doing front end dev work in my day to day. I'd like to switch to using the GraphQL endpoint, rather than the REST one. But it would take me sometime to figure out the scaffolding and code generation outside of what I am used to, and I felt it was better to go with REST knowing I could get up and running quickly on that.
- Accessibility. This generally takes a back seat in apps, but it's important to me. When trying to work quickly it gets neglected, but if given more time I'd want to ensure that the design was responsive enough to handle zooming and different devices gracefully. I'd also want to ensure mark up was reasonable for screen readers, and make better use of NextJSs SSR to allow for more static pages. If the search results could be done in a static way it would be significantly more accessible.


#### Product areas
- Favourites and watch list. The first thing that jumped out to me about this is the app is begging for a favourites and watch list. My plan was to add the feature of marking each movie as either watched and / or favourite. To keep the user from having to log in, I would have stored the lists into local storage in much the same manner as I did with the auth token. This would mean that each user would have the list persist between sessions (going away when the browser clears).
- Tracking API. My next thought from a feature perspective would be a tracking API. Creating a simple API that could track when movies are searched (what searches are being run), as well as favourites and watched when those are added, would give interesting metadata. That could be used to generate a "top ten" across all users of the app. If we had some form of login or fingerprinting, we'd also be able to make use of that information to create a recommendation engine. This would allow the app to expand towards giving recommendations or highlighting new movies for the user. An interesting path from a product perspective that this could be taken.


### Tech Stack


Based on the starter kit from starter.dev


- [Next.js v14.x](https://nextjs.org)
- [React v18.x](https://reactjs.org)
- [React Query v5.x](https://react-query.tanstack.com/)
- [Tailwind CSS v3.x](https://tailwindcss.com/)


### Included Tooling


- [Jest](https://jestjs.io/) - Test runner
- [Typescript](https://www.typescriptlang.org/) - Type checking
- [Storybook](https://storybook.js.org/) - Component library
- [Mock Service Worker](https://mswjs.io/) - Mock REST / GraphQL API
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting



