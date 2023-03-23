import React from "react";
import ControlledAccordions from "./ControlledAccordions";
import ControlledAccordionsHeader from "./ControlledAccordionsHeader";
import SlidesComments from "./SlidesComments";
import Slideshow from './Slideshow';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Footer from "./Footer";

function HomePage() {

    const [expandedAboutMe, setExpandedAboutMe] = React.useState(true);


    const handleChangeAboutMe = (panel) => {
        setExpandedAboutMe(prev => !prev);
    };

    const allDes = () => {
        return (<div className="bold">
            שמי אורית, בעלת תואר Be.d
            בחינוך לגיל הרך והתמחות בחינוך מיוחד.
            <br />
            בעלת נסיון של כעשר שנים במערכת החינוך הפורמאלית והלא פורמלית גם כן.
            <br />
            עם אהבה גדולה לילדים, לחינוך ולתהליכי למידה.
        </div >)
    }
    return (
        <div >
            <div className="haeder-img-and-text">
                <div style={{ padding: '20px' }} className="text-header-page">
                    <h2 style={{
                        textAlign: 'right',
                        margin: '0 0 20px 0'
                    }}
                        className="title-header-page">
                        <main class="wrapper">
                            ה
                            <section>
                                <div class="box">
                                    <p class="letter bounce"><SportsBasketballIcon fontSize="small" sx={{ color: '#000' }} /></p>
                                    <p class="letter">ו</p>
                                </div>
                            </section>

                        </main>
                        ראה מתקנת
                    </h2>
                    <div className="row-title-header bold">  הוראה המותאמת אישית ע"י איש ההוראה לכל תלמיד ומתייחסת לחוזקותיו וחולשותיו של התלמיד בהיבטים אקדמאיים.</div>
                    <div className="row-title-header bold"> מטרת הוראה זו היא לקדם ולשפר את תפקודו של התלמיד והשיגיו,  בהלימה לתכנית הלימוד הבית ספרית, תוך הקניית חווית למידה חיובית.</div>
                </div>
            </div>
            <div className="question" style={{ margin: '50px auto' }}>
                <ControlledAccordionsHeader />
                {/* <Question title="קצת עליי" allText={allDes()} expanded={expandedAboutMe} handleChange={handleChangeAboutMe} /> */}
            </div>
            <div className='slide-show' style={{ margin: '50px auto' }}>
                <Slideshow />
            </div>
            <div className="question" style={{ margin: '50px auto' }}>
                <ControlledAccordions />
            </div>
            <div style={{ width: '90%', margin: '10px auto' }}>
                <SlidesComments />
            </div>
            <div style={{ width: '100%'}}>
                <Footer />
            </div>
        </div >
    );
}

export default HomePage;

