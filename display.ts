import { EventType, ParkingLot, Subscriber } from "./parking_lot.ts";

export class Display implements Subscriber {
  update(eventType: EventType, lot: ParkingLot): void {
    if (eventType === EventType.Enter) {
      console.log(
        `a car entered the lot ${lot.name} occupied: ${lot.occupied}/${lot.capacity}`,
      );
    } else if (eventType === EventType.Exit) {
      console.log(
        `a car left the lot ${lot.name} occupied: ${lot.occupied}/${lot.capacity}`,
      );
    }
  }
}
