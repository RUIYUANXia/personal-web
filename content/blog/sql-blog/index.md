---
slug: '/sql blog'
date: '2023-07-26'
updatedAt: '2023-07-26'
title: "Improve your SQL skills!"
# Description should be no more than 160 characters in length
description: "Let's learn and practice using SQL!"
categories: ["SQL"]
banner: './images/banner.png'

---

import Link from "$components/Link";
import Quote from "$components/mdx/Quote";

![banner](./images/banner.png)


## Motivation

In this blog, I want to share some SQL related knowledge and questions that I have encountered.


# SQL

SQL is a standard programming language used to operate Relational Databases and carry out various operations such as inserting, manipulating, updating, and retrieving data from relational databases.

- SQL is used to create a database, define its structure, implement it, and perform various functions on the database.
- SQL is also used for accessing, maintaining, and manipulating already created databases.
- SQL is a well built language for entering data, modifying data, and extracting data in a database.
- SQL is enormously used as a Client/Server language to connect the front-end with the back-end, thus supporting the client/server architecture.
- SQL when deployed as Data Control Language(DCL), helps protect your database from unauthorized access.

## SQL Basics

### 1. SELECT statement

The `SELECT` statement is used to retrieve data from a database table.

```sql
SELECT column1, column2, ...
FROM table_name;
```

### 2. WHERE clause

The `WHERE` clause is used to filter the rows returned by a `SELECT` statement based on specified conditions.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### 3. INSERT INTO statement

The `INSERT INTO` statement is used to insert new records into a table.

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

### 4. UPDATE statement

The `UPDATE` statement is used to modify existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### 5. DELETE statement

The `DELETE` statement is used to delete records from a table.

```sql
DELETE FROM table_name
WHERE condition;
```

### 6. JOIN clause

The `JOIN` clause is used to combine rows from two or more tables based on related columns.

```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON table1.column = table2.column;
```

### 7. GROUP BY clause

The `GROUP BY` clause is used to group rows based on the values of one or more columns and apply aggregate functions.

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

### 8. ORDER BY clause

The `ORDER BY` clause is used to sort the result set in ascending or descending order.

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC/DESC;
```

### 9. DISTINCT keyword

The `DISTINCT` keyword is used to return only distinct (unique) values in the result set.

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

### 10. LIMIT clause

The `LIMIT` clause is used to limit the number of rows returned in the result set.

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT n;
```

These are some of the fundamental SQL syntax elements that should help you get started with querying and manipulating data in a database. Remember that SQL syntax may slightly vary depending on the database management system you are using.

# SQL injection

SQL injection is a security vulnerability that occurs when an attacker can manipulate or inject malicious SQL code into an application's database query. It happens when user-supplied input is directly concatenated into SQL statements without proper sanitization or parameterization.

An attacker can potentially access, modify, or delete data from the database, execute unauthorized commands, or even gain control of the entire application or underlying server.

## To be continued

### 7-day time window for average and sum

```MySQL
WITH a as (
  SELECT visited_on, SUM(amount) as day_sum FROM Customer GROUP BY visited_on
),
b as (
  SELECT visited_on, SUM(amount) as day_sum FROM Customer GROUP BY visited_on
)
SELECT a.visited_on, SUM(b.day_sum) as amount, ROUND(AVG(b.day_sum),2) as average_amount
FROM a, b
WHERE DATEDIFF(a.visited_on, b.visited_on) BETWEEN 0 AND 6
GROUP BY a.visited_on
HAVING COUNT(b.visited_on) = 7
ORDER BY a.visited_on
```

### factory machine average time

```MySQL
SELECT a1.machine_id, 
ROUND(AVG(a2.timestamp - a1.timestamp),3) AS processing_time
FROM Activity a1 JOIN Activity a2 ON 
  (a1.machine_id = a2.machine_id AND
  a1.process_id = a2.process_id AND
  a1.timestamp < a2.timestamp)
GROUP BY a1.machine_id
```

### handle null value if not making any requests using if

```SQL
SELECT s.user_id, 
ROUND(SUM(if(action = 'confirmed', 1, 0)) / COUNT(*),2) as confirmation_rate
FROM Signups s LEFT JOIN Confirmations c on s.user_id = c.user_id
GROUP BY s.user_id
```