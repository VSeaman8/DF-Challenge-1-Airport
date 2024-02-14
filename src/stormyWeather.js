export default class StormyWeather {
  constructor(isStormy = false) {
    this.isStormy = isStormy;
  }

  isSafeToLand() {
    if (this.isStormy === true) {
      return false;
    }
    return true;
  }
}
