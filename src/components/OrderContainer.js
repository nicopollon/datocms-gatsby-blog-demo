import React from "react";
import styled from "styled-components";
import OrderButton from "./OrderButton";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import PartecipantCounter from "./PartecipantCounter";
import Test from "./test";
import QRCode from "qrcode.react";

import {
  Price,
  OrderWrapper,
  PartecipantsWrapper,
  PartecipantSpenWrap,
  PartecipantFloating,
} from "../styles/Order";
import CustomerInfo from "./CustomerInfo";
import QrCodeComponent from "./qrcode";
import CheckOrder from "./checkOrder";
import { onClientEntry } from "../../gatsby-browser";

const OrderContainer = ({ tour, url }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(
    ["Adult x" + adults + " "],
    [""]
  );
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(tour.price);
  const [children, setChildren] = useState(0);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [ticketValidity, checkTicket] = useState(false);

  const incrementCounter = (person, setPersons, personType) => {
    const personInt = parseInt(person);
    const tourPriceInt = parseInt(tour.price);

    const tourChildPriceInt = parseInt(tour.childPrice);
    setPersons(personInt + 1);

    if (personType === "Adults") {
      setPrice(price + tourPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (personInt + 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price + tourChildPriceInt);
      let PartecipantsCopy = [...Partecipants];

      PartecipantsCopy[1] = " Child x " + (personInt + 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const decreaseCounter = (person, setPersons, personType) => {
    const personInt = parseInt(person);
    const tourPriceInt = parseInt(tour.price);

    const tourChildPriceInt = parseInt(tour.childPrice);
    setPersons(personInt - 1);
    if (personType === "Adults") {
      setPrice(price - tourPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (personInt - 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price - tourChildPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[1] = " Child x " + (personInt - 1);
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
    checkTicket(false);
  };

  function CheckForOrder() {
    if (ticketValidity == false) {
      return <CheckOrder onClick={() => checkTicket(true)} />;
    } else {
      return (
        <OrderButton
          tour={tour}
          partecipants={Partecipants}
          price={price}
          qrcode={qrCodeUrl}
          onClick={downloadQR}
          itemURL={url}
        />
      );
    }
  }

  const createTourJson = () => {};

  const addToursbyJs = (adultQuantity, childQuantity) => {
    console.log("entry");
    onClientEntry(() => {
      console.log("entry");
      try {
        console.log("adding");
        window.Snipcart.api.cart.items.add(
          {
            id: tour.id + "-children",
            name: tour.title + "For Children (0-14)",
            price: tour.childPrice,
            url: url,
            quantity: childQuantity,
            stackable: "never",
            customFields: [
              {
                name: "Ticket Type",
                type: "readonly",
                options: "Adult|Child[-10.00]",
                value: "Child",
              },
            ],
          },
          {
            id: tour.id,
            name: tour.title,
            price: tour.price,
            quantity: adultQuantity,
            url: url,
            stackable: "never",
            customFields: [
              {
                name: "Ticket Type",
                type: "readonly",
                options: "Adult|Child[-10.00]",
                value: "Adult",
              },
            ],
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };
  const addProductbyJs = () => {
    if (children > 0) {
      try {
        window.Snipcart.api.cart.items.add({
          id: tour.id,
          name: tour.title,
          price: tour.price,
          url: url,
          quantity: children,
          customFields: [
            {
              name: "Ticket Type",
              type: "dropdown",
              options: "Adult|Child[-10.00]",
              value: "Child",
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
      try {
        window.Snipcart.api.cart.items.add({
          id: tour.id,
          name: tour.title,
          price: tour.price,
          url: url,
          quantity: adults,
          customFields: [
            {
              name: "Ticket Type",
              type: "dropdown",
              options: "Adult|Child[-10.00]",
              value: "Adult",
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        window.Snipcart.api.cart.items.add({
          id: tour.id,
          name: tour.title,
          price: price,
          url: url,
          quantity: adults,
          customFields: [
            {
              name: "Ticket Type",
              type: "dropdown",
              options: "Adult|Child[-10.00]",
              value: "Adult",
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addTickets = () => {};
  return (
    <>
      <OrderWrapper>
        <Price>{tour.price}€ per Person</Price>
        <Price>{price}€ Total</Price>
        <PartecipantsWrapper onClick={() => setVisible(!visible)}>
          <BsPerson size={25} />
          <PartecipantSpenWrap>
            <span style={{ fontSize: ".75rem" }}>Partecipants</span>
            <span>{Partecipants}</span>
          </PartecipantSpenWrap>
        </PartecipantsWrapper>
        <PartecipantFloating visible={visible}>
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
          <button
            style={{ color: "#0066ff", fontSize: "18px", marginTop: "12px" }}
            onClick={() => {
              setVisible(false);
            }}
          >
            Done
          </button>
        </PartecipantFloating>
        <QrCodeComponent
          tourName={tour.title}
          ticketPrice={price}
          uniqueId={"tbd"}
          elementId={"qrcode"}
          partecipants={Partecipants}
        />

        <CheckForOrder />

        {/* <button onClick={() => addToursbyJs(adults, children)}>
          add by js
        </button> */}
      </OrderWrapper>
    </>
  );
};

export default OrderContainer;
