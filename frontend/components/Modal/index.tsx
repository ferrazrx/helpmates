import React, { useState, Children } from "react";
import Router from "next/router";
import ModalConfig from "@material-ui/core/Modal";
import { ModalContainer, Button } from "./style";

interface IProps {
  link?: string,
  style?: string,
  opened?: boolean,
  routeOnClose?: string,
  children: any
}

interface IState{
  open: boolean
}

const Modal: React.FunctionComponent<IProps> = (props): JSX.Element => {

  const [openModal, setOpenModal] = useState<boolean>(props.opened ? props.opened : false);
  
  

  const handleModal = ():void => {
    setOpenModal(!openModal);
  };

  const routeOnClose = ():void => {
    Router.push(props.routeOnClose);
  };


    if (openModal)
      return (
        <>
          <Button className={props.style} onClick={handleModal}>
            {props.link}
          </Button>
          <ModalConfig
            open={openModal}
            onBackdropClick={
              props.routeOnClose ? routeOnClose : handleModal
            }
            onEscapeKeyDown={
              props.routeOnClose ? routeOnClose : handleModal
            }
          >
            <ModalContainer>
              {props.children(handleModal)}
            </ModalContainer>
          </ModalConfig>
        </>
      );
    return (
      <Button className={props.style} onClick={handleModal}>
        {props.link}
      </Button>
    );
  }

export default Modal;