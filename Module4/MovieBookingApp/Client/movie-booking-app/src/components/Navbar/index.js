import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
    {label:"Home"},
    {label:"User"}
]

const Navbar  = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <h3 className='text-white fs-18'> Book My Show </h3>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;