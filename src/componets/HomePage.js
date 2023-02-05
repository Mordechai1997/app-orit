import { display } from "@mui/system";
import React from "react";
import ControlledAccordions from "./ControlledAccordions";
import ControlledAccordionsFooter from "./ControlledAccordionsFooter";
import Question from "./Question";
import SlidesComments from "./SlidesComments";
import Slideshow from './Slideshow'
function HomePage() {

    const [expandedAboutMe, setExpandedAboutMe] = React.useState(true);


    const handleChangeAboutMe = (panel) => {
        setExpandedAboutMe(prev => !prev);
    };

    const allDes = () => {
        return (<div className="bold">
            שמי אורית, בעלת תואר Be.d 
            בחינוך לגיל ערך והתמחות בחינוך מיוחד
            <br />

            בעלת נסיון של כ10 שנים במערכת החינוך הפורמאלית והלא פורמלית גם כן.
            <br />
            עם אהבה גדולה לילדים, לחינוך ולתהליכי למידה.
        </div >)
    }
    return (
        <div >
            <div className="haeder-img-and-text">
                <div style={{ padding: '20px' }}>
                    <h2 style={{
                        textAlign: 'right',
                        fontSize: 'xxx-large',
                        margin: '0 0 20px 0'
                    }}> הוראה מתקנת</h2>
                    <div className="row-title-header bold"> הינה הוראה המותאמת אישית ע"י איש ההוראה לכל תלמיד</div>
                    <div className="row-title-header bold">  ומתייחסת לחוזקותיו וחולשותיו של התלמיד בהיבטים אקדמאיים,</div>
                    <div className="row-title-header bold"> מטרת הוראה זו היא לקדם ולשפר את תפקודו של התלמיד והשיגיו</div>
                    <div className="row-title-header bold">   בהלימה לתכנית הלימוד הבית ספרית, תוך הקניית חווית למידה חיובית.</div>
                </div>
            </div>
            <div style={{ width: '70%', margin: '50px auto' }}>
                <Question title="קצת עליי" allText={allDes()} expanded={expandedAboutMe} handleChange={handleChangeAboutMe} />
            </div>
            <div className='slide-show' style={{ margin: '50px auto' }}>
                <Slideshow />
            </div>
            <div style={{ width: '70%', margin: '50px auto' }}>
                <ControlledAccordions />
            </div>
            <div style={{ width: '90%', margin: '10px auto' }}>
                <SlidesComments />
            </div>
            <div style={{ width: '70%', margin: '50px auto' }}>
                <ControlledAccordionsFooter />
            </div>
        </div >
    );
}

export default HomePage;

