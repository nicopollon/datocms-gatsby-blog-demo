import React from "react";
import {
  BookBtn,
  BookModal,
  DatePickerWrapper,
  Details,
  OrderRecap,
  PartecipantsMobile,
  PartecipantsMobileHeader,
  PartecipantSpenWrap,
  PartecipantsWrapper,
  Price,
  PriceCalc,
  Calendar,
  Popper,
} from "../styles/Order";
import PartecipantCounter from "./PartecipantCounter";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import QrCodeComponent from "./qrcode";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
const MobileOrderMenu = ({ tour, open, setOpen, url }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(["Adult: " + adults], [""]);
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(tour.price);
  const [children, setChildren] = useState(0);
  const [startdate, setStartDate] = useState(moment().toDate());

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

                quantity: adults,
                customFields: [
                  {
                    name: "Date",
                    value:
                      startdate.getDate() + "/" + (startdate.getMonth() + 1),
                    type: "readonly",
                  },
                  {
                    name: "QRCODE",
                    value: qrCodeUrl,
                    type: "hidden",
                  },
                ],
              },
              {
                id: data[1].id,
                name: data[1].title,
                url: `/toursJson/${slug}.json`,
                price: data[1].price,
                quantity: children,
                customFields: [
                  {
                    name: "Date",
                    value:
                      startdate.getDate() + "/" + (startdate.getMonth() + 1),
                    type: "readonly",
                  },
                  {
                    name: "QRCODE",
                    value: qrCodeUrl,
                    type: "hidden",
                  },
                ],
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

              customFields: [
                {
                  name: "Date",
                  value: startdate.getDate() + "/" + (startdate.getMonth() + 1),
                  type: "readonly",
                },
                {
                  name: "QRCODE",
                  value: qrCodeUrl,
                  type: "hidden",
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
      });
  }

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

        <DatePickerWrapper
          selected={startdate}
          onChange={(date) => setStartDate(date)}
          calendarContainer={Calendar}
          minDate={moment().toDate()}
        />
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

          <BookBtn onClick={() => fetchJsonProduct(tour.slug)}>
            Order now{" "}
          </BookBtn>
        </OrderRecap>
      </Details>
    </BookModal>
  );
};

export default MobileOrderMenu;
