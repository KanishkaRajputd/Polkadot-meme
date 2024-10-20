"use client";
import React, { useState } from "react";
import { Layout, Button, Table, Select } from "antd";
import ConnectWallet from "./Components/ConnectWallet";
import { motion } from "framer-motion";

const { Header, Content } = Layout;
const { Option } = Select;

const networks = [
  { label: "Polkadot", value: "polkadot", color: "#E6007A" },
  { label: "Kusama", value: "kusama", color: "#FFFFFF" },
  { label: "Moonbeam", value: "moonbeam", color: "#53CBC9" },
];

const columns = [
  {
    title: "Memecoin Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
  },
  {
    title: "Market Cap",
    dataIndex: "marketCap",
    key: "marketCap",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Shiba Inu",
    symbol: "SHIB",
    marketCap: "$5.8B",
  },
  {
    key: "2",
    name: "Dogecoin",
    symbol: "DOGE",
    marketCap: "$8.2B",
  },
];

const LandingPage = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  console.log("Selected network:", selectedNetwork);

  const handleNetworkChange = (value: string) => {
    setSelectedNetwork(value);
    console.log("Selected network:", value);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#001529",
          padding: "0 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#fff", margin: 0 }}
        >
          Memecoin Generator
        </motion.h1>
        <div
          className="flex gap-3"
          style={{ display: "flex", alignItems: "center" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Select
              placeholder="Select Network"
              style={{
                width: 160,
                marginRight: 20,
                border: "1px solid #001529",
                borderRadius: "5px",
                color: "#fff",
              }}
              onChange={handleNetworkChange}
              dropdownStyle={{
                backgroundColor: "#001529",
                color: "#fff",
              }}
            >
              {networks.map((network) => (
                <Option
                  key={network.value}
                  value={network.value}
                  style={{
                    color: network.color,
                    fontWeight: "bold",
                  }}
                >
                  {network.label}
                </Option>
              ))}
            </Select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button
              type="default"
              style={{
                background: "#53CBC9",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#45b1b0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#53CBC9")
              }
            >
              Create Memecoin
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <ConnectWallet />
          </motion.div>
        </div>
      </Header>

      <Content
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "32px", fontWeight: "bold" }}
        >
          Top Memecoins
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            style={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
      </Content>

      <style jsx>{`
        .table-row-light {
          background-color: #f9f9f9;
        }
        .table-row-dark {
          background-color: #e0e0e0;
        }
        .ant-table-tbody > tr:hover {
          background-color: #d3d3d3;
        }
      `}</style>
    </Layout>
  );
};

export default LandingPage;
