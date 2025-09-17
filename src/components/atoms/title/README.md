## Component Title

```
import { useState } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { Title } from "../components/atoms";

export const Test = () => {
  return (
    <Title label="Medical history" icon={<FaUserDoctor size="24px" color={primary} />} />
  )
}

```