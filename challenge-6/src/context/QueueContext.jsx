import { createContext, useContext, useState } from "react";
import { Queue, randomArrivalDate } from "../structures/queue";
import { mockPeople } from "../data/mockPeople";

const QueueContext = createContext(null);

function buildInitialQueue() {
  const q = new Queue();
  mockPeople.forEach((p) => q.enqueue(p));
  return q;
}

export function QueueProvider({ children }) {
  const [queue, setQueue] = useState(buildInitialQueue);

  const addPerson = (name, withdrawalAmount) => {
    const next = new Queue(queue.items);
    next.enqueue({ name, withdrawalAmount, arrivalDate: randomArrivalDate() });
    setQueue(next);
  };

  const attend = () => {
    const next = new Queue(queue.items);
    next.dequeue();
    setQueue(next);
  };

  return (
    <QueueContext.Provider value={{ queue, addPerson, attend }}>
      {children}
    </QueueContext.Provider>
  );
}

export const useQueue = () => useContext(QueueContext);