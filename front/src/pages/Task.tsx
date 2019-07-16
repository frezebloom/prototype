import * as React from "react";
import { connect } from "react-redux";
import Map from "../conteiners/Map";
import LeftSideBar from "../conteiners/LeftSideBar";
import RightSideBar from "../conteiners/RightSideBar";
import Cards from "../conteiners/Cards";
import CornerDialog from '../components/CornerDialog';

import { ApplicationState } from "../store";
import { ICornerDialog } from "../store/cornerDialog/types";

import { hideMessage } from "../store/cornerDialog/actions";

import "../styles/content.scss";
import "../styles/cornerDialog.scss"; 

interface PropsFromState {
  hideCornerDialog: boolean;
  messages: ICornerDialog[];
}

interface PropsFromDispatch {
  hideMessage: typeof hideMessage;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Task: React.FC<AllProps> = props => {

  const handleClickCloseCornerDialog = () => props.hideMessage()

  const { hideCornerDialog, messages } = props
  return (
    <>
      <div className="content">
        <LeftSideBar />
        <Map />
        <RightSideBar />
        <div className={hideCornerDialog ? "corner-dialog-notActive" : "corner-dialog-isActive"}>
          <CornerDialog 
            title="Успешно" 
            message="Ваш заказ успешно отправлен"
            handleClickClose={handleClickCloseCornerDialog}  
          />
        </div>        
      </div>
      <Cards /> 
    </>
  );
};

const mapsStateToProps = ({ cornerDialog }: ApplicationState) => ({
  messages: cornerDialog.data,
  hideCornerDialog: cornerDialog.hide
});

const mapDispatchToProps = {
  hideMessage
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Task);
