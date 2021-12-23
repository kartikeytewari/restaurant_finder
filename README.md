# Restaurant finder

An API to find restaurants. The API searches and returns restaurants that are open at the time of calling it.

## Installation Instructions
1. Clone the repository with: `git clone https://github.com/kartikeytewari/restaurant_finder`
2. Go to the directory: `cd restaurant_finder`
3. Install node packages using the command: `npm install`
4. Start the mysql server using: `brew services start mysql`
5. Create the mysql schema using: `mysql -u root < ./src/schema_generator.sql --table --force`
6. Populate the database using the command: `node src/populate_db.js 100`
7. Start the API using: `npm start`
8. Import and run the postman file: `random_restaurant.postman_collection.json`
