## Component RadioGroupButton

```
import { useState } from 'react'
import { RadioGroupButton } from "../components/atoms";

export const Test = () => {
  const [value, setValue] = useState("");
  const options = [
    { value: 1, label: "Si" },
    { value: 2, label: "No" },
  ];
  return (
    <RadioGroupButton
      label={item.label}
      options={options}
      value={values}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

```