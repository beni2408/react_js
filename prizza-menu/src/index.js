import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const head_style = {
  //   color: "red",
  //   fontSize: "32px",
  //   textTransform: "uppercase",
  // };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Ternary operator */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we're Still woerking on our menu. Please come back later</p>
      )}

      {/* //conditional operator
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  const sdstyle = {
    color: "red",
    textTransform: "uppercase",
    fontWeight: "bold",
  };
  if (props.pizzaObj.soldOut)
    return (
      <div className="pizza">
        <img src={props.pizzaObj.photoName}></img>
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p> {props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price + 3}</span>
          <p style={sdstyle}>SOLD OUT</p>
        </div>
      </div>
    );

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p> {props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

//props - communication b/w parent and child component for data transform

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently opne!");
  // else alert("Sorry we're closed");
  // return React.createElement("footer", null, "We're currently Open");

  //ternary operator
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} />
      ) : (
        <p>
          We're happy to walcome you between {openHour}:00 & {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're Open until {props.closeHour}:00. Come visit us or order online.{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//another method
//if (!isOpen) return <p>CLOSED</p>;

//   //conditional operator
//   return (
//     <footer className="footer">
//       {isOpen && (
//         <div className="order">
//           <p>
//             We're Open until {closeHour}:00. Come visit us or order online.{" "}
//           </p>
//           <button className="btn">Order</button>
//         </div>
//       )}
//     </footer>
//   );
// }

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
