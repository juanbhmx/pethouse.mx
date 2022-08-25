import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import isEqual from 'react-fast-compare';
import { MapContainer, TileLayer, LayerGroup, Marker } from 'react-leaflet';
import Popup from 'react-leaflet-editable-popup';
import {
	lochnessIcon,
	blueIcon,
	greenIcon,
	blackIcon,
	violetIcon,
} from './Icons';

// import '../../index.css';
import '../../../node_modules/leaflet/dist/leaflet.css';

//  ---- UTILITY FUNCTIONS ----------------------------- //

function randomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function roundNumber(number, tensplace = 10) {
	return Math.round(number * tensplace) / tensplace;
}

const markerRef1 = React.createRef();

class Map extends React.Component {
	state = {
		mapRef: null,
		randomMarkers: [],
	};

	setMapRef = (map) => {
		this.setState({ mapRef: map });
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.randomMarkers.length !== nextState.randomMarkers.length) {
			// console.log('map rerendered')
			return true;
		} else {
			if (!isEqual(this.state.randomMarkers, nextState.randomMarkers)) {
				// console.log('map not rerendered')
				return false;
			} else {
				// console.log('map rerendered')
				return true;
			}
		}
	}

	placeRandomMarker = () => {
		const { mapRef } = this.state;
		const bounds = mapRef.getBounds();
		const mapTop = bounds._northEast.lat;
		const mapBottom = bounds._southWest.lat;
		const mapRight = bounds._northEast.lng;
		const mapLeft = bounds._southWest.lng;

		const pointLat = randomNumber(mapTop, mapBottom);
		const pointLng = randomNumber(mapLeft, mapRight);

		this.setState({
			randomMarkers: [
				...this.state.randomMarkers,
				{
					coords: [pointLat, pointLng],
					popupContent: `<h3>This marker is removable and its popup is editable.</h3>
               This randomly generated marker is at ${roundNumber(
						pointLat,
						1000
					)}° latitude and ${roundNumber(pointLng, 1000)}° longitude. <br>
               <br>
               These blue markers are generated randomly and added to an array within the map's state object.  They are added to the map using an <code>array.map( (marker, index) => &lt;Marker&gt;)</code> function. In order for the <i><u>Reportar estado</u></i> button to function correctly, the <code>removalCallback</code> prop is required. This function accepts the callback function of your choosing to communicate with the state where your array is kept, passing the <code>index</code> as the argument of the callback.  This will make sure that your <i><u>Remove</u></i> button removes the correct marker from your array and map.  This will be written like: <code>removalCallback={ () => {yourCallback(index)} </code><br>
               `,
					open: false,
					autoClose: true,
				},
			],
		});
	};

	removeRandomMarker = (index) => {
		const { mapRef } = this.state;
		mapRef.closePopup();

		const newRandomMarkers = [...this.state.randomMarkers];
		newRandomMarkers.splice(index, 1);

		this.setState({
			randomMarkers: newRandomMarkers,
		});
	};

	saveContentToState = (content, index) => {
		const newRandomMarkers = this.state.randomMarkers.map((marker, i) => {
			if (i === index) {
				return {
					...marker,
					popupContent: content,
				};
			} else {
				return marker;
			}
		});

		this.setState({
			randomMarkers: newRandomMarkers,
		});
	};

	onOpenPopup = (index) => {
		const newRandomMarkers = this.state.randomMarkers.map((marker, i) => {
			if (i === index) {
				return {
					...marker,
					open: true,
				};
			} else {
				return { ...marker };
			}
		});

		this.setState({
			randomMarkers: newRandomMarkers,
		});
	};

	onClosePopup = (index) => {
		const newRandomMarkers = this.state.randomMarkers.map((marker, i) => {
			if (i === index) {
				return {
					...marker,
					open: false,
				};
			} else {
				return { ...marker };
			}
		});

		this.setState({
			randomMarkers: newRandomMarkers,
		});
	};

	render() {
		const randomMarkers = this.state.randomMarkers.map(
			(markerSpec, index) => (
				<Marker position={markerSpec.coords} key={uuidv4()} icon={blueIcon}>
					<Popup
						open={markerSpec.open}
						onOpen={() => this.onOpenPopup(index)}
						onClose={() => {
							this.onClosePopup(index);
						}}
						maxWidth="500"
						editable
						removable
						sourceKey={index}
						removalCallback={() => {
							this.removeRandomMarker(index);
						}}
						saveContentCallback={(content) => {
							this.saveContentToState(content, index);
						}}
					>
						{markerSpec.popupContent}
					</Popup>
				</Marker>
			)
		);

		const sampleMarkerText = {
			// Note how popup content can be written as an HTML string, or as JSX within a single node:

			removableAndEditable: `Datos de la mascota`,

			removable: `<h3>Reportar Estado</h3>`,

			editable: (
				<React.Fragment>
					<h3>soy otro popup</h3>
					<p>
						soy datos de la mascota
					</p>
					
					
				</React.Fragment>
			),
			lochness: (
				<React.Fragment>
					<h3>This monster is removable.</h3>
					<p>
						holo text
					</p>
				</React.Fragment>
			),
		};

		return (
			<MapContainer
				doubleClickZoom={false}
				id="mapId"
				zoom={4}
				center={[33.852169, -100.5322]}
				whenCreated={this.setMapRef}
			>
				{/* <TileLayer
					url="https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}"
					attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
				/> */}

				<Marker
					position={[27.86176, -98.03529]}
					icon={violetIcon}
					ref={markerRef1}
				>
					<Popup
						maxWidth="600"
						removable
						editable
						source={markerRef1}
						open
						autoClose={false}
					>
						{sampleMarkerText.removableAndEditable}
					</Popup>
				</Marker>

				

				<Marker position={[17.86176, -145.03529]} icon={greenIcon}>
					<Popup maxWidth="500" editable>
						{sampleMarkerText.editable}
					</Popup>
				</Marker>

				<Marker position={[17.86176, -80.03529]} icon={greenIcon}>
					<Popup maxWidth="500" editable>
						{sampleMarkerText.editable}
					</Popup>
				</Marker>

				<Marker position={[22, -130.03529]} icon={lochnessIcon}>
					<Popup removable nametag={'Sea Monster'}>
						{sampleMarkerText.lochness}
					</Popup>
				</Marker>

				<button
					id="placeRandomMarkerButton"
					onClick={this.placeRandomMarker}
				>
					Ubicacion randomddddddddddd
				</button>

				<LayerGroup>{randomMarkers}</LayerGroup>
			</MapContainer>
		);
	}
}

export default Map;