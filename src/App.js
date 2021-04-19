import "./App.css";
import ClientWallet from "./components/ClientWallet";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecentActivity from "./components/RecentActivity";
import SelectCurrency from "./components/SelectCurrency";

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* Balance */}
			<ClientWallet />
			{/* SelectCurrency */}
			<SelectCurrency />
			{/* RecentActivity */}
			<RecentActivity />
			<Footer />
			{/* Footer */}
		</div>
	);
}

export default App;
