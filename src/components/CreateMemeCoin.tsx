"use client"

import useUserDetailsContext from "@/context";
import nextApiClientFetch from "@/utils/nextApiClientFetch";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useState } from "react";

const CreateMemeCoin=({className}:{className?: string})=>{
    const {loginAddress} = useUserDetailsContext();
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content , setContent] = useState('');


    const creatememetoken = async (values: {
        symbol: string;
        logoUrl: string;
        totalSupply: number;
        mintLimit: number;
        title: string;
        content: string;
      }) => {
        const { data, error } = await nextApiClientFetch<any>("/api/createCoin", {
          name: values.symbol,
          logoImage: values.logoUrl,
          totalSupply: values.totalSupply,
          limit: values.mintLimit,
          title: values.title,
          content: values.content,
          proposer: loginAddress,
        });
    
        if (error) {
          console.error("Error Creating Meme Token:", error);
          return null;
        }
    
        return data;
      };
    
      const handleSubmit = (values: {
        symbol: string;
        logoUrl: string;
        totalSupply: number;
        title: string;
        content: string;
        mintLimit: number;
      }) => {
        console.log("Form values:", values);
        creatememetoken(values);
      };

return <div className={className}>
    <Button
    onClick={()=> setIsModalVisible(!isModalVisible)}
    className="h-12 bg-primaryButton text-white text-base font-medium w-[300px] tracking-wide cursor-pointer">
        Create Meme Coin
    </Button>
    <Modal
        title="Create MEME Token"
        open={isModalVisible}
        onCancel={()=> setIsModalVisible(false)}
        footer={null}
      >
        <div
          style={{
            padding: "10px 10px",
          }}
        >
          <div>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={{ textAlign: "left" }}
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please enter the title" }]}
              >
                <Input
                  placeholder="e.g., MEME Token"
                  className="h-10 w-full"
                />
              </Form.Item>
              <Form.Item
                label="Content"
                name="content"
                rules={[
                  { required: true, message: "Please enter the content" },
                ]}
              >
                <TextEditor
                  className="h-10 w-full"
                  value={content }
                  name='content'
                  onChange={(content: string)=> setContent(content)}
                  height={200}
                />
              </Form.Item>

              <Form.Item
                label="Token Symbol"
                name="symbol"
                rules={[
                  { required: true, message: "Please enter the token symbol" },
                ]}
              >
                <Input
                  placeholder="e.g., DOT, KSM"
                  className="h-10 w-full"
                />
              </Form.Item>
              <Form.Item
                label="Token Logo URL"
                name="logoUrl"
                rules={[
                  { required: true, message: "Please enter the logo URL" },
                ]}
              >
                <Input
                  placeholder="e.g., https://example.com/logo.png"
                  className="h-10 w-full"
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
                  className="w-full h-10"
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
                  className="w-full h-10"
                  min={1}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-10 text-base font-medium bg-primaryButton"
                >
                  Create Token
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
</div>
}

export default CreateMemeCoin;