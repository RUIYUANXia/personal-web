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

In this blog, let's walk through some basic knowledge relate to SQL.


# SQL

7-day time window for average and sum

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

factory machine average time




```MySQL
SELECT a1.machine_id, 
ROUND(AVG(a2.timestamp - a1.timestamp),3) AS processing_time
FROM Activity a1 JOIN Activity a2 ON 
  (a1.machine_id = a2.machine_id AND
  a1.process_id = a2.process_id AND
  a1.timestamp < a2.timestamp)
GROUP BY a1.machine_id
```

handle null value if not making any requests using if

```SQL
SELECT s.user_id, 
ROUND(SUM(if(action = 'confirmed', 1, 0)) / COUNT(*),2) as confirmation_rate
FROM Signups s LEFT JOIN Confirmations c on s.user_id = c.user_id
GROUP BY s.user_id
```

# SQL injection

SQL injection is a security vulnerability that occurs when an attacker can manipulate or inject malicious SQL code into an application's database query. It happens when user-supplied input is directly concatenated into SQL statements without proper sanitization or parameterization.

An attacker can potentially access, modify, or delete data from the database, execute unauthorized commands, or even gain control of the entire application or underlying server.