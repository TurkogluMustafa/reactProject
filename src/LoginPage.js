import { Button, Checkbox, Form, Input } from "antd";
import 'antd/dist/antd.css';
import React from "react";
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from "react-redux";


const { Header, Content, Footer } = Layout;
const App = () => {

  let isLoggedInValue=useSelector(state=>state);
  const dispatch= useDispatch();

  const onFinish = (values) => {

    console.log("Global State",isLoggedInValue);

    if (values.username == "dgpays@mail.com" && values.password == "123") {
      dispatch({type:"true",payload:"1"})
      console.log("Success!!", values.username, values.password,isLoggedInValue);
      
    }
    else{
      console.log("Failed!!", values.username, values.password,isLoggedInValue);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (<><div><div><Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      />
    </Header>

    <Footer style={{ textAlign: 'center' }}> </Footer>



  </Layout></div>
    <div style={{paddingTop: "100px" ,paddingRight: "1117px"}}><Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></div></div></>
  );
};

export default App;
