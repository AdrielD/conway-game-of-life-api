### Setup

- Prepare the database:

```
create user gameapi with password 'gameapi123';
alter role gameapi superuser createrole createdb replication;
create database gameapi owner gameapi;

```

- Run the setup, this will run `bundle install` and `npm install` for each corresponding directory:

```
./setup.sh
```

### Running

- Run the back end:
```
cd api
rails s
```

- Run the backend
```
cd client
npm run dev
```

### Testign the API:

Check the Postman Collection at: https://www.postman.com/adrield/workspace/adinelli/collection/1850349-b93e92f4-b29e-409f-ab03-a35ebbf45793?action=share&creator=1850349&active-environment=1850349-4382d227-9b2e-46b4-9eff-06c7149f2062

Make sure the selected environment is `[Local] Conway's Game of Life API`

Also, you can test using the client application at `http://localhost:3001`. With the interface you can:

- provide a sequence of 1's and 0's to Create Board. It will be converted into a matrix. For example:

`001110111100101`

Will be converted into
```
[0, 0, 1, 1],
[1, 0, 1, 1],
[1, 1, 0, 0],
[1, 0, 1, 0] -> the sequence willbe padded into aperfect square, for convenience
```

- Get Board for a specific ID
- Reset Board to it's original seed
- Get Next State for the board
- Get State to a specific step
- Final State will return the last position or error the grid does not stop changing until the number of attempts are reached


### About the project

The api was initiated with:

`rails new api --api --minimal --skip docker --skip-test --skip-keeps --database=postgresql`

and the client was created with:

`npm create vite@latest client -- --template=react-ts`

