import React from 'react'
import './style.css';

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const Test = () => (
	<>
	<div className = "conatiner" >
		
		Node js<Progress done="70"/>
		Html<Progress done="70"/>
        
        </div>
		
           
	</>
);
	
export default Test;