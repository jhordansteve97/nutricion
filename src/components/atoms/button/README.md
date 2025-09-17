## Component Buttons

```
import { useState } from 'react'
import { Buttons } from "../components/atoms";

export const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <Buttons label="Count" value={count} onChange={(e) => setCount(e.target.value)} />
  )
}

```