import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const Select = ({ data_list, placeholder }) => {
  const list = data_list;
  const [copyList, setCopyList] = useState(list);
  const [option, setOption] = useState([]);
  useEffect(() => {
    let checkboxes = document.getElementsByName("check");
    for (let i = 0; i < checkboxes.length; i++) {
      if ([...option].includes(checkboxes[i].value)) {
        checkboxes[i].checked = true;
      }
    }
  }, [option, copyList]);
  let expanded = false;

  const showCheckBoxes = () => {
    let checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "inline-block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  };
  const setData = (e, item) => {
    if (e.target.checked && !option.includes(item)) {
      setOption([...option, item]);
      alert([...option, `${item} `]);
    } else if (!e.target.checked) {
      setOption(
        option.filter((data) => {
          return data !== item;
        })
      );
    }
  };
  function checkAll() {
    let checked = option.length ? false : true;
    let map = [];
    let checkboxes = document.getElementsByName("check");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checked;
      map = [...map, checkboxes[i].value];
    }
    if (!checked) {
      map = [];
      setOption([]);
      return;
    }
    setOption(map);
    alert(map);
  }
  const searchFunc = (e) => {
    setCopyList(
      list.filter((item) => {
        return item.toLocaleLowerCase().includes(e.target.value);
      })
    );
  };
  return (
    <div>
      <div className="multiselect">
        <div className="selectBox" onClick={showCheckBoxes}>
          <select>
            <option>{option.length ? "" : placeholder}</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <div id="checkboxes">
          <input type="text" onChange={searchFunc} className="input_search" />
          {copyList.map((item, index) => {
            return (
              <label htmlFor={index} key={item}>
                <input
                  type="checkbox"
                  id={index}
                  onClick={(e) => setData(e, item)}
                  name="check"
                  value={`${item}`}
                />
                {item}
              </label>
            );
          })}
          <button onClick={checkAll} className="button">
            {option.length ? "Deselect All" : "Select All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
