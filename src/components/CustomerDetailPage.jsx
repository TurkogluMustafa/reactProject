import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
function CustomerDetailPage() {

    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true)
    let { id } = useParams();

    useEffect(() => {

        getCustomers();

    }, []);

    const getCustomers = () => {
        axios.get(`https://northwind.vercel.app/api/customers/${id}`)
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            });
    }


    return (<>

  <Descriptions title="User Info">
    <Descriptions.Item label="ID">{customers.id}</Descriptions.Item>
    <Descriptions.Item label="Company Name">{customers.companyName}</Descriptions.Item>
    <Descriptions.Item label="Contact Name">{customers.contactName}</Descriptions.Item>
    <Descriptions.Item label="Contact Title">{customers.contactTitle}</Descriptions.Item>
  </Descriptions>

    </>
    )
}

export default CustomerDetailPage
