import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Question({title, allText, expanded, handleChange}) {
 
  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='title-accordion' sx={{ width:'100%'}}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign:'right'}}>
          <Typography>
            {allText}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
