# Movie Recommendation

## Description

A movie recommendation application for displaying a list of movies and viewing a single movie among other features.

## Live Link

For the whole app - [https://movie-recommendation-1jwul68jt.vercel.app/movies](https://movie-recommendation-1jwul68jt.vercel.app/movies)

## Project Setup

1. Clone the application using git clone [https://github.com/PurityKomen/MovieRecommendation.git](https://github.com/PurityKomen/MovieRecommendation.git)
2. Go into the directory with the code
3. Run npm install to install node modules
4. Then run npm start to view the frontend
5. To run tests, cd into the client directory and run npm test 

## Technologies Used

1. Angular (Frontend)
2. Bootstrap (Styling)
3. Karma for Testing
4. Firebase for Authentication
5. VsCode as my text editor
6. Vercel to deploy frontend 

## Designs 
![Home Page](/home/purity/Downloads/IMG-20250129-WA0008.jpg)

![Movie Detail Page](/home/purity/Downloads/IMG-20250129-WA0012.jpg)

![Reccommended/Discover Movies Page](/home/purity/Downloads/IMG-20250129-WA0010.jpg)

## Deliverables
Your client application should have these sets of screens/pages:

1. Data Fetching:
- Fetch movie data from a public API (e.g., The Movie Database (TMDB)).
- Implement a service to handle API requests and data caching.

2. Authentication:
- Implement simple authentication with your preferred auth provider.

3. User Interface:
 Create a user-friendly interface with the following components:

- Movie List: Display a list of movies with basic information (title, poster,
overview).
- Movie Details: Display detailed information for a selected movie (title,
poster, overview, cast, crew, ratings, etc.).
- Search Functionality: Allow users to search for movies by title or
keyword.
- Loaders to show progress while data is being fetched
- Pagination to help optimize the app performance
- Consider using a UI library for consistent styling.

4. State Management (Optional):
- Implement basic state management (e.g., using a simple service or a lightweight
state management library) to manage the list of movies, search queries, and
selected movie details.

5. Testing:
- Write unit tests for key components and services.
 
6. Code Quality:
- Follow best practices for code readability, maintainability, and testability.
- Use TypeScript effectively to improve code quality and prevent errors.

7. Submission:
- Submit your code via a Git repository (e.g., GitHub, GitLab) - should be publicly
accessible.
- The code should have a development and production programming environment
(branches)
- Have Informative commit messages that follow conventional commit messaging
formats

8. CI/CD
- A pipeline job to run linting and unit tests automatically
- A pipeline job to automatically deploy the software project once certain checks
have been met
- Have the application deployed; use any deployment services with free tiers.

## License

This project uses MIT License

