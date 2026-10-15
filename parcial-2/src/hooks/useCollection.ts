import { useCallback, useState } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  type DocumentData,
  type WhereFilterOp,
} from 'firebase/firestore';

export type Filtro = [string, WhereFilterOp, unknown];

const useCollection = <T extends DocumentData>(table: string) => {
  const [results, setResults] = useState<(T & { id: string })[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAll = useCallback(async (filters: Filtro[] = []) => {
    setIsPending(true);
    setError(null);

    try {
      let q = query(collection(db, table));

      for (const [field, op, value] of filters) {
        q = query(q, where(field, op, value));
      }

      const snapshot = await getDocs(q);
      const docs = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as T) }));

      setResults(docs);
      setIsPending(false);
      return docs;
    } catch (err) {
      setError((err as Error).message);
      setIsPending(false);
      return [];
    }
  }, [table]);

  const add = async (data: T) => {
    setIsPending(true);
    setError(null);

    try {
      const ref = await addDoc(collection(db, table), {
        ...data,
        createdAt: serverTimestamp(),
      });
      setIsPending(false);
      return ref;
    } catch (err) {
      setError((err as Error).message);
      setIsPending(false);
      return null;
    }
  };

  return { results, isPending, error, getAll, add };
};

export default useCollection;