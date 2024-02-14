import Airport from "../src/airport.js";
import StormyWeather from "..//src/stormyWeather.js";

describe(`Airport tests`, () => {
  it(`Test 1: addPlaneArray(@plane) adds the plane to the AddPlaneArray`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    // Act
    airport.addPlanes(plane);
    // Assert
    expect(airport.addPlaneArray).toContain(plane);
  });

  it(`Test 2: a plane without an id is unable to be added to the AddPlaneArray`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test," };
    // Act
    airport.addPlanes(plane);
    // Assert
    expect(airport.addPlaneArray).not.toContain(plane);
  });

  it(`Test 3 Planes can be added when addPlaneArray is not empty`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test2,", ID: "2" };
    // Act
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    // Assert
    expect(airport.addPlaneArray.length).toBe(2);
  });

  it(`Test 7: takeOff removes the plane object from the addPlaneArray`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    // Act
    airport.addPlanes(plane);
    airport.takeOff(plane);
    // Assert
    expect(airport.addPlaneArray).not.toContain(plane);
  });
});

describe(`Capacity of Airport`, () => {
  it(`Test 4: isAirportMax() returns true when length of addPlanesArray = airportMaxCapacity`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test2,", ID: "2" };
    // Act
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    // Assert
    expect(airport.isAirportMax()).toBe(true);
  });

  it(`Test 5: isAirportMax returns false when length of addPlanesArray <= airportMaxCapacity`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    // Act
    airport.addPlanes(plane);
    // Assert
    expect(airport.isAirportMax()).toBe(false);
  });

  it(`Test 6: Planes can't be added to addPlanesArray when isAirportMax() returns true`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test2,", ID: "2" };
    const plane3 = { model: "test3,", ID: "3" };
    // Act
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    airport.addPlanes(plane3);
    // Assert
    expect(airport.addPlaneArray.length).toBe(airport.airportMaxCapacity);
  });

  it(`Test 8: updateMaxCapacity changes the airportMaxCapacity of the airport`, () => {
    // Arrange
    const airport = new Airport();
    const newCapacity = 3;
    // Act
    airport.updateMaxCapacity(newCapacity);
    // Assert
    expect(airport.airportMaxCapacity).toBe(3);
  });
});

describe("Plane Tests", () => {
  it(`Test 9: getID returns the ID of a plane`, () => {
    //Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test2,", ID: "2" };
    const plane3 = { model: "test3,", ID: "3" };
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    airport.addPlanes(plane3);
    // Act
    let iD = airport.getID("2");
    // Assert
    expect(iD).toBe("2");
  });

  it(`Test 10: addPlaneArray returns true when plane is in the AddPlaneArray`, () => {
    //Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    airport.addPlanes(plane);
    //Act
    let planeAdded = airport.addPlaneArray.includes(plane);
    // Assert
    expect(planeAdded).toBe(true);
  });

  it(`Test 11: if addPlaneArray already has a specific plane it will not add to the array`, () => {
    //Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test,", ID: "1" };
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    //Act
    let duplicatePlane = airport.addPlaneArray.filter(
      (planeArray) => planeArray.ID === plane.ID
    );
    //Assert
    expect(duplicatePlane.length).toBe(1);
  });

  it(`Test 12: return all planes that are in the addPlaneArray`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    const plane2 = { model: "test,", ID: "2" };
    airport.addPlanes(plane);
    airport.addPlanes(plane2);
    // Act
    airport.getPlanes();
    //Assert
    expect(airport.getPlanes()).toEqual(airport.addPlaneArray);
  });
});

describe(`Weather Tests`, () => {
  it(`Test 13: isSafeToLand() returns false when isStormy() returns true`, () => {
    // Arrange
    const weather = new StormyWeather(true);
    //Act
    weather.isSafeToLand();
    // Assert
    expect(weather.isSafeToLand()).toBe(false);
  });

  it(`Test 14: isSafeToLand() prevents landing when isStormy() returns true`, () => {
    // Arrange
    const airport = new Airport();
    const weather = new StormyWeather();
    const plane = { model: "test,", ID: "1" };
    // Act
    weather.isSafeToLand();
    airport.getPlanes();
    // Assert
    expect(airport.addPlaneArray).not.toContain(plane);
  });
  it(`Test 15: isSafeToLand() returns true and allows landing when isStormy() returns false.`, () => {
    // Arrange
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };
    // Act
    airport.weatherCheck(plane);
    // Assert
    expect(airport.addPlaneArray).toContain(plane);
  });
  it(`Test 16: when isStormy returns true takeOff() is prevented`, () => {
    // Arrange
    const weather = new StormyWeather(true);
    const airport = new Airport(weather);
    const plane = { model: "test,", ID: "1" };

    airport.addPlanes(plane);
    // Act
    airport.takeOff(plane);
    // Assert
    expect(airport.addPlaneArray).toContain(plane);
  });
  it(`Test 17: when isStormy returns false takeoff is allowed`, () => {
    const airport = new Airport();
    const plane = { model: "test,", ID: "1" };

    airport.addPlanes(plane);
    // Act
    airport.takeOff(plane);
    // Assert
    expect(airport.addPlaneArray).not.toContain(plane);
  });
});
