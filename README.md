# Open Library Book Search

A responsive React application for searching and browsing books with the free [Open Library API](https://openlibrary.org/developers/api).

Users can search by title, author, or ISBN, filter by language, and open detailed pages for books and authors.

## Features

- **Book discovery:** the home page loads books on the topic of programming
- **Search and filters:** search by title, author, or ISBN and filter results by language
- **Pagination:** move through results with Previous and Next, for both the home list and searches
- **Book details:** cover, title, author, publish date, description, and subjects
- **Subject browsing:** select a subject to see related books, using a shareable URL
- **Author pages:** biography, birth and death dates, and a list of works
- **Complete UI states:** loading spinner, error messages, empty results, and fallbacks for missing covers, descriptions, and authors
- **Responsive layout:** built mobile-friendly with React Bootstrap

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Routing | React Router 7 |
| Styling | React Bootstrap, Bootstrap 5, CSS |
| Data fetching | Axios with async/await |
| Tooling | Create React App |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Installation

1. Clone the repository and install the dependencies:

   ```bash
   git clone https://github.com/adelhokulic/open-library.git
   cd open-library
   npm install
   ```

2. Create a `.env` file in the project root, using `.env.example` as a template:

   ```env
   REACT_APP_OPEN_LIBRARY_API=https://openlibrary.org
   REACT_APP_COVERS_API=https://covers.openlibrary.org/b/id
   ```

   Open Library does not require an API key.

3. Start the development server:

   ```bash
   npm start
   ```

   The app runs at [http://localhost:3000](http://localhost:3000).

To create a production build, run `npm run build`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home page with search and results |
| `/?subject=:subject` | Books for a selected subject |
| `/book/:id` | Book details |
| `/author/:id` | Author details and works |

## Project Structure

```text
src/
├── components/   Reusable UI: navigation, footer, search form, book cards, loader
├── fetchApi/     Open Library requests and response mapping
├── pages/        Route pages: Home, BookDetails, AuthorDetails
├── App.js        Application layout and routes
└── index.js      Application entry point
```

## API Endpoints

| Purpose | Endpoint |
| --- | --- |
| Books by subject | `/subjects/{subject}.json` |
| Search | `/search.json` |
| Book details | `/works/{id}.json` |
| Author details | `/authors/{id}.json` |
| Author's works | `/authors/{id}/works.json` |
| Cover images | `https://covers.openlibrary.org/b/id/{coverId}-{S\|M\|L}.jpg` |

Open Library returns different fields from different endpoints. The request functions in `src/fetchApi/fetch.js` map those responses into one consistent shape, so the same components can display books from any source.

## Data Source

Book and author data is provided by [Open Library](https://openlibrary.org), a project of the Internet Archive.
