drop database restaurant_finder;
create database restaurant_finder;
show databases;
use restaurant_finder;
create table restaurant(
    restaurant_id int,
    name varchar(256),
    type varchar(256),
    description varchar(8000),
    time_monday_open time,
    time_monday_close time,
    time_tuesday_open time,
    time_tuesday_close time,
    time_wednesday_open time,
    time_wednesday_close time,
    time_thursday_open time,
    time_thursday_close time,
    time_friday_open time,
    time_friday_close time,
    time_saturday_open time,
    time_saturday_close time,
    time_sunday_open time,
    time_sunday_close time,
    primary key (restaurant_id)
);
show tables;
desc restaurant;
