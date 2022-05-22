import React, { useEffect, useState} from "react";
import DescriptionWithLink from "../../descriptionWithLink";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/${props.name}.json`)
        .then(response => response.json())
        .then(data => setSatellites(data['satellites']));
    }, [props]);

    const AllSatellites = () => {
        let allSatellites = satellites.map((satellite, index) =>
            <li key={index}>Satélite {satellite.name}</li>
        );
        return allSatellites;
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <h4>Satélites do Planeta: </h4>
                <ul>
                    {AllSatellites()}
                </ul>
            <br/>
        </div>
    );
}

// class Planet extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             satellites: []
//         };
//     }

//     componentDidMount() {
//         fetch(`http://localhost:3000/api/${this.props.name}.json`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data['satellites']);
//                 this.setState(state => ({
//                     satellites: data['satellites']
//                 }));
//             });
//     }

//     AllSatellites() {
//         let satellites = this.state.satellites.map((satellite, index) =>
//             <li key={index}>Satélite {satellite.name}</li>
//         );
//         return satellites;
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
//                 <DescriptionWithLink description={this.props.description} text={this.props.text} link={this.props.link}/>
//                 <h4>Satélites do Planeta: </h4>
//                 <ul>
//                     {this.AllSatellites()}
//                 </ul>
//                 <br/>
//             </div>
//         );
//     };
// }

export default Planet;