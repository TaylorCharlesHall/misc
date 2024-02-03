import random
#numbers to choose for powerball as of 2/3/2024
n = int(input('How many tickets will you buy?'))
for n in range(n):
    my_nums = [0]*5#initialize to 0
    for i in range(5):
            x = random.randint(1, 69)
            while x in my_nums:#prevents repeating numbers in first 5
                    x = random.randint(1, 69)
            my_nums[i]=x
    pb = random.randint(1, 26)#powerball selection
    my_nums.append(pb)
    print('So your lotto numbers this week are: ', my_nums, '<--powerball number')
print('your chances of winning a prize is ',float(n/(24.87))*100,'%')
print('your chances of winning the grand prize is ',float(n/(292201338))*100,'%')
print('Good luck!')
