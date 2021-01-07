import React from 'react';
import { Button, Typography } from 'antd';

function Welcome(props) {
  const { Title, Text } = Typography;
console.log(props.name)
  return (
    <div>
      <h1>Hello</h1>
      <Title level={2}>Welcome, {props.name}</Title>
    <Text type="secondary"> {props.name} Rules The World</Text>
    </div>
  );

}

export default Welcome;
