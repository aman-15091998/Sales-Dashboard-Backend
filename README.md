# Sales Analytics

This is the backend part of the Sales Analytics web application where users can analyze the data in a tabular structure featuring filtering, sorting, and pagination. It also includes visual representations of data using bar and line charts.

Hosted Link: [https://sale-dash.netlify.app/](https://sale-dash.netlify.app/) (The backend is hosted on Render so it may take a few seconds to load the data on the first fetch please be patient).

## How to Use the app

1. Visit the link: [https://sale-dash.netlify.app/](https://sale-dash.netlify.app/)
2. Select any date from the date picker between 10th July 2024 to 7th August 2024 and data will be displayed on the table and charts.

## Installation

1. Open terminal in VS Code.
2. Clone the project:
    ```sh
    git clone git@github.com:aman-15091998/Sales-Dashboard-Backend.git
    ```
3. Move to the project folder.
4. Add a `.env` file and add the secrets.
5. Install the dependencies:
    ```sh
    npm i
    ```
6. Start the server:
    ```sh
    npm start
    ```
7. Once the server is active, open the browser and navigate to:
    ```
    http://localhost:5001/api/transactions/initialize
    ```
   to populate data in the database.
8. It will generate data for the last 30 days from today.

## Environment Variables

1. `PORT=5001`
2. `MONGO_URL=mongodb://localhost:27017/DB_NAME`
