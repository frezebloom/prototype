import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../store";

import { IMaps } from "../store/maps/types";
import { fetchRequest, addCard, removeCard } from "../store/maps/actions";
import AvailableMaps from "../components/AvailableMaps";

import { IOrderCards } from "../store/orderCards/types";
import { addOrderCard, removeOrderCard } from "../store/orderCards/actions";
import OrderCards from "../components/OrderCards";

import "../styles/cards.scss";

interface PropsFromState {
  loading: boolean;
  maps: IMaps[];
  orderCards: IOrderCards[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  addCard: typeof addCard;
  removeCard: typeof removeCard;
  addOrderCard: typeof addOrderCard;
  removeOrderCard: typeof removeOrderCard;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Cards: React.FC<AllProps> = props => {
  useEffect(() => {
    props.fetchRequest();
  }, []);

  const handleChangeValue = (map_id: number, type: string) => {

    if (type !== "orderCards") {
      const cards = props.maps.filter(item => {
        return item.id !== map_id;
      });

      const orderCard = props.maps.filter(item => {
        return item.id === map_id;
      });

      const order =  [...props.orderCards, ...orderCard];

      props.removeCard(cards);
      props.addOrderCard(order);
    } else {
      const card = props.orderCards.filter(item => {
        return item.id === map_id;
      });

      const orderCards = props.orderCards.filter(item => {
        return item.id !== map_id
      });

      const cards =  [...props.maps, ...card];

      props.addCard(cards);
      props.removeOrderCard(orderCards)
    }
  };

  return (
    <div className="cards">
      {props.loading ? (
        <AvailableMaps
          handleChangeValue={handleChangeValue}
          maps={props.maps}
        />
      ) : (
        false
      )}
      <OrderCards
        handleChangeValue={handleChangeValue}
        orderCards={props.orderCards}
      />
    </div>
  );
};

const mapStateToProps = ({ maps, orderCards }: ApplicationState) => ({
  loading: maps.loading,
  errors: maps.errors,
  maps: maps.data,
  orderCards: orderCards.data
});

const mapDispatchToProps = {
  fetchRequest,
  addOrderCard,
  removeOrderCard,
  addCard,
  removeCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);