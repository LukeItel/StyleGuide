import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import logo from "../../assets/images/ap-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faScrewdriverWrench, faPalette, faCode, faSitemap, faUser, faX } from "@fortawesome/free-solid-svg-icons";

function isColorDark(hexColor) {
	// Function to check if a color is dark based on its relative luminance
	const getRelativeLuminance = (r, g, b) => {
		const a = [r, g, b].map((v) => {
			v /= 255;
			return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
		});
		return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
	};

	// Remove # from the hex color if present
	const color = hexColor.replace('#', '');

	// Convert the hex color to RGB components
	const r = parseInt(color.substring(0, 2), 16);
	const g = parseInt(color.substring(2, 4), 16);
	const b = parseInt(color.substring(4, 6), 16);

	// Calculate the relative luminance
	const luminance = getRelativeLuminance(r, g, b);

	// Return true if the color is considered dark, otherwise false
	return luminance <= 0.5;
}

const NavTop = (props) => {
	const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
	const [newHex, setNewHex] = useState('#f68b1f');
	const [colorIsDark, setColorIsDark] = useState(true);
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const dropDownToggle = () => {
		setDropDownIsOpen((dropDownIsOpen) => !dropDownIsOpen);
	};

	const updateHex = () => {
		setNewHex(document.getElementById("inputHex").value);
	}

	useEffect(() => {
		setColorIsDark(isColorDark(newHex));
	}, [newHex]);

	return (

		<header className="topNav">
			<style>{`:root { 
				--custom-color: ${newHex}; 
				--text-on-custom-color: ${colorIsDark ? '#FFFFFF' : '#000000'}
			}`}</style>

			{/*Visible Top Bar*/}

			<div className="topNav_grid">
				<div className="topNav_logo">
					<img alt="UCSkills" src={logo} />
				</div>
				<div className="topNav_links">
					<NavLink to="/" activeClassName="active">
						<FontAwesomeIcon icon={faHouse} />
						Home
					</NavLink>
					<NavLink to="/structure" activeClassName="active">
						<FontAwesomeIcon icon={faSitemap} />
						Structure
					</NavLink>
					<NavLink to="/ui-components" activeClassName="active">
						<FontAwesomeIcon icon={faScrewdriverWrench} />
						UI Components
					</NavLink>
					<NavLink to="/style" activeClassName="active">
						<FontAwesomeIcon icon={faPalette} />
						Style
					</NavLink>
					<NavLink to="/misc" activeClassName="active">
						<FontAwesomeIcon icon={faCode} />
						Miscellaneous
					</NavLink>
				</div>
				<div className={`topNav_icon ${dropDownIsOpen ? "topNav_icon_active" : ""}`} onClick={dropDownToggle}>
					<FontAwesomeIcon className={`topNav_icon_image ${!dropDownIsOpen ? "topNav_icon_image_active" : ""}`} icon={faUser} />
					<FontAwesomeIcon className={`topNav_icon_image ${dropDownIsOpen ? "topNav_icon_image_active" : ""}`} icon={faX} />
				</div>
			</div>	

			<div className={`topNav_dropDown_styleThree ${dropDownIsOpen ? "topNav_dropDown_styleThree_open" : ""}`}>
				<div className="topNav_dropDown_styleThree_curves topNav_dropDown_styleThree_curves_left"><span></span></div>
				<div className="topNav_dropDown_styleThree_curves topNav_dropDown_styleThree_curves_right"><span></span></div>
				<p className="topNav_dropDown_styleThree_text"><b>John McHasareallylongname</b></p>
				<p className="topNav_dropDown_styleThree_text">johnmchasareallylongname@iteluc.com</p>
				<input type="text" id="inputHex"></input>
				<button onClick={updateHex}>Set Hex</button>
				<button onClick={toggleTheme}>
					Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
				</button>
				{/*<div className="topNav_dropDown_styleThree_icons">*/}
				{/*	<span className="topNav_dropDown_styleThree_icons_icon"><FontAwesomeIcon icon={faGear} /></span>*/}
				{/*	<span className="topNav_dropDown_styleThree_icons_icon"><FontAwesomeIcon icon={faRightFromBracket} /></span>*/}
				{/*</div>*/}
			</div>
		</header>
		
	);
}

export default NavTop;

