# Domain Models and Test Plan

NOTES:
A simple Kanban board was used on Notion to control the workflow. Please see kanbanboard.png for image

1. As an air traffic controller I want to add a plane to an airport so that passengers can board and depart.

| Object  | Properties                   | messages          | output     |
| ------- | ---------------------------- | ----------------- | ---------- |
| Airport | addPlaneArray @Array(@plane) | addPlanes(@Plane) | @undefined |
| Plane   | ID @ String                  |                   |            |

Tests

1. addPlaneArray(@plane) adds the plane to the AddPlaneArray
2. a plane without an id is unable to be added to the AddPlaneArray
3. planes can be added when addPlaneArray is not empty

---

2. As a air traffic controller I want a see when the airport is at maximum capacity so that I know when I can’t land any more planes.

| Object  | Properties                   | messages       | output   |
| ------- | ---------------------------- | -------------- | -------- |
| airport | addPlaneArray @Array(@plane) | isAirportMax() | @boolean |
|         | airportMaxCapacity @interger |                |          |

Tests

1. isAirportMax() returns true when length of addPlanes = airportMaxCapacity
2. isAirportMax() returns false when length of addPlanes <= airportMaxCapacity
3. Planes can't be added to addPlanesArray when isAirportMax() returns true

---

3. As an air traffic controller I want to be able to remove planes from the airport so that I can instruct more to land.

| Object  | Properties                   | messages        | output |
| ------- | ---------------------------- | --------------- | ------ |
| airport | addPlaneArray @Array(@plane) | takeOff(@Plane) | @Void  |
| plane   | id @String                   |                 |        |

1. takeOff(@plane) removes the plane object from the addPlaneArray() array

---

4. As an air traffic controller I want to manually adjust the maximum capacity so that I can add more planes to the airport

| Object  | Properties                  | messages                    | output |
| ------- | --------------------------- | --------------------------- | ------ |
| airport | airportMaxCapacity @Integer | updateMaxCapacity(@Integer) | @void  |

1. updateMaxCapacity() changes the airportMaxCapacity of the airport

---

5. As an air traffic controller I want to be able to see what planes are at the airport so that I can keep within my maximum capacity.

| Object  | Properties                   | messages       | output |
| ------- | ---------------------------- | -------------- | ------ |
| Airport | addPlaneArray @Array(@plane) | getID(@String) | @plane |
| Plane   | ID @ String                  |                |        |

1. getID returns ID of a plane
2. addPlaneArray() returns true when plane is in addPlaneArray
3. addPlaneArray() already has plane it will not be added to array

---

6. As an air traffic controller I want to be unable to add a plane to the airport if it is already at the airport.

| Object  | Properties                   | messages                       | output         |
| ------- | ---------------------------- | ------------------------------ | -------------- |
| Airport | addPlaneArray @Array(@plane) | addPlanes(@Plane), getPLanes() | @Array(@plane) |
| Plane   | ID @ String                  |                                |                |

1. returns addPlaneArray

PLEASE NOTE THAT CO-PILOT WAS USED TO GENERATE THE USER STORY, DOMAIN MODEL AND TESTS - The tests and domain model have been adjusted to reflect usage already in place

7. As a pilot, I want to be prevented from landing if the weather is stormy, so that I can ensure the safety of my passengers and crew.

| Object  | Properties                               | messages                            | output   |
| ------- | ---------------------------------------- | ----------------------------------- | -------- |
| Plane   | ID @ String                              |                                     |          |
| Weather | isStormy @Boolean                        | isStormy() isSafeToLand()           | @boolean |
| Airport | addPlaneArray @ Array, weather @ Weather | getPlanes() addPlanes(plane: Plane) |          |

1. isSafeToLand() returns false when isStormy() returns true
2. isSafeToLand() prevents landing when isStormy() returns true
3. isSafeToLand() returns true and allows landing when isStormy() returns false

---

8. As a pilot, I want to be prevented from taking off if the weather is stormy, so that I can ensure the safety of my passengers and crew.

| Object  | Properties                               | messages              | output   |
| ------- | ---------------------------------------- | --------------------- | -------- |
| Plane   | ID @ String                              |                       |          |
| Weather | isStormy @Boolean                        | isStormy()            | @boolean |
| Airport | addPlaneArray @ Array, weather @ Weather | takeOff(plane: Plane) |          |

1. when isStormy returns true takeOff() is prevented
2. when isStormy returns false takeoff is allowed
