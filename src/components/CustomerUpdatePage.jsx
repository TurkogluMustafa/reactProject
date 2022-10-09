import { Button, Col, Form, Input, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom'


function CustomerUpdatePage() {

    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true)
    const {id}=useParams();
    console.log("id",id)
    useEffect(() => {
        getCustomers()
    }, [])
    

    const submitForm = (values) => {

        axios.put(`https://northwind.vercel.app/api/customers/${id}`, values)
        .then(res => {
            console.log('RES', res.data);
        })

    }
    const  getCustomers = () => {
         axios.get(`https://northwind.vercel.app/api/customers/${id}`)
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            });
    }


    


    return (<>
        <Form
        layout='vertical'
            onFinish={submitForm}
        >

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Company Name'
                        name='companyName'
                        rules={[{ required: true, message: 'Please input your company Name!' },{max:30}]}
                    >
                        <Input placeholder={customers.companyName} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label='Contact Name'
                        name='contactName'
                    >
                        <Input placeholder={customers.contactName} />
                    </Form.Item>
                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Contact Title'
                        name='contactTitle'
                    >
                        <Input placeholder={customers.contactTitle} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='Adress'
                        name='adress'
                    >
                        <Input placeholder={customers.adress} />
                    </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">Update</Button>


        </Form>
    </>
    )
}

export default CustomerUpdatePage