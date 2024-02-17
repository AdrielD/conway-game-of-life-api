Initiated with:

`rails new api --api --minimal --skip docker --skip-test --skip-keeps --database=postgresql`

Prepare the database:

```
create user gameapi with password 'gameapi123';
alter role gameapi superuser createrole createdb replication;
create database gameapi owner gameapi;

```
