"use client";
import React, { useState } from "react";
import { Layout, Button, Select } from "antd";
import ConnectWallet from "./ConnectWallet";
import { motion } from "framer-motion";
import Link from "next/link";

const { Header } = Layout;
const { Option } = Select;
const networks = [
  { label: "Polkadot", value: "polkadot", color: "#E6007A" },
  { label: "Kusama", value: "kusama", color: "#FFFFFF" },
  { label: "Moonbeam", value: "moonbeam", color: "#53CBC9" },
];
function Navbar() {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("Polkadot");

  const handleNetworkChange = (value: string) => {
    setSelectedNetwork(value);
  };

  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#001529",
          padding: "0 20px",
        }}
      >
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "#fff",
              margin: 0,
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Memecoin Generator
          </motion.h1>
        </Link>
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
              defaultValue={selectedNetwork}
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
            <Link href="/create-memecoin">
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
            </Link>
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
    </div>
  );
}

export default Navbar;
