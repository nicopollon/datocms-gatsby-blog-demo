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
  BookBtn,
} from "../styles/Order";
import CustomerInfo from "./CustomerInfo";
import QrCodeComponent from "./qrcode";
import CheckOrder from "./checkOrder";

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

  function fetchJsonProduct(slug) {
    console.log(slug);

    fetch(`../../toursJson/${slug}.json`)
      .then((r) => r.json())
      .then((data) => {
        downloadQR();
        console.log(JSON.stringify(data));

        if (children > 0) {
          try {
            window.Snipcart.api.cart.items.add(
              {
                id: data[0].id,
                name: data[0].title,
                url: `/toursJson/${slug}.json`,
                price: data[0].price,
                qrcode: qrCodeUrl,
                quantity: adults,
              },
              {
                id: data[1].id,
                name: data[1].title,
                url: `/toursJson/${slug}.json`,
                price: data[1].price,

                quantity: children,
              }
            );
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            window.Snipcart.api.cart.items.add({
              id: data[0].id,
              name: data[0].title,
              url: `/toursJson/${slug}.json`,
              price: data[0].price,
              qrcode: qrCodeUrl,

              quantity: adults,
            });
          } catch (error) {
            console.log(error);
          }
        }
      });
  }
  return (
    <>
      <OrderWrapper>
        <Price>{tour.price}€ per Person</Price>
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
        <Price>Total {price}€</Price>
        <BookBtn onClick={() => fetchJsonProduct(tour.slug)}>
          Order now{" "}
        </BookBtn>
      </OrderWrapper>
    </>
  );
};

export default OrderContainer;
