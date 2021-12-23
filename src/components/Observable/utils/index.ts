export type TemperatureObserver = (temperature: number) => void;

export class WeatherSubject {
  private observers: TemperatureObserver[] = [];
  private intervalID = null;

  public attach(observer: TemperatureObserver) {
    this.observers.push(observer);
  }

  public detach(observerToRemove: TemperatureObserver) {
    this.observers.filter(
      (currentObserver) => currentObserver !== observerToRemove
    );
  }
}
