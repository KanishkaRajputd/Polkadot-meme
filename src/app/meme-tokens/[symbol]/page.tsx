"use client";

import MemeTokenDetails from "@/components/MemeTokenDetails";
import TokensListing from "@/components/TokensListing";
import { ServerComponentProps } from "@/types";
import { Layout, Skeleton } from "antd";
import { symbol } from "framer-motion/client";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const CreateMemeCoin = dynamic(() => import('@/components/CreateMemeToken'), 
{
    ssr: false,
    loading: () => <Skeleton.Button active />,
});

const Navbar = dynamic(() => import('@/components/Navbar'), 
{
    ssr: false,
});
const { Content } = Layout;

interface IParams {
	symbol: string;
}

function Token({params}: ServerComponentProps<IParams, {}>) {

  console.log(params?.symbol)
  return  <Layout style={{ background: "#f0f2f5", minHeight: '100vh' }}>
      
      <Navbar/>

      <Content
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CreateMemeCoin className='w-full flex items-end justify-end'/>
        <MemeTokenDetails className="w-full flex flex-col gap-4" symbol={params?.symbol || ''}/>
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

}

export default Token;