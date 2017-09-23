import React, {Component} from 'react';
import './Concept.css'
import SeniorGuidance from './../../pagesSub/Concept/SeniorGuidance';
import GuidanceContent from './../../pagesSub/Concept/GuidanceContent'

class Concept extends Component {
    render () {
       return (
           <div className="guidance">
               <SeniorGuidance />
               <GuidanceContent />
           </div>
       )
    }
};

export default Concept;