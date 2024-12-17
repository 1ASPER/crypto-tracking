import { Button } from './components/Button';
import { Input } from './components/Input';
import { Typography } from './components/Typography';
import { Heading } from './components/Heading';  
import { Tooltip } from './components/Tooltip';
import { Accordion } from './components/Accordion';


function App() {
  return (
    <div className="wrapper">

        {/* Button */}
      
        <div className="button-container">
            
            <Button className='button' variant ='primary' size='large'>lg, primary</Button>
            <Button className='button' variant ='primary' size='medium'>md, primary</Button>
            <Button className='button' variant ='primary' size='small'>sm, primary</Button>

            <Button className='button' variant ='bordered' size='large'>lg, bordered</Button>
            <Button className='button' variant ='bordered' size='medium'>md, bordered</Button>
            <Button className='button' variant ='bordered' size='small'>sm, bordered</Button>
            
        </div>

        {/* Input */}

        <div className="input-container">
            <Input type="text" placeholder="Ivan Ivanov" label="Name" />
            <Input type="text" placeholder="Focus" label="Name" />
            <Input type="text" placeholder="Danger" danger label="Name" />
            {/* <Input type="text" placeholder="Enter your password" disabled label="Name" value="Disabled"/> */}
        </div>

        {/* Typography */}

        <div className="typography-container">
            <Typography textSize="sm">
                SM. Our mission is to redefine the model of learning and re-engineer
                its process by providing innovative administrative and instructional
                technologies. Click here for our beliefs. If you are a school
                administrator and would like to use ecourse.org for your classes,
                please create school profiles. Instructors and students may signup
                independent user account. For questions, contact us.
            </Typography>
            <Typography textSize="md">
                MD. Our mission is to redefine the model of learning and re-engineer
                its process by providing innovative administrative and instructional
                technologies. Click here for our beliefs. If you are a school
                administrator and would like to use ecourse.org for your classes,
                please create school profiles. Instructors and students may signup
                independent user account. For questions, contact us.
            </Typography>
            <Typography textSize="lg">
                LG. Our mission is to redefine the model of learning and re-engineer
                its process by providing innovative administrative and instructional
                technologies. Click here for our beliefs. If you are a school
                administrator and would like to use ecourse.org for your classes,
                please create school profiles. Instructors and students may signup
                independent user account. For questions, contact us.
            </Typography>
        </div>

        {/* Heading */}

        <div className="heading-container">
            <Heading level={1} className="heading">H1. Heading 1</Heading>
            <Heading level={2} className="heading">H2. Heading 2</Heading>
            <Heading level={3} className="heading">H3. Heading 3</Heading>
            <Heading level={4} className="heading">H4. Heading 4</Heading>
            <Heading level={5} className="heading">H5. Heading 5</Heading>
            <Heading level={6} className="heading">H6. Heading 6</Heading>
        </div>

        {/* Tooltip */}

        <div className="tooltip-container">
            <Tooltip text="I am a tooltip">Tooltip Top</Tooltip>
            <Tooltip text="I am a tooltip" position="left">Tooltip Left</Tooltip>
            <Tooltip text="I am a tooltip" position="right">Tooltip Right</Tooltip>
            <Tooltip text="I am a tooltip" position="bottom">Tooltip Bottom</Tooltip>
        </div>

        {/* Accordion */}

        <div className="accordion-container">
            <Accordion title="Accordion 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="Accordion 2" defaultOpen>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Accordion>
        </div>


      
    </div>
  );
}

export default App;
