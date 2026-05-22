import {
  EventObject,
  EventType,
  ParkingLot,
  Subscriber,
} from "./parking_lot.ts";

export class Display implements Subscriber {
  update(event: EventObject): void {
    if (event.eventType === EventType.Enter) {
      console.log(
        `a car entered the lot ${event.lotname} occupied: ${event.lotOccupied}/${event.lotCapacity}`,
      );
    } else if (event.eventType === EventType.Exit) {
      console.log(
        `a car left the lot ${event.lotname} occupied: ${event.lotOccupied}/${event.lotCapacity}`,
      );
    }
  }
}
