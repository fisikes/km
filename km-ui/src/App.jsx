import { Button, ConfigProvider, Space } from "antd";
import React from "react";

const App = () => (
  <ConfigProvider
    theme={{

      // 不能覆盖组件的样式
      components: {
        Button: {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          boxShadowSecondary: '0 12px 36px rgba(0, 0, 0, 0.15)',
        },
        Input: {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          boxShadowSecondary: '0 12px 36px rgba(0, 0, 0, 0.15)',
        }
      },
      token: {
        // Seed Token，影响范围大
        colorPrimary: "#00b96b",
        borderRadius: 2,

        // 派生变量，影响范围小
        colorBgContainer: "#f6ffed",

      },
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>
        Default
      </Button>
    </Space>
  </ConfigProvider>
);

export default App;
