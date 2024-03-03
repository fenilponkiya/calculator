import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState("0");
  const handleChange = (val) => {
    setValue((prevInput) => prevInput + val);
  };

  const setTotal = () => {
    setValue((prev) => eval(prev).toString());
  };

  const emptyField = () => {
    setValue("");
  };
  const removeLastFunc = () => {
    setValue(value.toString().substring(0, value.length - 1));
  };
  const handleAuto = (val) => {
    setValue(val);
  };

  const squareRoot = () => {
    setValue(value * value);
  };
  return (
    <Box borderRadius={2}>
      <Box height={"50px"}>
        <TextField
          variant="outlined"
          sx={{
            height: "100%",
            width: "100%",

            ".MuiOutlinedInput-input": {
              padding: "10px 10px",
            },
          }}
          onChange={(e) => handleAuto(e.target.value)}
          value={value}
        />
      </Box>
      <Box borderRadius={2} py={2}>
        <Box paddingBottom={2}>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("%")}
          >
            <Typography variant="h6"> %</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={emptyField}
          >
            <Typography variant="h6"> CE</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={emptyField}
          >
            <Typography variant="h6"> C</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={removeLastFunc}
          >
            <Typography variant="h6"> {"->>"}</Typography>
          </Button>
        </Box>
        <Box paddingBottom={2}>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("7")}
          >
            <Typography variant="h6">7</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("8")}
          >
            <Typography variant="h6"> 8</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("9")}
          >
            <Typography variant="h6"> 9</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("*")}
          >
            <Typography variant="h6"> *</Typography>
          </Button>
        </Box>
        <Box paddingBottom={2}>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("4")}
          >
            <Typography variant="h6"> 4</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("5")}
          >
            <Typography variant="h6"> 5</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("6")}
          >
            <Typography variant="h6"> 6</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("-")}
          >
            <Typography variant="h6"> -</Typography>
          </Button>
        </Box>
        <Box paddingBottom={2}>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("1")}
          >
            <Typography variant="h6"> 1</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("2")}
          >
            <Typography variant="h6"> 2</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("3")}
          >
            <Typography variant="h6"> 3</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("+")}
          >
            <Typography variant="h6"> +</Typography>
          </Button>
        </Box>
        <Box paddingBottom={2}>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange(".")}
          >
            <Typography variant="h6"> .</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={() => handleChange("0")}
          >
            <Typography variant="h6"> 0</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={setTotal}
          >
            <Typography variant="h6">=</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "16px", borderRadius: "50%", marginX: 1 }}
            onClick={squareRoot}
          >
            <Typography variant="h6">x2</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
  9016553539;
}

export default App;
