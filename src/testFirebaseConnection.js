import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const TestFirebaseConnection = () => {
    const [fleaTreatments, setFleaTreatments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'flea-treatments'));
                const treatments = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setFleaTreatments(treatments);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Flea Treatments</h1>
            <ul>
                {fleaTreatments.map(treatment => (
                    <li key={treatment.id}>{treatment.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TestFirebaseConnection;
