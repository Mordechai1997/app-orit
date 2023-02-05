import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1  ');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const styleIcon = { width: '12px', height: '12px', marginLeft: '15px', fill: '#3FD2C7' };
  return (
    <div style={{    boxShadow: '0px 2px 5px 0px rgb(60 64 67 / 16%)'}}>

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
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="summary-header"
          sx={{ background: '#00458B', borderRadius: '5px' }}


        >
          <Typography className='title-accordion' sx={{ width: '100%' }}>תחומי ההתמחות שלי</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>
            <div> <GradeIcon style={{ ...styleIcon }} /> גיל הרך והכנה לכיתה א'</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> בעלי לקויות למידה</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> בעלי הפרעות קשב וריכוז ADHD  ו ADD</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> ילדי חינוך מיוחד על הספקטרום</div>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
