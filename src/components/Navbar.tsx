"use client";
import React, { useState } from "react";
import { Layout, Button, Form } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import nextApiClientFetch from "@/utils/nextApiClientFetch";
import useUserDetailsContext from "@/context";

const { Header } = Layout;

function Navbar() {

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
            MemeGen
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
             <Button
              style={{
                background: "#53CBC9",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
                fontWeight:600,
                padding:'4px 16px',
                marginRight:'8px'
              }}
            >
              Polkadot</Button>
              </motion.div>

          {/* <motion.div
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
              onClick={handleOpenModal}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#45b1b0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#53CBC9")
              }
            >
              Create Memecoin
            </Button>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full"
          >
            <div className=" flex items-end justify-end">
              <ConnectWallet  />
            </div>
          </motion.div>
        </div>
      </Header>
    
    </div>
  );
}

export default Navbar;
