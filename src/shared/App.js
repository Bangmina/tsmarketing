import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
	Experience,
	MarketingInquire,
	Introduce,
	Search,
	SmartStore,
} from "./pages";
import { Header, Footer, Menu, Main } from "./components";
import "../styles/index.scss";
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Menu />

				<Main>
					<Switch>
						<Route exact path="/" component={Introduce} />
						<Route path="/experience" component={Experience} />
						<Route path="/marketingInquire" component={MarketingInquire} />
						<Route path="/introduce" component={Introduce} />
						<Route path="/search" component={Search} />
						<Route path="/smartStore" component={SmartStore} />
					</Switch>
				</Main>
				<Footer />
			</div>
		);
	}
}

export default App;
