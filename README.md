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


### About the project

The api was initiated with:

`rails new api --api --minimal --skip docker --skip-test --skip-keeps --database=postgresql`

and the client was created with:

`npm create vite@latest client -- --template=react-ts`

