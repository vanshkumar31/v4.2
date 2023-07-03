'''
Basic
->print()-->use to print or get output
->code sperate by indentation
->no need to define the variable data type 
->variable are of two type A.local and B.Global
A.local-->local variable is created within a function and can be only used inside that function
b.Global-->global variable is created in the main body of the code and can be used anywhere within the code
->int: 3, -8, 0
->float: 7.349, -9.0, 0.0000001
->complex: 6 + 2i
->str: “Hello World!!!”
->Boolean data:True or False.
->list: A list is an ordered collection of data with elements separated by a comma and enclosed within square brackets. Lists are mutable and can be modified after creation.
->tuple: A tuple is an ordered collection of data with elements separated by a comma and enclosed within parentheses. Tuples are immutable and can not be modified after creation.
->range: returns a sequence of numbers as specified by the user
->dict: a dictionary is an unordered collection of data containing a key:value pair. The key:value pairs are enclosed within curly brackets.
->Set :Set is an unordered collection of elements in which no element is repeated. The elements of sets are separated by a comma and contained within curly braces.
->None:None is used to define a null value
->Arithmetic operators:+,-,*(multi),/,**(power/Exponential),%(modulus),//(floor division)
->Assignment operators:=(a=b),
a+=b(a=a+b),
-=(a=a-b),
*=a=(a*b),
**=a=(a**b),
/*a=(a/b),
//=a=(a//b),
%=(a=a%b),
&=(a=a&b),
|=(a=a|b)
-->Comparison operators:
Equal(==)-->a==b
Not Equal(!=)-->a!=b
Less Than(<)-->a>b
Greater Than(>)-->a<b
Less Than or Equal to(<=)-->a>=b
Greater Than  or Equal to(>=)-->a<=b
-->Membership operators:
in-->a in b
Returns True if a is present in given sequence or collection
not in-->a not in b
Returns True if a is not present in given sequence or collection
-->bool() is a function is used to tell wheater it is true or false
-->len() is  a function used to determine how many items 
-->type() is a function which returns a new type class or essentially a metaclass.
-->set() constructor to make a set.

'''
a=4
b=6.4
if(a==b):
    print("Equal")

else:
    print("something different")
list_example=[1,2,3,4,5,6,7,8,9]
is_list_example = [1, 2, 3, 4, 5, 6, 7, 8, 9,5]#here 5 is repeat but it still remain list
tuple_example=(1,2,3,4,5,6,7,8,9)
is_tuple_example=(1,2,3,4,5,6,7,8,9)
#here 5 is repeat ,no more tuple
#by this we can know this statement is true or not
print("List:", bool(list_example))
print("List:", bool(is_list_example))
print("Tuple:",bool(tuple_example))
print("Tuple:",bool(is_tuple_example))

dict_example={"name":"Vansh","fav_sub":"Computer,business"}
is_dict_example={"name":"Vansh","fav_sub":"Computer,business"}
set_example={"apple", "banana", "cherry"}
is_set_example={"apple", "banana", "cherry","apple"}

'''
-->List is a collection which is ordered and changeable. Allows duplicate members.use square bracket
-->Tuple is a collection which is ordered and unchangeable. Allows duplicate members.use  parentheses
-->Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.use curly braces
-->Dictionary is a collection which is ordered and changeable. No duplicate members.use curly braces
'''
