import { useState, useCallback } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../firebase/config'


export function useCollection(collectionName, filters = []) {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(false)


  const getAll = useCallback(async () => {
    setLoading(true)
    let ref = collection(db, collectionName)
    if (filters.length) {
      ref = query(ref, ...filters.map(([f, op, val]) => where(f, op, val)))
    }
    const snap = await getDocs(ref)
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    setDocuments(data)
    setLoading(false)
    return data

  }, [collectionName, JSON.stringify(filters)])


  const add = async (data) => {
    const ref = await addDoc(collection(db, collectionName), data)
    await getAll()
    return ref.id
  }


  const update = async (id, data) => {
    await updateDoc(doc(db, collectionName, id), data)
    await getAll()
  }


  const remove = async (id) => {
    await deleteDoc(doc(db, collectionName, id))
    await getAll()
  }

  return { documents, loading, getAll, add, update, remove }
}