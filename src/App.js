/** @format */
import "./App.css";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  width: 100px;
`;

function App() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(20000);
  const [cal, setCal] = useState(0);
  useEffect(() => {
    let rev = (4 * price) / 100;
    setCal(value * (rev + 2000));
  }, [value, price]);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value || 0));
  };
  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value || 0));
  };
  return (
    <div className='App'>
      <div style={{ display: "flex" }}>
        <Slider
          aria-label='Temperature'
          defaultValue={1}
          onChange={handleChange}
          value={value}
          valueLabelDisplay='auto'
          step={1}
          min={0}
          max={500}
        />
        <Input value={value} size='small' onChange={handleChange} />
        {/* <span style={{ paddingLeft: "10px" }}>{value}</span> */}
      </div>
      <div style={{ display: "flex", padding: "50px 0" }}>
        <Slider
          aria-label='Temperature'
          defaultValue={20000}
          onChange={handlePriceChange}
          value={price}
          valueLabelDisplay='auto'
          step={5000}
          min={0}
          max={1500000}
        />
        <Input
          type='number'
          value={price}
          size='small'
          onChange={handlePriceChange}
          inputProps={{
            min: 0,
            max: 1500000,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        {/* <span style={{ paddingLeft: "10px" }}>{price}</span> */}
      </div>

      <h1>{cal}</h1>
    </div>
  );
}

export default App;
