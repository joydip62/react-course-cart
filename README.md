# Course-Registration

## Questions

- Add at least 3 Project features

- Discuss how you managed the state in your assignment project.

## Answer

Project features

##

- Add the course into cart with price and credit
- Could not add same course multiple time
- In cart showed how much use credit and how much credit remaining
- Can not add courses more than 20 credit

##

Discuss how you managed the state in your assignment project.

##

- I am using useEffect() for fetch json data
- Those data added into courses state for showing in a card with map() loop
- Using handleClick() function for handling the data and sending the home component to the Cart component.
- Using setSelectedCoursesCredit state for calculate credit and pass the state Home component to the Cart component.
- Using setRemainingCredit state to show that how much credit remaining and pass the state Home component to Cart component.
- Using setCoursePrice state to show the price of the courses and pass the state Home component to the Cart component.
