import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";
// @ts-ignore

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      // @ts-ignore

      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        // @ts-ignore
        let results = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc);
          results.push({ ...doc.data(), id: doc.id });
        });
        // @ts-ignore

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        // @ts-ignore
        setError("could not fetch the data");
      }
    );

    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};
