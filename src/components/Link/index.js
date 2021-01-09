import React from 'react';
import { Typography } from 'antd';

function Link(props) {
  const { Link } = Typography;
  return (
   <Link href={props.href} target={"_blank"}>{props.text}</Link>
  );
}

export default Link;
