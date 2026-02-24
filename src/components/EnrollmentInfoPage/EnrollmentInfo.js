import { useState, useEffect } from 'react'
import "../SchedulePage/SchedulePage.css"
import "../HomeworkPage/homework.css"
import "./enrollment.css"

function EnrollmentInfoPage() {
  const [content, setContent] = useState("");

    useEffect(() => {
        fetch("content/course-info.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
        document.querySelector('body').scrollTo(0, 0);
    }, []);
  return (
    <div>
    <div className="text-wrapper">
    
      <div className="header">
      <a href="/" style={{"color":"#3e9ec3", "borderBottom":"1px solid #3e9ec3", "cursor":"pointer", "fontSize":"0.9em"}}>Back to Home Page</a>
        <h1 style={{"color":"#3e9ec3", "fontWeight":"bold", "fontSize":"2.5em"}}>How do I Enroll?</h1>
      </div>

      <p style={{"textAlign":"center", "color":"#3e9ec3", "fontWeight":"500", "letterSpacing":"-0.01em" }}>Enroll in Cubstart through these 3 easy steps!</p>

      <br/>

      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 1: </h3><p style={{"marginTop":"19px"}}>
        Join the <a style={{"cursor":"pointer", "borderBottom":"1px solid #3e9ec3", "fontWeight":"600",}} target="_blank" href="https://www.gradescope.com">Gradescope</a>with code WNK77J.</p>
      </div>
      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 2a: </h3><p style={{"marginTop":"19px"}}>
        Berkeley students: Join the <a style={{"cursor":"pointer", "borderBottom":"1px solid #3e9ec3", "fontWeight":"600",}} target="_blank" href="https://edstem.org/us/join/sSTJwY">EdStem</a>.</p>
      </div>
      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 2b: </h3><p style={{"marginTop":"19px"}}>
        non-Berkeley students: Fill out <a style={{"cursor":"pointer", "borderBottom":"1px solid #3e9ec3", "fontWeight":"600",}} target="_blank" href="https://forms.gle/fQV6pXzRH3Kkkxsm9">this form</a> to be added manually to the EdStem.</p>
      </div>
      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 3: </h3><p style={{"marginTop":"19px"}}>
        Bookmark our <a style={{"cursor":"pointer", "borderBottom":"1px solid #3e9ec3", "fontWeight":"600",}} target="_blank" href="https://www.youtube.com/@cubstartbyhackathonsatberkeley">Youtube Channel</a> to keep up with lectures.</p>
      </div>
      
      <p>Got stuck? Ask us anything at <a href="mailto:team@cubstart.com" style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>team@cubstart.com</a></p>
      
    </div>
    </div>
  );
}

export default EnrollmentInfoPage;
