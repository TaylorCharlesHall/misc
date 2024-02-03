import math

my_list=[]
while True:
    x = input('enter an element in data list to take standard dev: ')
    if not x:
            break
    my_list.append(x)
new_list = [eval(i) for i in my_list]#cast strings to list of ints
def average(list):#taking the mean
      return sum(list)/len(list)
avg = average(new_list)#function call assigned to avg
print('your mean is: ', avg)
var_list = [i-avg for i in new_list]
var_list2 = [i*i for i in var_list]
variance = sum(var_list2)/len(var_list2)
print('here is the variance: ', variance)
stanDev = math.sqrt(variance)
print('here is the standard deviation: ', stanDev)


