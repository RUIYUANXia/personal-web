---
slug: '/coding blog'
date: '2023-07-26'
updatedAt: '2023-07-26'
title: "Coding Practice in Python!"
# Description should be no more than 160 characters in length
description: "Let's explore some fundamental coding exercise!"
categories: ["python"]
banner: './images/banner.png'

---

import Link from "$components/Link";
import Quote from "$components/mdx/Quote";

![banner](./images/banner.png)


## Motivation

In this blog, let's walk through some basic types of coding questions during an interview.

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