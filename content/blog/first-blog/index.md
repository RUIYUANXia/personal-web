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

# Python Iterator

In Python, an iterator is an object that implements the iterator protocol, which consists of the `__iter__()` and `__next__()` methods. Iterators are used to iterate over a collection of elements or values, one at a time, without needing to know the underlying structure of the collection.

Here's an example of creating and using a simple iterator in Python:

```python
class MyIterator:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < self.limit:
            value = self.current
            self.current += 1
            return value
        else:
            raise StopIteration

# Creating an instance of the iterator
my_iter = MyIterator(5)

# Iterating over the iterator using a for loop
for value in my_iter:
    print(value)
```

In this example, the `MyIterator` class defines an iterator that produces values from 0 to `limit - 1`. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns the next value in the iteration or raises a `StopIteration` exception when there are no more elements to iterate over.

To use the iterator, we create an instance of the `MyIterator` class and then iterate over it using a for loop. Each iteration retrieves the next value from the iterator using the `next()` function, and the loop continues until a `StopIteration` exception is raised.

Python also provides built-in functions and constructs that work with iterators, such as `iter()`, `next()`, and the `for` loop. These built-in features make it easy to work with iterators in Python.

# Python decorator

In Python, a decorator is a special kind of function that can be used to modify or enhance the behavior of other functions or classes. Decorators allow you to wrap a function or class with additional functionality without directly modifying its source code.

Here's a simple example to illustrate the basic syntax and usage of decorators:

```python
def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        # Code to be executed before the original function
        print("Before the function")

        # Call the original function
        result = original_function(*args, **kwargs)

        # Code to be executed after the original function
        print("After the function")

        # Return the result of the original function
        return result

    # Return the wrapper function
    return wrapper_function

# Define a function and apply the decorator
@decorator_function
def greet(name):
    print(f"Hello, {name}!")

# Call the decorated function
greet("John")
```

In this example, the `decorator_function` is defined as a decorator. It takes the original function (`original_function`) as an argument and returns a new function (`wrapper_function`) that wraps the original function. The `wrapper_function` is responsible for executing code before and after calling the original function.

By using the `@decorator_function` syntax before the `greet` function definition, we apply the decorator to the `greet` function. So when we call `greet("John")`, it actually invokes the `wrapper_function`, which executes the additional code before and after calling the original `greet` function.

The output of the above example would be:

```
Before the function
Hello, John!
After the function
```

This is a basic example, but decorators can be more powerful and flexible. They can take arguments, be applied to classes, or even be stacked to apply multiple decorators to a single function or class. Decorators are commonly used in Python frameworks and libraries to implement features like authentication, logging, and caching.


# virtual function

In object-oriented programming, a virtual function is a function declared in a base class that can be overridden by a derived class. It enables polymorphic behavior, allowing different derived classes to provide their own implementation of the function while still adhering to a common interface defined in the base class.

In languages such as C++ and C#, the concept of virtual functions is supported. Here's an example in C++ to demonstrate the usage of virtual functions:

```cpp
#include <iostream>

class Base {
public:
    virtual void print() {
        std::cout << "Base class print function" << std::endl;
    }
};

class Derived : public Base {
public:
    void print() override {
        std::cout << "Derived class print function" << std::endl;
    }
};

int main() {
    Base* basePtr = new Derived();
    basePtr->print();  // Output: Derived class print function

    delete basePtr;
    return 0;
}
```

In the example above:
- The `Base` class declares a virtual function called `print()`. It provides a default implementation.
- The `Derived` class inherits from `Base` and overrides the `print()` function with its own implementation.
- In the `main()` function, a pointer of type `Base*` is created and assigned an instance of `Derived`.
- When `basePtr->print()` is called, the function invocation is resolved dynamically at runtime. It invokes the overridden function in the `Derived` class rather than the base implementation. This is known as dynamic or late binding.

The output of the example would be `"Derived class print function"`, indicating that the overridden function in the derived class was invoked, despite the variable being of type `Base*`.

Virtual functions allow for polymorphism, where different derived classes can have different behaviors for the same function defined in the base class. This flexibility enables code reuse, extensibility, and the ability to work with objects of different derived classes through a common interface.