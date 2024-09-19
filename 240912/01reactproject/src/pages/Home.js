import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import { getMonthRangeByDate } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotData, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotData);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotData]);

  const headerTitle = `${pivotData.getFullYear()}년 ${
    pivotData.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotData.getFullYear(), pivotData.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotData.getFullYear(), pivotData.getMonth() - 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
