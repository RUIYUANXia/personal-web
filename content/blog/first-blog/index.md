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

This is my first blog! Let's start by introducing some basic python knowledge.


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

# Class

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

# Linked List Implementaion 
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def insert_at_head(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def insert_at_tail(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node

    def delete(self, data):
        if self.is_empty():
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next is not None:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search(self, data):
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def display(self):
        current = self.head
        while current is not None:
            print(current.data, end=" ")
            current = current.next
        print()


# Example usage:
linked_list = LinkedList()

linked_list.insert_at_head(3)
linked_list.insert_at_head(2)
linked_list.insert_at_head(1)

linked_list.display()  # Output: 1 2 3
```

# Merge Sorted Array
```python
def merge_sorted_arrays(arr1, arr2):
    merged_array = []
    i = 0
    j = 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged_array.append(arr1[i])
            i += 1
        else:
            merged_array.append(arr2[j])
            j += 1

    while i < len(arr1):
        merged_array.append(arr1[i])
        i += 1

    while j < len(arr2):
        merged_array.append(arr2[j])
        j += 1

    return merged_array

# Example usage:
array1 = [2, 4, 6, 8, 10]
array2 = [1, 3, 5, 7, 9]

merged = merge_sorted_arrays(array1, array2)
print(merged)
```

```python
def merge_and_sort(arr1, arr2):
    merged_array = arr1 + arr2
    sorted_array = sorted(merged_array)
    return sorted_array

# Example usage:
array1 = [2, 4, 6, 8, 10]
array2 = [1, 3, 5, 7, 9]

merged_sorted = merge_and_sort(array1, array2)
print(merged_sorted)

```

# Factorial

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

# palindrome

```python
def is_palindrome(string):
    return string == string[::-1]
```
# COUNT word frequency

```python
def count_word_frequency(file_path):
    word_freq = {}
    with open(file_path, 'r') as file:
        for line in file:
            words = line.strip().split()
            for word in words:
                if word in word_freq:
                    word_freq[word] += 1
                else:
                    word_freq[word] = 1
    return word_freq
```

# MAX subarray sum

```python
def max_subarray_sum(arr):
    max_sum = float('-inf')
    current_sum = 0

    for num in arr:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum
```

# Reverse Linked List

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_linked_list(head):
    prev = None
    curr = head

    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    return prev
```

# Find Median of two sorted array

```python
def find_median_sorted_arrays(nums1, nums2):
    merged = sorted(nums1 + nums2)
    length = len(merged)
    mid = length // 2

    if length % 2 == 0:
        return (merged[mid - 1] + merged[mid]) / 2
    else:
        return merged[mid]
```

# Remove duplicate

```python
def remove_duplicates(lst):
    return list(set(lst))
```

# Binary Search over a sorted array

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

# Longest Common Prefix

```python
def longest_common_prefix(strs):
    if not strs:
        return ""

    prefix = strs[0]
    for i in range(1, len(strs)):
        while strs[i].find(prefix) != 0:
            prefix = prefix[:len(prefix) - 1]
            if not prefix:
                return ""
    
    return prefix
```

# Fibonacci

```python
def fibonacci(n):
    fib_seq = [0, 1]
    while fib_seq[-1] < n:
        fib_seq.append(fib_seq[-1] + fib_seq[-2])
    
    return fib_seq[:-1]
```

# Pandas

1. Load the given CSV file into a pandas DataFrame and display the first 5 rows.

```python
import pandas as pd

df = pd.read_csv("file.csv")
print(df.head())
```

2. Find the total number of rows and columns in a DataFrame.

```python
num_rows = df.shape[0]
num_cols = df.shape[1]
print("Number of rows:", num_rows)
print("Number of columns:", num_cols)
```

3. Calculate the average of a specific column in a DataFrame.

```python
column_avg = df["column_name"].mean()
print("Average:", column_avg)
```

4. Sort a DataFrame based on a specific column in ascending order.

```python
sorted_df = df.sort_values("column_name", ascending=True)
print(sorted_df)
```

5. Filter rows in a DataFrame based on a condition (e.g., values greater than a certain threshold).

```python
filtered_df = df[df["column_name"] > threshold]
print(filtered_df)
```

6. Group a DataFrame by a specific column and calculate the mean value for each group.

```python
grouped_df = df.groupby("column_name").mean()
print(grouped_df)
```

7. Merge two DataFrames based on a common column.

```python
merged_df = pd.merge(df1, df2, on="common_column")
print(merged_df)
```

8. Remove duplicate rows from a DataFrame.

```python
deduplicated_df = df.drop_duplicates()
print(deduplicated_df)
```

9. Perform a left join on two DataFrames using a specific column as the key.

```python
left_join_df = pd.merge(df1, df2, on="key_column", how="left")
print(left_join_df)
```

10. Calculate the correlation coefficient between two columns in a DataFrame.

```python
correlation_coefficient = df["column1"].corr(df["column2"])
print("Correlation coefficient:", correlation_coefficient)
```

11. Replace missing values (NaN) in a DataFrame with the mean value of the respective column.

```python
df.fillna(df.mean(), inplace=True)
print(df)
```

12. Create a new column in a DataFrame based on the values of existing columns.

```python
df["new_column"] = df["column1"] + df["column2"]
print(df)
```

13. Aggregate data in a DataFrame by grouping based on multiple columns and calculating the sum or average.

```python
aggregated_df = df.groupby(["column1", "column2"]).sum()
print(aggregated_df)
```

14. Reshape a DataFrame from wide to long format using the melt function.

```python
melted_df = pd.melt(df, id_vars=["id_column"], value_vars=["col1", "col2"], var_name="variable", value_name="value")
print(melted_df)
```

15. Perform a pivot operation on a DataFrame to convert unique values from one column into multiple columns.

```python
pivot_df = df.pivot(index="index_column", columns="column_to_pivot", values="values_column")
print(pivot_df)
```

# Numpy

1. Create a NumPy array with values ranging from 1 to 10.

```python
import numpy as np

arr = np.arange(1, 11)
print(arr)
```

2. Find the maximum value in a given NumPy array.

```python
max_value = np.max(arr)
print("Maximum value:", max_value)
```

3. Calculate the mean of a specific axis in a multi-dimensional NumPy array.

```python
mean = np.mean(arr, axis=0)
print("Mean:", mean)
```

4. Reshape a 1D NumPy array into a 2D array with a specified number of rows and columns.

```python
reshaped_arr = np.reshape(arr, (2, 5))
print(reshaped_arr)
```

5. Generate a random NumPy array of size 5x5.

```python
random_arr = np.random.random((5, 5))
print(random_arr)
```

6. Multiply two NumPy arrays element-wise.

```python
result = arr1 * arr2
print(result)
```

7. Find the index positions of non-zero elements in a NumPy array.

```python
non_zero_indices = np.nonzero(arr)
print(non_zero_indices)
```

8. Sort a NumPy array in ascending order.

```python
sorted_arr = np.sort(arr)
print(sorted_arr)
```

9. Calculate the dot product of two NumPy arrays.

```python
dot_product = np.dot(arr1, arr2)
print(dot_product)
```

10. Transpose a NumPy array.

```python
transposed_arr = np.transpose(arr)
print(transposed_arr)
```

11. Concatenate two NumPy arrays vertically.

```python
concatenated_arr = np.vstack((arr1, arr2))
print(concatenated_arr)
```

12. Find the unique values in a NumPy array.

```python
unique_values = np.unique(arr)
print(unique_values)
```

13. Replace all negative values in a NumPy array with 0.

```python
arr[arr < 0] = 0
print(arr)
```

14. Calculate the sum of elements along a specific axis in a NumPy array.

```python
sum_axis0 = np.sum(arr, axis=0)
print("Sum along axis 0:", sum_axis0)
```

15. Extract a subset of elements from a NumPy array based on a given condition.

```python
subset_arr = arr[arr > 5]
print(subset_arr)
```

# Dictionary 

1. Write a Python function to count the frequency of each element in a list and return the result as a dictionary.

```python
def count_frequency(lst):
    freq_dict = {}
    for element in lst:
        if element in freq_dict:
            freq_dict[element] += 1
        else:
            freq_dict[element] = 1
    return freq_dict
```

2. Given two lists of equal length, write a Python function to create a dictionary where the elements from the first list are the keys, and the elements from the second list are the values.

```python
def create_dictionary(keys, values):
    result_dict = {}
    for i in range(len(keys)):
        result_dict[keys[i]] = values[i]
    return result_dict
```

3. Implement a Python function to find the key with the maximum value in a dictionary.

```python
def find_max_key(dictionary):
    max_value = float('-inf')
    max_key = None
    for key, value in dictionary.items():
        if value > max_value:
            max_value = value
            max_key = key
    return max_key
```

4. Write a Python function to merge two dictionaries. If a key exists in both dictionaries, the value should be the sum of the values from both dictionaries.

```python
def merge_dictionaries(dict1, dict2):
    merged_dict = dict1.copy()
    for key, value in dict2.items():
        if key in merged_dict:
            merged_dict[key] += value
        else:
            merged_dict[key] = value
    return merged_dict
```

5. Given a list of strings, write a Python function to group the strings into a dictionary where the keys are the lengths of the strings, and the values are lists of strings with the corresponding lengths.

```python
def group_strings_by_length(strings):
    grouped_dict = {}
    for string in strings:
        length = len(string)
        if length in grouped_dict:
            grouped_dict[length].append(string)
        else:
            grouped_dict[length] = [string]
    return grouped_dict
```

6. Write a Python function to find the common elements between two dictionaries (i.e., the keys that exist in both dictionaries).

```python
def find_common_keys(dict1, dict2):
    common_keys = []
    for key in dict1:
        if key in dict2:
            common_keys.append(key)
    return common_keys
```

7. Implement a Python function to sort a dictionary by its values in descending order.

```python
def sort_dict_by_values(dictionary):
    sorted_dict = dict(sorted(dictionary.items(), key=lambda x: x[1], reverse=True))
    return sorted_dict
```

8. Given a nested dictionary where the keys are strings and the values are either strings or nested dictionaries, write a Python function to flatten the dictionary into a single-level dictionary.

```python
def flatten_dictionary(dictionary, parent_key='', flattened_dict={}):
    for key, value in dictionary.items():
        new_key = parent_key + '.' + key if parent_key else key
        if isinstance(value, dict):
            flatten_dictionary(value, new_key, flattened_dict)
        else:
            flattened_dict[new_key] = value
    return flattened_dict
```

9. Write a Python function to remove all occurrences of a specific value from a dictionary.

```python
def remove_value(dictionary, value):
    keys_to_remove = []
    for key, val in dictionary.items():
        if val == value:
            keys_to_remove.append(key)
    for key in keys_to_remove:
        del dictionary[key]
    return dictionary
```

10. Given a dictionary of students and their scores, write a Python function to find the student(s) with the highest score(s).

```python
def find_students_with_highest_score(students):
    highest_score = float('-inf')
    highest_score_students = []
    
    for student, score in students.items():
        if score > highest_score:
            highest_score = score
            highest_score_students = [student]
        elif score == highest_score:
            highest_score_students.append(student)
    
    return highest_score_students
```

# List


1. Write a Python function to find the second largest element in a list.

```python
def find_second_largest(lst):
    largest = float('-inf')
    second_largest = float('-inf')
    
    for num in lst:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num < largest:
            second_largest = num
    
    return second_largest
```

2. Given a list of integers, write a Python function to find the maximum product of two distinct numbers from the list.

```python
def find_max_product(lst):
    if len(lst) < 2:
        return None
    
    max_product = float('-inf')
    
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            product = lst[i] * lst[j]
            if product > max_product:
                max_product = product
    
    return max_product
```

3. Implement a Python function to reverse a list in-place (without using the built-in `reverse()` function).

```python
def reverse_list(lst):
    left = 0
    right = len(lst) - 1
    
    while left < right:
        lst[left], lst[right] = lst[right], lst[left]
        left += 1
        right -= 1
    
    return lst
```

4. Write a Python function to remove duplicates from a list while preserving the original order of elements.

```python
def remove_duplicates(lst):
    seen = set()
    result = []
    
    for num in lst:
        if num not in seen:
            result.append(num)
            seen.add(num)
    
    return result
```

5. Given a list of integers, write a Python function to find the longest increasing subsequence (a subsequence where the elements are in increasing order).

```python
def longest_increasing_subsequence(lst):
    if not lst:
        return []
    
    lengths = [1] * len(lst)
    previous = [-1] * len(lst)
    
    for i in range(1, len(lst)):
        for j in range(i):
            if lst[i] > lst[j] and lengths[i] < lengths[j] + 1:
                lengths[i] = lengths[j] + 1
                previous[i] = j
    
    max_length = max(lengths)
    max_index = lengths.index(max_length)
    
    result = []
    while max_index != -1:
        result.insert(0, lst[max_index])
        max_index = previous[max_index]
    
    return result
```

7. Write a Python function to merge two sorted lists into a single sorted list.

```python
def merge_sorted_lists(lst1, lst2):
    merged = []
    i = 0
    j = 0
    
    while i < len(lst1) and j < len(lst2):
        if lst1[i] < lst2[j]:
            merged.append(lst1[i])
            i += 1
        else:
            merged.append(lst2[j])
            j += 1
    
    while i < len(lst1):
        merged.append(lst1[i])
        i += 1
    
    while j < len(lst2):
        merged.append(lst2[j])
        j += 1
    
    return merged
```

8. Given a list of strings, write a Python function to sort the list in lexicographic (dictionary) order.

```python
def sort_lexicographically(lst):
    return sorted(lst)
```

9. Implement a Python function to remove the nth occurrence of a specified element from a list.

```python
def remove_nth_occurrence(lst, element, n):
    count = 0
    result = []
    
    for num in lst:
        if num == element:
            count += 1
            if count != n:
                result.append(num)
        else:
            result.append(num)
    
    return result
```

10. Write a Python function to find the intersection of two lists (i.e., the common elements between two lists).

```python
def find_intersection(lst1, lst2):
    return list(set(lst1) & set(lst2))
```

# String

1. Reverse String:

```python
def reverse_string(string):
    return string[::-1]
```

2. Anagram Check:

```python
def is_anagram(str1, str2):
    return sorted(str1) == sorted(str2)
```

3. Palindrome Check:

```python
def is_palindrome(string):
    return string == string[::-1]
```

4. Count Vowels:

```python
def count_vowels(string):
    vowels = "aeiou"
    count = 0
    for char in string:
        if char.lower() in vowels:
            count += 1
    return count
```

5. Longest Common Prefix:

```python
def longest_common_prefix(strings):
    if not strings:
        return ""
    prefix = strings[0]
    for string in strings[1:]:
        while string[:len(prefix)] != prefix:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix
```

6. Remove Duplicates:

```python
def remove_duplicates(string):
    return "".join(set(string))
```

7. String Compression:

```python
def compress_string(string):
    compressed = ""
    count = 1
    for i in range(len(string)):
        if i + 1 < len(string) and string[i] == string[i + 1]:
            count += 1
        else:
            compressed += string[i] + str(count)
            count = 1
    return compressed if len(compressed) < len(string) else string
```

8. Valid Parentheses:

```python
def is_valid_parentheses(string):
    stack = []
    parentheses_map = {")": "(", "}": "{", "]": "["}
    for char in string:
        if char in parentheses_map.values():
            stack.append(char)
        elif char in parentheses_map.keys():
            if not stack or parentheses_map[char] != stack.pop():
                return False
    return len(stack) == 0
```

9. Sentence Capitalization:

```python
def capitalize_sentence(sentence):
    return " ".join(word.capitalize() for word in sentence.split())
```

10. Check Substring:

```python
def is_substring(string, substring):
    return substring in string
```



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

# SQL injection

SQL injection is a security vulnerability that occurs when an attacker can manipulate or inject malicious SQL code into an application's database query. It happens when user-supplied input is directly concatenated into SQL statements without proper sanitization or parameterization.

An attacker can potentially access, modify, or delete data from the database, execute unauthorized commands, or even gain control of the entire application or underlying server.