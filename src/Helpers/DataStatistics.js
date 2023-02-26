import * as FileSystem from "expo-file-system";

class DataStatistics {
  constructor(
    mainStone = 0,
    mainIron = 0,
    mainZCoins = 0,
    mainDiamonds = 0,
    stone500 = 0,
    stone150 = 0,
    stone50 = 0,
    stone10 = 0,
    stone5 = 0,
    stone2 = 0,
    iron300 = 0,
    iron100 = 0,
    iron30 = 0,
    iron6 = 0,
    iron3 = 0,
    iron2 = 0,
    zCoins500 = 0,
    zCoins100 = 0,
    zCoins50 = 0,
    zCoins15 = 0,
    zCoins5 = 0,
    zCoins1 = 0,
    diamonds50 = 0,
    diamonds20 = 0,
    diamonds10 = 0
  ) {
    this.mainStone = mainStone;
    this.mainIron = mainIron;
    this.mainZCoins = mainZCoins;
    this.mainDiamonds = mainDiamonds;
    this.stone500 = stone500;
    this.stone150 = stone150;
    this.stone150 = stone150;
    this.stone50 = stone50;
    this.stone10 = stone10;
    this.stone5 = stone5;
    this.stone2 = stone2;
    this.iron300 = iron300;
    this.iron100 = iron100;
    this.iron30 = iron30;
    this.iron6 = iron6;
    this.iron3 = iron3;
    this.iron2 = iron2;
    this.zCoins500 = zCoins500;
    this.zCoins100 = zCoins100;
    this.zCoins50 = zCoins50;
    this.zCoins15 = zCoins15;
    this.zCoins5 = zCoins5;
    this.zCoins1 = zCoins1;
    this.diamonds50 = diamonds50;
    this.diamonds20 = diamonds20;
    this.diamonds10 = diamonds10;
  }

  getTotalStone = () => {
    return (
      this.mainStone +
      this.stone500 * 500 +
      this.stone150 * 150 +
      this.stone50 * 50 +
      this.stone10 * 10 +
      this.stone5 * 5 +
      this.stone2 * 2
    );
  };

  getTotalIron = () => {
    return (
      this.mainIron +
      this.iron300 * 300 +
      this.iron100 * 100 +
      this.iron30 * 30 +
      this.iron6 * 6 +
      this.iron3 * 3 +
      this.iron2 * 2
    );
  };

  getTotalZCoins = () => {
    return (
      this.mainZCoins +
      this.zCoins500 * 500 +
      this.zCoins100 * 100 +
      this.zCoins50 * 50 +
      this.zCoins15 * 15 +
      this.zCoins5 * 5 +
      this.zCoins1
    );
  };

  getTotalDiamonds = () => {
    return (
      this.mainDiamonds +
      this.diamonds50 * 50 +
      this.diamonds20 * 20 +
      this.diamonds10 * 10
    );
  };

  getMainStone = () => this.mainStone;
  getMainIron = () => this.mainIron;
  getMainZCoins = () => this.mainZCoins;
  getMainDiamonds = () => this.mainDiamonds;

  loadStatistics = async (
    fileDirectory = FileSystem.cacheDirectory + "saved"
  ) => {
    const file = await FileSystem.readAsStringAsync(
      fileDirectory + "statistics"
    );
    const fileToObject = JSON.parse(file);

    return fileToObject;
  };

  saveStatistics = async (
    fileDirectory = FileSystem.cacheDirectory + "saved",
    fileObject
  ) => {
    const fileToString = JSON.stringify(fileObject);
    await FileSystem.writeAsStringAsync(
      fileDirectory + "statistics",
      fileToString
    );
  };

  updateStatistics = (updateObject) => {};
}

const statisticsDriver = new DataStatistics();
export { statisticsDriver };
