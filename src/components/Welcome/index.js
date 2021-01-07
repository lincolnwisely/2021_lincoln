import React from 'react';
import { Button, Typography } from 'antd';

function Welcome(name) {
  const { Title, Text } = Typography;

  return (
    <div>

    <Title level={2}>Welcome, {name}</Title>
    <Text type="secondary">Lincoln Rules The World</Text>
    </div>
  );

}

export default Welcome;
