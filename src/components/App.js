import React from 'react';
import './App.css';

const App = () => {
	return <ComponentsGenerator />;
};

class ComponentsGenerator extends React.Component {
	state = {
		numChildren: 0
	};

	onAddChild = (e) => {
		this.setState({
			numChildren: this.state.numChildren + 1
		});
	};

	render() {
		const children = [];

		for (var i = 0; i < this.state.numChildren; i += 1) {
			children.push(<ComponentsGenerator key={i} number={i} />);
		}

		return (
			<React.Fragment>
				<div
					className="card"
					onClick={(e) => {
						e.stopPropagation();
						this.onAddChild(e);
					}}
				/>
				<div className="children">{children}</div>
			</React.Fragment>
		);
	}
}

export default App;
