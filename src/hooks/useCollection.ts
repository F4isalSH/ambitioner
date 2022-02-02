import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection: any) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results: any = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //updating the state
        setDocuments(results);
        setError(null);
      },
      (error: any) => {
        console.log(error);
        setError("Could not fetch data");
      }
    );

    //unsubscribe
    return () => unsubscribe();
  }, [collection]);

  return { documents, error };
};
