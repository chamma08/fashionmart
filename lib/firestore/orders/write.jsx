import { doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateOrderStatus = async ({ id, status }) => {
    await updateDoc(doc(db, `orders/${id}`), {
      status: status,
      timestampStatusUpdate: Timestamp.now(),
    });
  };