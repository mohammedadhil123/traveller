import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import styled from "styled-components";
export default function Services() {
  const data = [
    {
      image: service1,
      title: "Choose Destination",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service2,
      title: "Explore the Place",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ];
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
margin:128px 64px ;
.services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  .service {
    padding: 20px 32px;
    text-align: center;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    h3 {
      color: brown;

    }
    .p {
      color: brown;
    }
    img {
      height: 128px;
      width: 128px;
    }
    &:hover {
      background-color: white;
    }
  }
   @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 42px;
    .service {
      grid-template-columns: 1fr;
    }

   }
}
`;
