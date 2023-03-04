import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../../redux/slices/searchSlice";
import { v4 as uuidv4 } from "uuid";
import { Dropdown, Space } from "antd";
import { Container } from "./styled";
import { UilFilter } from "@iconscout/react-unicons";

const MenuWrapper = (setOrder_, order) => {
  return (
    <Container>
      <label>Order by:</label>
      <select onChange={(event) => setOrder_(event.target.value)}>
        {[
          {
            value: "relevance",
            label: "Relevance",
          },
          {
            value: "date",
            label: "Date",
          },
          {
            value: "rating",
            label: "Rating",
          },
          {
            value: "viewCount",
            label: "View Count",
          },
          {
            value: "title",
            label: "Title",
          },
        ].map((item) => {
          return (
            <option key={uuidv4()} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

const Filter = () => {
  const { order } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const setOrder_ = (a) => {
    dispatch(setOrder(a));
  };

  return (
    <Dropdown
      overlay={MenuWrapper(setOrder_, order)}
      menu={null}
      placement="bottomLeft"
      trigger="click">
      <a onClick={(e) => e.preventDefault()}>
        <Space
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            marginBottom: 20,
            background: "#ffffff2a",
            borderRadius: 50,
            color: "white",
          }}>
          <UilFilter />
          Filter
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default Filter;
