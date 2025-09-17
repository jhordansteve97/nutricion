## Component InputDate

````
import { useState } from 'react'
import { InputDate } from "../components/atoms";

export const Test = () => {
  const [date, setDate] = useState(0);
  return (
    <InputDate
      label="Date"
      value={date}
      onChange={(value) => setDate(value)}
    />
  )
}

```