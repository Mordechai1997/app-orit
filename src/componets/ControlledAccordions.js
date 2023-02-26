import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1  ');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const styleIcon = { width: '12px', height: '12px', marginLeft: '15px', fill: '#3FD2C7' };
  return (
    <div style={{ boxShadow: '0px 2px 5px 0px rgb(60 64 67 / 16%)' }}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="summary-header"
          sx={{ background: '#00458B', borderRadius: '5px' }}

        >
          <Typography className='title-accordion' sx={{ width: '100%' }}>
            מתי כדאי לפנות להוראה מתקנת?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>

            <div><FavoriteIcon style={{ ...styleIcon }} fontSize='xx-small' /> כאשר יש תחושה שלילד/ה פונטציאל גבוה ממה שהם מצליחים להביא לידי ביטוי.</div>
            <div><FavoriteIcon style={{ ...styleIcon }} fontSize='xx-small' />  כאשר הילד/ה מתקשים בהכנת שיעורי הבית באופן עצמאי.</div>
            <div><FavoriteIcon style={{ ...styleIcon }} fontSize='xx-small' /> כאשר לילד/ה קשיים או פערים לימודיים בקריאה, הבנת הניקרא, חשיבה מתמטית וכו'.</div>
            <div><FavoriteIcon style={{ ...styleIcon }} fontSize='xx-small' />  כאשר לילד/ה מוטיבציה לימודית נמוכה.</div>
            <div><FavoriteIcon style={{ ...styleIcon }} fontSize='xx-small' /> בעקבות המלצה של אבחון דידקתי/ פסיכו דידקתי.</div>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="summary-header"
          sx={{ background: '#00458B', borderRadius: '5px' }}

        >
          <ScrollAnimation animateIn='flipInX' duration={2} 
            initiallyVisible={true} style={{margin:'auto'}}>
            <Typography className='title-accordion' sx={{ width: '100%' }}>
              מהו תהליך הלמידה?
            </Typography>
          </ScrollAnimation>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography component={'span'} variant={'body2'}>
            <div>
              בתהליך הלמידה יש התייחסות לקצב הייחודי של הילד/ה, באופן המאפשר להם לרכוש מיומנויות בסיסיות אותן התקשו לרכוש במוסד הלימודים.
              <br />
              <br />
              <span style={{ fontWeight: 'bold' }}>תהליך הלמידה מתחלק לשלושה שלבים</span>
              <div className='title-and-icon'>
                <ArrowLeftIcon style={{ ...styleIcon }} />
                <span style={{ fontWeight: 'bold' }}> שלב ההוראה המתווכת – </span>
                בו מתווך המורה לתלמיד/ה את התהליכים תוך פיתוח קוגניציה ומטאקוגניציה.
              </div>
              <div className='title-and-icon'>
                <ArrowLeftIcon style={{ ...styleIcon }} />
                <span style={{ fontWeight: 'bold' }}>
                  שלב הביניים (כרטיסי הניווט) –
                </span>
                בשלב זה התלמיד/ה פועלים ע"י כרטיסי ניווט ובעזרתו של המתווך עד
                להפנמה מלאה של האסטרטגיה. דרך פעולה זו משמשת לילד/ה קביים המאפשרים להם להתנתק בהמשך מהמורה המתווך בהדרגה ולהפוך ללומדים עצמאיים.
              </div>
              <div className='title-and-icon'>
                <ArrowLeftIcon style={{ ...styleIcon }} />
                <span style={{ fontWeight: 'bold' }}> שלב העבודה העצמאית – </span>
                בשלב זה התלמיד/ה הפנימו כבר את אופן הלמידה ויכולים לתפקד באופן עצמאי בעזרת כרטיסי הניווט שברשותם והכלים הנוספים שרכשו.
              </div>
              <br />
              הוראה מתקנת אינה מרפאה את ליקוי הלמידה אלא מסייעת לילד/ה להתקדם ולצמצם פערים ע"י שימוש בערוצים החזקים שלהם או שימוש בדרכים חלופיות.
              תהליך הלמידה המלווה בכרטיס ניווט אינו פותר את הלומד/ת מלחשוב ולפעול, שכן עליהם לאתר את הבעיה העומדת בפניהם, להגדירה, לחפש את כרטיס הניווט המתאים לפתירתה – ולפתור אותה בהתאם.
            </div>
          </Typography>
        </AccordionDetails>      </Accordion>
    </div>
  );
}
