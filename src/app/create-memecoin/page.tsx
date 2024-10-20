"use client";
import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import Navbar from "@/Components/Navbar";

const CreateTokenPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: {
    symbol: string;
    logoUrl: string;
    totalSupply: number;
    mintLimit: number;
  }) => {
    console.log("Form values:", values);
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#001529",
              marginBottom: "30px",
            }}
          >
            Create MEME Token
          </h1>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ textAlign: "left" }}
          >
            <Form.Item
              label="Token Symbol"
              name="symbol"
              rules={[
                { required: true, message: "Please enter the token symbol" },
              ]}
            >
              <Input
                placeholder="e.g., DOT, KSM"
                style={{
                  height: "45px",
                  borderRadius: "8px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Token Logo URL"
              name="logoUrl"
              rules={[{ required: true, message: "Please enter the logo URL" }]}
            >
              <Input
                placeholder="e.g., https://example.com/logo.png"
                style={{
                  height: "45px",
                  borderRadius: "8px",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Total Supply"
              name="totalSupply"
              rules={[
                { required: true, message: "Please enter the total supply" },
              ]}
            >
              <InputNumber
                placeholder="e.g., 1000000"
                style={{
                  width: "100%",
                  height: "45px",
                  borderRadius: "8px",
                }}
                min={1}
              />
            </Form.Item>

            <Form.Item
              label="Limit per Mint"
              name="mintLimit"
              rules={[
                { required: true, message: "Please enter the mint limit" },
              ]}
            >
              <InputNumber
                placeholder="e.g., 100"
                style={{
                  width: "100%",
                  height: "45px",
                  borderRadius: "8px",
                }}
                min={1}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                  fontWeight: "500",
                  backgroundColor: "#1890ff",
                  borderColor: "#1890ff",
                  borderRadius: "8px",
                }}
              >
                Create Token
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTokenPage;
