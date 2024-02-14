import StormyWeather from "..//src/stormyWeather.js";

export default class Airport {
  constructor(weather = new StormyWeather()) {
    this.addPlaneArray = [];
    this.airportMaxCapacity = 2;
    this.weather = weather;
  }
  weatherCheck(plane) {
    if (this.weather.isSafeToLand() === false) {
      return "The weather is bad reroute plane to another airport";
    }
    this.addPlaneArray.push(plane);
  }

  addPlanes(plane) {
    if (this.addPlaneArray.find((planeArray) => planeArray.ID === plane.ID)) {
      return "This plane is already at the airport";
    } else if (!plane.hasOwnProperty("ID")) {
      return "Plane does not have ID";
    } else if (this.addPlaneArray.length === this.airportMaxCapacity) {
      return "Airport Full either reroute plane or have a plane take-off";
    }
    this.addPlaneArray.push(plane);
  }
  takeOff(plane) {
    if (this.weather.isStormy === true) {
      return "Weather really Stormy no takeoffs allowed";
    }
    let index = this.addPlaneArray.indexOf(plane);
    if (index !== -1) {
      this.addPlaneArray.splice(index, 1);
    }
  }
  getID(id) {
    let plane = this.addPlaneArray.find((plane) => plane.ID === id);
    return plane ? plane.ID : null;
  }

  isAirportMax() {
    if (this.addPlaneArray.length === this.airportMaxCapacity) {
      return true;
    } else {
      return false;
    }
  }
  updateMaxCapacity(newCapacity) {
    this.airportMaxCapacity = newCapacity;
  }

  getPlanes() {
    return this.addPlaneArray;
  }
}
