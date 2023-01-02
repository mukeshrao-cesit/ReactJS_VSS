import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonField } from "./ButtonField";
import { DropDownBox } from "./DropDownBox";
import { TextBox } from "./TextBox";

export const Parent = () => {
  const [form, setForm] = useState([]);
  const [dataType, setDataType] = useState("");
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [formDisplay, setFormDisplay] = useState(false);
  function handleEvent() {
    const payload = {
      id: uuidv4(),
      name: name,
      dataType: dataType,
      placeholder: placeholder,
      value: "",
    };
    setForm((prev) => {
      return [...prev, payload];
    });
    setDataType("");
    setName("");
    setPlaceholder("");
  }
  function handleChild(value, id) {
    setForm((prev) => {
      return prev.map((elem) => {
        if (elem.id === id) {
          return { ...elem, value: value };
        } else {
          return elem;
        }
      });
    });
  }
  return (
    <div style={{ margin: "15px 10px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <DropDownBox dataType={dataType} setDataType={setDataType} />
        <TextBox type="Name" field={name} setField={setName} />
        <TextBox
          type="Placeholder"
          field={placeholder}
          setField={setPlaceholder}
        />
        <ButtonField onClick={handleEvent} />
      </div>
      <div style={{ margin: "15px 0px" }}>
        {form.map((elem) => {
          return (
            <div style={{ margin: "15px 0px" }} key={elem.id}>
              <TextField
                id="outlined-basic"
                label={elem.name}
                variant="outlined"
                onChange={(e) => handleChild(e.target.value, elem.id)}
                type={elem.dataType}
                placeholder={elem.placeholder}
              />
            </div>
          );
        })}
      </div>
      <ButtonField onClick={() => setFormDisplay(!formDisplay)} />
      {formDisplay &&
        form.map((elem) => {
          return (
            <div key={elem.id}>
              <p>{elem.name + " : " + elem.value}</p>
            </div>
          );
        })}
    </div>
  );
};

{
  /*  */
}
