import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function ControlledAccordionsFooter() {
  const [expanded, setExpanded] = React.useState('panel1  ');
  const styleIcon = { width: '18px', height: '18px', marginLeft: '15px', fill: '#3FD2C7' };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="summary-header"
          sx={{ background: '#00458B', borderRadius: '5px' }}

        >
          <Typography component={'span'} variant={'body2'} className='title-accordion' sx={{ width: '100%' }}>
            תהליך הלמידה
          </Typography>
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
              <br/>
              הוראה מתקנת אינה מרפאה את ליקוי הלמידה אלא מסייעת לילד להתקדם ולצמצם פערים ע"י שימוש בערוצים החזקים שלו או שימוש בדרכים חלופיות.
              תהליך הלמידה המלווה בכרטיס ניווט אינו פותר את הלומד מלחשוב ולפעול, שכן עליו לאתר את הבעיה העומדת בפניו, להגדירה, לחפש את כרטיס הניווט המתאים לפתירתה – ולפתור אותה בהתאם.
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
