import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1  ');

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
          sx={{ background: '#00458B',     borderRadius: '5px' }}

        >
          <Typography className='title-accordion' sx={{ width: '100%' }}>
            ?מתי כדאי לפנות להוראה מתקנת
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>

            <div> .כאשר יש תחושה שלילד/ה פונטציאל גבוה ממה שהם מצליחים להביא לידי ביטוי</div>
            <div>  .כאשר הילד/ה מתקשים בהכנת שיעורי הבית באופן עצמאי</div>
            <div> .'כאשר לילד/ה קשיים או פערים לימודיים בקריאה, הבנת הניקרא, חשיבה מתמטית וכו</div>
            <div>  .כאשר לילד מוטיבציה לימודית נמוכה</div>
            <div> .בעקבות המלצה של אבחון דידקתי/ פסיכו דידקתי</div>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="summary-header"
          sx={{ background: '#00458B',     borderRadius: '5px' }}


        >
          <Typography className='title-accordion' sx={{ width: '100%' }}>תחומי ההתמחות שלי</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>
            <div>'גיל הרך והכנה לכיתה א</div>
            <div>בעלי לקויות למידה</div>
            <div>בעלי הפרעות קשב וריכוז ADHD  ו ADD</div>
            <div>ילדי חינוך מיוחד על הרצף</div>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
