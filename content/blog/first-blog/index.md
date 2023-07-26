---
slug: '/first blog'
date: '2023-07-25'
updatedAt: '2023-07-25'
title: 'First blog!'
# Description should be no more than 160 characters in length
description: 'This is my first blog!'
categories: ['python']
banner: './images/banner.png'

---

import Link from "$components/Link";
import Quote from "$components/mdx/Quote";

![banner](./images/banner.png)


## Motivation

This is my first blog! Let's start by introducing some basic Python knowledge.


## Python Features

### variables are dynamicly typed

```python
n = 0
print('n=', n) # n = 0
n = "abc"
print('n=', n) # n = abc
```
### Multiple Assignments

```python
n, m, z = 0, "abc", False
```

### Increment
```python
n = n + 1
n += 1
# n++ is invalid
```

### None is null (absence of value)
```python
n = 4
n = None
print ("n =", n) # n = None
```

### If Statement
```python
if n > 2:
	n -= 1
elif n == 2:
	n *= 2
else:
	n += 2
```

### Parentheses needed for multi-line conditions

```python
# and = &&
# or = ||
n, m = 1,2
if ((n > 2 and n != m) or n == m):
	n += 1
```

### While

```python
n = 0
while n < 5:
	print(n)
	n += 1
```

### For loop

```python
for i in range(5): # from 0 to 4
	print(i)
```

```python
for i in range(2, 6): # from 2 to 5
	print(i)
```

```python
for i in range(5, 1, -1): # from 5 to 2
	print(i)
```

### Division
```python
print(5 / 2) # 2.5
print(5 // 2) # 2
print(-3 // 2) # -2
print(int(-3 / 2)) # -1
```

### Modulo
```python
print(5 % 2) # 1
print(-10 % 3) # 2
import math
print(math.fmod(-10, 3)) # -1.0
```

### Math
```python
print(math.floor(3/2))
print(math.ceil(3/2))
print(math.sqrt(2))
print(math.pow(2,3)) # 2^3 = 8
```

### Max / Min Int
```python
float("inf")
float("-inf")
```

# List (built-in)

```python
list = [1, 'hello']
list.append(6) # [1, 'hello', 6]
list.pop() # [1, 'hello']
list.insert(1, 7) # [1, 7, 'hello']
list[0] = 0 # [0, 7, 'hello']

```
insertion: O(n) time complexity
indexing: O(1)

Characteristics:
ordered, mutable, support different data types, not unique

### Slicing
default start from 0 and end at length

```python
example = [1,2,3,4,5]
example[0:5] = [1,2,3,4,5]
example[4:5] = [5]
example[:] = [1,2,3,4,5]
example[3:] = [4,5]
example[:5] = [1,2,3,4,5]
```

### Initialize list of size n with default value of 1

```python
n = 5
arr = [1] * n # [1,1,1,1,1]
```

### Unpacking
make sure number of elements on both sides are equal

```python
a, b, c = [1, 2, 3]
# a = 1, b = 2, c = 3
```

### loop through list
```python
# use index
nums = [1, 2, 3]
for i in range(len(nums)):
	print(nums[i])
	
# without index
for n in nums:
	print(n)
	
# with index and value
for i, n in enumerate(nums):
	print(i, n) 
# 0 1
# 1 2
# 2 3
```

### loop through multiple lists simultaneously with unpacking
```python
nums1 = [1, 3, 5]
nums2 = [2, 4, 6]
for n1, n2 in zip(nums1, nums2):
	print(n1, n2)
# 1 2
# 3 4
# 5 6
```

### reverse list
```python
nums.reverse()
```

### sort list
```python
nums.sort() # ascending order by default
nums.sort(reverse=True) # descending

str = ["bob", "alice"]
str.sort() # by alphabetical order
```

### Custom sort
```python
str.sort(key=lambda x: len(x)) # ascending order
```

### List Comprehension
```python
str = [i for i in range(5)]
print(str) # [0, 1, 2, 3, 4]
str = [i+i for i in range(5)]
print(str) # [0, 2, 4, 6, 8]

# 2-D lists
grid = [[0] * 4 for i in range(4)]
```

# String
string is immutable, anytime modifying a string will create a new one in O(n) time.

```python
s = "abc"
print(s[0:2]) # ab

s += "def"
print(s) # abcdef
```

```python
print(int("123") + int("123")) # 246
print(str(123) + str(123)) # 123123
```
### ASCII

```python
print(ord("a")) # 97
print(ord("b")) # 98
```

### Combine a list of strings
```python
Strings = ["ab", "cd", "ef"]
print("".join(strings)) # abcdef
```

# Array
From array module or NumPy library.

Characteristics:
ordered, mutable

```python
import array as arr

my_arr = arr.array('I', [1,2,3,4,5])
print(my_arr) # result = ['I', [1,2,3,4,5]]
print(type(my_arr)) # array.array

import numpy as np
my_arr = np.array([1,2,3])
print(type(my_arr)) # numpy.ndarray
```

Arrays needs to be declared.
Arrays can store data very compactly.
Arrays are great for numerical operations.


# Module, Package, Library
Module: python file with .py extension.

```python
import <module name>
```

Packages: all the related modules inside a directory.

Library: consolidate several packages and put it under a single directory.


# Reverse string in Python
Method 1: for loop

```python
def reverse(s):
	"""reverse the input string s"""
	result = ""
	for i in s:
		result = i + result
	return result
```

Method 2: inbuilt reversed

```python
str = "abc"
result = "".join(reversed(s))
```

Method 3: extended slice

```python
string[start:end:step]
str = "abc"
print(str[ : : -1])
```

# Queues
```python
from collections import deque
queue = deque() # double ended queue
queue.append(1)
queue.append(2)
print(queue) # deque([1, 2])

queue.popleft() # deque([2])
queue.appendleft(1) # deque([1, 2])

queue.pop() # deque([1])
```

# HashSet
```python
mySet = set()
mySet.add(1)
mySet.add(2)
print(mySet) # {1, 2}
print(len(mySet)) # 2
print(1 in mySet) # True
print(3 in mySet) # False

mySet.remove(2) # {1}
```
we can initialize a set by:

```python
set([1, 2, 3])

# Set Comprehension
mySet = {i for i in range(5)} # {0, 1, 2, 3, 4}
```


# HashMap (Dictionary)
Unordered collection of items (key/value pair).

```python
my_dic = {<key>, <value>}
my_dic = {'name': 'John', 1:[2,4,3]}

myMap = {}
myMap["alice"] = 88
myMap["bob"] = 77

myMap["alice"] = 80 # change to a new value
myMap.pop("alice")
```

### Dict Comprehension

```python
myMap = {i: 2*i for i in range(3)}
# {0: 0, 1: 2, 2: 4}
```

### loop through maps

```python
myMap = {"alice": 90, "bob": 70}
for key in myMap:
	print(key, myMap[key]) # alice 90 bob 70

for val in myMap.values():
	print(val) # 90 70

for key, val in myMap.items():
	print(key, val) # alice 90 bob 70
```

# Tuple

Tuples are like lists but immutable.

```python
tup = (1, 2, 3)
print(tup) # (1, 2, 3)
print(tup[0]) # 1
print(tup[-1]) # 3
```

It can be used as key for hashmap or hashset

```python
myMap = {(1,2): 3}
print(myMap[(1,2)])

mySet = set()
mySet.add((1,2))
```

List cannot be keys.


# Heaps

```python
import heapq
minHeap = []	# min heap by default
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 2)
heapq.heappush(minHeap, 4)

# Min is always at index 0
print(minHeap[0])	# 2

while len(minHeap):
	print(heapq.heappop(minHeap)) # 2 3 4
```

No max heaps by default, work around is to use min heap and multiply by -1 when push & pop.

```python
import heapq
maxHeap = []	
heapq.heappush(minHeap, -3)
heapq.heappush(minHeap, -2)
heapq.heappush(minHeap, -4)

# Max is always at index 0
print(-1 * maxHeap[0]) # 4

while len(maxHeap):
	print(heapq.heappop(maxHeap)) # 4 3 2
```

### Build Heap from Initial values

```python
arr = [2, 1, 8, 4, 5]
heapq.heapify(arr)
while arr:
	print(heapq.heappop(arr)) # 1 2 4 5 8
```

# Function
Block of related statements designed to perform computational, logical, or evaluative task.

```python
def function_name(parameters):
	"""docstring"""
	statements
	return statements
	
def myFunc(n, m):
	return n * m
```

### Nested Functions
It have access to outer variables.

```python
def outer(a, b):
	c = "c"
	
	def inner():
		return a + b + c
		
	return inner()

print(outer("a", "b")) # abc
```

Can modify objects but not reassign unless using nonlocal keyword

```python
def double(arr, val):
	def helper():
		# Modifying list works since list are mutable
		for i, n in enumerate(arr):
			arr[i] *= 2
		
		# will only modify val in the helper scope
		val *= 2
		
		# this will modify val outside helper scope
		nonlocal val   # nonlocal keyword
		val *= 2
		
	helper()
	print(arr, val)

nums[1, 2]
val = 3
double(nums, val)	# [2, 4] 6	
```

# Python Class

```python
class MyClass:
	# Constructor
	def __init__(self, nums):
		# create member variable
		self.nums = nums
		self.size = len(nums)
	
	# self key word required as parameter
	def getLength(self):
		return self.size
		
	def getDoubleLength(self):
		return 2 * self.getLength()
```

Simple example of a python class.