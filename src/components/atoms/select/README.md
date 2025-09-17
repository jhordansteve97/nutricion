## Component SelectForm

```
import { useState } from 'react'
import { SelectForm } from "../components/atoms";

export const Test = () => {
  const [value, setValue] = useState("");
  const options = [
    { value: 1, label: "option 1" },
    { value: 2, label: "option 2" },
  ];
  return (
    <SelectForm
      label="Family relationship"
      options={optionsRelatives}
      value={values}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

```