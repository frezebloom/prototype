import * as React from "react";

import { IMaps } from "../store/maps/types";

import "../styles/table.scss";

interface PropsFromState {
  maps: IMaps[];
  handleChangeValue: (map_id: number, type: string) => void;
}

const AvailableMaps: React.FC<PropsFromState> = props => {
  const title: Array<string> = [
    "Номенклатура",
    "Редакция",
    "Вид",
    "Масштаб",
    "Формат",
    "Название",
    "Размер",
    "Помещён"
  ];

  const eventClick = (map_id: number, type: string) => {
    props.handleChangeValue(map_id, type);
  };

  return (
    <div className="table-wrapper-left">
      {props.maps.length !== 0 ? 
      <table>
        <thead>
          <tr>
            {title.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.maps.map(item => (
            <tr
              key={item.id}
              onClick={() => eventClick(item.id, "availableMaps")}
            >
              <td>{item.name}</td>
              <td>{item.edition}</td>
              <td>{item.class_abbr}</td>
              <td>{item.scale}</td>
              <td>{item.type}</td>
              <td>{item.title}</td>
              <td>{item.size}</td>
              <td>{item.creator}</td>
            </tr>
          ))}
        </tbody>
      </table>
      :
      <div className="table-message">Список карт пуст</div>}
    </div>
  );
};

export default AvailableMaps;
