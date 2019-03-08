import React from 'react';
import './App.css';

const App = () => {
	return <ComponentsGenerator />;
};

class ComponentsGenerator extends React.PureComponent {
	state = {
		numChildren: 0
	};

	onAddChild = () => {
		this.setState({
			numChildren: this.state.numChildren + 1
		});
	};

	render() {
		const children = [];

		for (let i = 0; i < this.state.numChildren; i++) {
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
