import logo from "./OIP2.jpg";
import Name from "./components/Name";
import "./App.css";
import Description from "./components/Description";
import Price from "./components/Price";
import Card from "react-bootstrap/Card";
import product from "./components/product";

function App() {
	let Uname = "Patrick";
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "gray",
					width: "500px",
				}}
				className="container mt-3 rounded-3"
			>
				{/* This is card, that will take all the seperate components into one */}
				<Card className="mt-3" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={product.image} />
					<Card.Body>
						<Card.Title>
							<Name />
						</Card.Title>
						<Card.Text>
							<Description />
							<br />
							<Price />
						</Card.Text>
					</Card.Body>
				</Card>

				<br />

				{/* below is a condition if a username is given.
				if given, it will show hello, the name, and a picture
				if not, then it will show hello you */}
				{Uname ? (
					<>
						<div className="square border border-dark bg-primary mb-3 rounded-3 text-center">
							<p>Hello, {Uname}</p>{" "}
							<img className="w-50" src={logo} alt="Logo" />
						</div>
					</>
				) : (
					<p>Hello you</p>
				)}
			</div>
		</>
	);
}

export default App;
