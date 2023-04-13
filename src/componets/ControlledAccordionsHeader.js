import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradeIcon from '@mui/icons-material/Grade';
import ScrollAnimation from 'react-animate-on-scroll';


export default function ControlledAccordionsHeader() {
  const [expanded, setExpanded] = React.useState('panel1');

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
          <ScrollAnimation style={{ margin: 'auto' }} duration={2} animateIn='wobble'
            initiallyVisible={true}>
            <Typography className='title-accordion' sx={{textAlign:'center', width: '100%' }}>
              אז מי אני?
            </Typography>
          </ScrollAnimation>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>

            <div className="bold">
              שמי אורית, בעלת תואר Be.d
              בחינוך לגיל הרך והתמחות בחינוך מיוחד.
              <br />
              בעלת נסיון של כעשר שנים במערכת החינוך הפורמאלית והלא פורמלית גם כן.
              <br />
              עם אהבה גדולה לילדים, לחינוך ולתהליכי למידה.
            </div >
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
          <Typography className='title-accordion' sx={{ width: '100%' }}>
            מהם תחומי ההתמחות שלי?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'right' }}>

          <Typography>
            <div> <GradeIcon style={{ ...styleIcon }} /> הכנה לכיתה א'</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> בעלי לקויות למידה</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> בעלי הפרעות קשב וריכוז ADHD  ו ADD</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> ילדי חינוך מיוחד על הספקטרום</div>
            <div> <GradeIcon style={{ ...styleIcon }} /> ילדי כיתות א' עד ו'</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
