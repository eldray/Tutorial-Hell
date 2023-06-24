name = input("Type your name: ")
print("Welcome", name, " to this adventure!")

answer = input("So you're on a dirty road, it has come to an end and you can go left or right. Which way would you like to go?")

if answer == "left":
	answer = input("You come to a river, you can walk around it or swim across? Type walk to walk around or swim to swim across: ")

	if answer == "swim":
		print("You swam across and were eaten by an aligator.")
	elif answer == "walk":
		print("You walked many miles, ran out of water and you lost your life.")
	else:
		print('Not a valid option. You lose.')

elif answer == "right":
	answer = input("You come to a bridge, it looks wobbly, do you want to cross it(cross) or head back(back)? ")

	if answer == "back":
		print("You went back to the main road. and You lost")
	elif answer == "cross":
		answer = input("You cross the bridge and met some strangers. Do yo talk to them(yes/no)? ")
	if answer == "yes":
		print("You talk to the strangers and they gave you gold. You win!")
	elif answer == "no":
		print("You ignore the strangers and they were offended and You lose!")
	else:
		print('Not a valid option. You lose.')

else:
	print('Not a valid option. You lose.')

print("Thanks for tryng", name)
