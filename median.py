import math 
#output the median including for the given input of list of numbers no matter the order
my_list = []
while True:  
        x = input('Input a number to be included in the list to calculate the median: ')
        if not x:
            break
        my_list.append(x)
new_list = [eval(i) for i in my_list]#cast list of strings to ints
new_list.sort()#list in order least to greatest
print('here is your list: ', new_list)
def median(arg):
      if len(arg)%2 == 0:#even number of elements
           a = int((len(arg)/2)) - 1 
           z = a+1
           sum = arg[a] + arg[z]
           mean = sum/2
           return mean
      else:#odd number
        n = int(math.ceil(len(arg)/2)) - 1
        return arg[n]   
print('your median is: ', median(new_list))#passes param
#try: 2, 4, 5, 7, 9, 14, 17, 25 : 8
            


