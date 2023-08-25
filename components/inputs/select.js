/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Divider,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
// import Categorys Data
import data from "../../data/category.json";
// import Items Data
import coin from "../../data/coin.json";

export default function SelectItem() {
  const [categorys, setCategorys] = useState(data);
  const [items, setItems] = useState();
  const [category, setCategory] = React.useState("");
  const [item, setItem] = useState();
  const [haveMets, setHaveMets] = useState([]);

  const [total, setTotal] = useState();
  const getDataItemsData = () => {
    if (category == "Coin") {
      setItems(coin);
    } else {
      setItems();
    }
  };

  const calculate = () => {
    let result = [];
    for (let i = 0; i <= item.meterails.length - 1; i++) {
      console.log(item.meterails[i].amount);
      console.log(haveMets[i]);
      result.push(Math.floor(haveMets[i] / item.meterails[i].amount));
      setTotal(Math.min(...result));
    }
  };

  useEffect(() => {
    getDataItemsData();
  }, [category]);

  return (
    <>
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <FormControl sx={{ m: 5 }}>
          <Typography sx={{ mb: 2, fontSize: 20 }}>
            เลือกหมวดหมู่ที่ต้องการคราฟ
          </Typography>
          <Select
            sx={{ backgroundColor: "white", maxWidth: 200 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            placeholder=""
            defaultValue=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categorys.map((item) => (
              <MenuItem
                key={`select-cate-${item.name}`}
                value={item.name}
                sx={{ p: 2 }}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5 }}>
          <Typography sx={{ mb: 2, fontSize: 20 }}>
            เลือกของที่ต้องการคราฟ
          </Typography>
          <Select
            sx={{ backgroundColor: "white", maxWidth: 200 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            placeholder=""
            defaultValue=""
            value={item}
            onChange={(e) => {
              console.log(e.target.value);
              setItem(e.target.value);
            }}
          >
            {items &&
              items.map((item) => (
                <MenuItem
                  key={`select-item-${item.name}`}
                  value={item}
                  label={item.name}
                  sx={{ p: 2 }}
                >
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Typography
          sx={{ mt: 5, ml: 10, display: "inline-block", fontSize: 20 }}
        >
          ของที่ต้องใช้
          {item?.meterails?.map((mat) => (
            <Typography
              key={`met-${mat.name}`}
            >{` - ${mat.name} จำนวน ${mat.amount} ชิ้น`}</Typography>
          ))}
        </Typography>
      </Box>
      <hr />
      <Box sx={{ textAlign: "center" }}>
        {item && (
          <>
            <Box
              sx={{
                marginTop: 5,
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p className="text-3xl ">กรอกวัสถุดิบที่มีอยู่</p>

              {item?.meterails?.map((mat, index) => (
                <>
                  <FormControl sx={{ m: 5 }}>
                    <Typography sx={{ mb: 1, fontSize: 20 }}>
                      {mat.name}
                    </Typography>
                    <TextField
                      key={`text-${mat.name}`}
                      id="outlined-basic"
                      variant="outlined"
                      sx={{
                        bgcolor: "white",
                        mt: 2,
                      }}
                      value={haveMets[index]}
                      onChange={(e) => {
                        let newArr = [...haveMets];
                        newArr[index] = e.target.value;
                        setHaveMets(newArr);
                      }}
                    />
                  </FormControl>
                </>
              ))}
            </Box>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#66BB6A !important" }}
                onClick={() => {
                  calculate();
                }}
              >
                Success
              </Button>
            </Box>

            <Typography
              sx={{
                mt: 5,
                fontSize: 20,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              คุณจะได้ {item.name} จำนวน : {total} ชิ้น
            </Typography>
          </>
        )}
        <Typography>Create By. Khaideng Celli</Typography>
      </Box>
    </>
  );
}
