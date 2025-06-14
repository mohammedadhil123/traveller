import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero.png";
import Button from "./Button";
export default function Home() {
  const [value, setValue] = useState("$500 - $10,000");
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>It's Time To</h1>
          <h1>Explore The World</h1>
          <Button text="Plan Your Trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Africa Europe</option>
                <option>Spain France</option>
                <option>Italy America</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 32px;
  position: relative;
  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 128px;
      h1 {
        font-size: 48px;
        margin-bottom: 32px;
      }
    }
    .planner {
      position: absolute;
      bottom: -32px;
      right: 0;
      background-color: white;
      padding: 32px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 48px;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 7px;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 16px;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 32px;
        h1 {
          font-size: 32px;
          margin-bottom: 16px;
        }
      }
      .planner {
        position: initial;
        margin: 32px;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
