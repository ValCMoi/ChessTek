import React from 'react'

import { UploadOutlined, UserAddOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const urlList = [
    {id:42, icon : UserAddOutlined, name: "S'inscrire", url:"#/Signin"},
    {id:69, icon : UserOutlined, name: "Se connecter", url:"#/Signup"}

]

const renderUrlList = () => {
    return urlList.map(url => {
        {url.name}
    })
}

const  MainLayout = ({children}) => {

return(
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout style={{height:'100vh'}}>
        <Header/>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Dev by Valentin ROUXEL
        </Footer>
      </Layout>
    </Layout>
)
}

export default MainLayout