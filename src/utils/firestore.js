import { query, where, collection, getDocs, updateDoc, increment } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const getItems = async (categoryId) => {
    let getItemsQuery;
    if (categoryId) {
        getItemsQuery = query(collection(db, "items"), where('categoryId', '==', categoryId));
    } 
    else {
        getItemsQuery = query(collection(db, "items"));
    }

    const querySnap = await getDocs(getItemsQuery);
    const data = querySnap.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));

    return data
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    }
    else {
        console.log('No item find with id:' + id)
    }
}

export const decrementStockItem = async (itemId, quantity) => {
    const itemRef = doc(db, "items", itemId);
    await updateDoc(itemRef, {
        stock: increment(-quantity)
    })
}