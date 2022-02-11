import React from "react";
import {
  BookBtn,
  BookModal,
  Details,
  OrderRecap,
  PartecipantsMobile,
  PartecipantsMobileHeader,
  PartecipantSpenWrap,
  PartecipantsWrapper,
  Price,
  PriceCalc,
} from "../styles/Order";
import CustomerInfo from "./CustomerInfo";
import PartecipantCounter from "./PartecipantCounter";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import OrderButton from "./OrderButton";
import QrCodeComponent from "./qrcode";
import { StaticImage } from "gatsby-plugin-image";
const MobileOrderMenu = ({ tour, open, setOpen, url }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(["Adult: " + adults], [""]);
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(tour.price);
  const [children, setChildren] = useState(0);

  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const incrementCounter = (person, setPersons, personType) => {
    setPersons(person + 1);

    if (personType === "Adults") {
      setPrice(price + tour.price);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult: " + (person + 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price + tour.childPrice);
      let PartecipantsCopy = [...Partecipants];

      PartecipantsCopy[1] = " Child: " + (person + 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const decreaseCounter = (person, setPersons, personType) => {
    setPersons(person - 1);
    if (personType === "Adults") {
      setPrice(price - tour.price);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult: " + (person - 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price - tour.childPrice);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[1] = " Child: " + (person - 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(pngUrl);
    setQrCodeUrl(pngUrl);
    setOpen(false);
  };
  return (
    <BookModal open={open}>
      <Details>
        <PartecipantsMobileHeader>
          {" "}
          <h2>Booking</h2>
          <AiOutlineClose size={25} onClick={setOpen} />
        </PartecipantsMobileHeader>
        <PartecipantsWrapper onClick={() => setVisible(!visible)}>
          <BsPerson size={25} />
          <PartecipantSpenWrap>
            <span style={{ fontSize: ".75rem" }}>Partecipants</span>
            <span>{Partecipants}</span>
          </PartecipantSpenWrap>
        </PartecipantsWrapper>
        <PartecipantsMobile open={visible}>
          <PartecipantsMobileHeader>
            {" "}
            <h2>Partecipants</h2>
            <AiOutlineClose size={25} onClick={() => setVisible(false)} />
          </PartecipantsMobileHeader>
          <PartecipantCounter
            persons={adults}
            incrementCounter={() =>
              incrementCounter(adults, setAdults, "Adults")
            }
            decreaseCounter={() => decreaseCounter(adults, setAdults, "Adults")}
            personType="Adults"
          />
          <PartecipantCounter
            persons={children}
            incrementCounter={() =>
              incrementCounter(children, setChildren, "Children")
            }
            decreaseCounter={() =>
              decreaseCounter(children, setChildren, "Children")
            }
            personType="Children"
          />
          <BookBtn onClick={() => setVisible(false)}>Done</BookBtn>
        </PartecipantsMobile>

        <QrCodeComponent
          tourName={tour.title}
          ticketPrice={price}
          uniqueId={"tbd"}
          elementId={"qrcode"}
          partecipants={Partecipants}
        />
        <OrderRecap>
          <h2>{tour.title}</h2>
          <p style={{ fontSize: "12px" }}>{tour.description}</p>
          <PriceCalc>
            {" "}
            <p>
              {adults >= 1 && "Adults: " + adults + " x " + tour.price + "€"}
            </p>
            <p>
              {children >= 1 &&
                "Child: " + children + " x " + tour.childPrice + "€"}
            </p>
          </PriceCalc>
          <Price>Total Price: {price}€</Price>
          {qrCodeUrl}
          <OrderButton
            onClick={downloadQR}
            tour={tour}
            price={price}
            partecipants={Partecipants}
            qrcode={qrCodeUrl}
            itemURL={url}
          ></OrderButton>
        </OrderRecap>
      </Details>
    </BookModal>
  );
};

export default MobileOrderMenu;
