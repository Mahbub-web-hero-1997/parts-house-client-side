
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Fetcher from "../api/Fetcher";

import OrderCancelModal from "./OrderCancelModal";
import OrdersRow from "./OrdersRow";

const Myorder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const [cancel, setCancel] = useState(null)
    const { data, isLoading, refetch } = useQuery("orders", () => {
        Fetcher.get(`orders/${user?.email}`)
            .then(response => {
                setOrders(response.data)
            })
    });
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full mt-6">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>quantity</th>
                            <th>price(per piece)</th>
                            <th>Total Price</th>
                            <th>Cancel order</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <OrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                setCancel={setCancel}
                            ></OrdersRow>
                        ))}
                    </tbody>
                </table>
            </div>
            <OrderCancelModal cancel={cancel} setCancel={setCancel} refetch={refetch}></OrderCancelModal>
        </div>
    );
};

export default Myorder;