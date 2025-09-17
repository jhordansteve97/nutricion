## Component Input

```
import { useState } from 'react'
import { Input } from "../components/atoms";

export const Test = () => {
  const [name, setName] = useState("");
  return (
    <Input
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}

```
