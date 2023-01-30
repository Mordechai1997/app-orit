import React from "react";
import ControlledAccordions from "./ControlledAccordions";
import Question from "./Question";
import SlidesComments from "./SlidesComments";
import Slideshow from './Slideshow'

function HomePage() {

    const [expandedAboutMe, setExpandedAboutMe] = React.useState(true);


    const handleChangeAboutMe = (panel) => {
        setExpandedAboutMe(prev => !prev);
    };


    return (
        <div >
            <div className="haeder-img-and-text">
                uiui
            </div>
            <div style={{ width: '50%', margin: '50px auto' }}>
                <Question title="קצת עליי" allText="סבסבס דגד" expanded={expandedAboutMe} handleChange={handleChangeAboutMe} />
            </div>
            <div style={{ width: '70%', margin: '50px auto' }}>
                <Slideshow />
            </div>
            <div style={{ width: '50%', margin: '50px auto' }}>
                <ControlledAccordions />
            </div>
            <div style={{ width: '90%', margin: '10px auto' }}>
                <SlidesComments />
            </div>
            <div style={{ width: '50%', margin: '50px auto' }}>
                <Question title="קצת עליי" allText="סבסבס דגד" expanded={false} handleChange={handleChangeAboutMe} />
                <Question title="קצת עליי" allText="סבסבס דגד" expanded={expandedAboutMe} handleChange={handleChangeAboutMe} />
            </div>
        </div>
    );
}

export default HomePage;

