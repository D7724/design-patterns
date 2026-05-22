export class ParkingLot implements Publisher {
  public occupied: number = 0;
  private subscribers: Subscriber[] = [];

  constructor(
    public name: string,
    public capacity: number,
  ) {}

  notify(eventType: EventType): void {
    this.subscribers.forEach((subscriber) =>
      subscriber.update(eventType, this)
    );
  }
  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  enter() {
    if (!this.isFull()) {
      this.occupied++;
      this.notify(EventType.Enter);
    } else {
      throw new Error(`the parking lot is full`);
    }
  }

  exit() {
    if (!this.isEmpty()) {
      this.occupied--;
      this.notify(EventType.Exit);
    } else {
      throw new Error(`the parking lot is empty`);
    }
  }

  isFull() {
    return this.occupied == this.capacity;
  }

  isEmpty() {
    return this.occupied == 0;
  }
}

export interface Publisher {
  notify(eventType: EventType): void;
  subscribe(subscriber: Subscriber): void;
  unsubscribe(subscriber: Subscriber): void;
}

export interface Subscriber {
  update(eventType: EventType, lot: ParkingLot): void;
}

export enum EventType {
  Enter = "enter",
  Exit = "exit",
}
