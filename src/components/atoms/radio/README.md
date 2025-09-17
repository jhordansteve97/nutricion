## Component Radio

```
import { useState } from 'react'
import { FaWeightScale } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { Radio } from "../components/atoms";

export const Test = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      label: "Weight loss",
      value: 1,
      image: <FaWeightScale size="37px" color={descriptionColor} />,
    },
    {
      label: "healthy eating",
      value: 2,
      image: <GiFruitBowl size="37px" color={descriptionColor} />,
    },
  ];

  return (
    <Radio
      label={item.label}
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

```