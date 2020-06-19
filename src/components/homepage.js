import React, {Component} from 'react';
import CustomParticle from './customparticle';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PDF from './WebResume.pdf';
import './style.css';

function Page(){
	return(
		<div id = "homepage">
			<CustomParticle/>

		    <div className = "pagecut headerdiv">
		        <h1>Matthew Panizza</h1>
                <h2>Software Developer | Game Developer | Fullstack Developer</h2>
                <div id="icondiv">
                	<a href="https://www.github.com/shrillharrier"><img className = "icons" src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
                	<a href="https://www.linkedin.com/in/matthew-panizza-b726a0191/"><img className = "icons" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAdrL///8Ab68Ac7AAca+DsNHt9PlQlcIAbK0AeLP7/v7K3uwIfLUAaawAcK8Aa63E2Ohyp8wshLna6PFDjr72+vw0ibysyd/f6fLQ4e200OOKtNN6q85noci81OYggLeYvdiTu9dinMZOlMIAZKro7/VwwblmAAAD4UlEQVR4nO3cbXeaMBiHcZMgjSgBRYu2+Dy//1eczlVm5b7rtjyUnP/v1c6ZPeU6QQgxdjAAAAAAAAAAAAAAAAAAAAAAAAAAAACwJDFaF1oaFfpA3FB6MK3H1XL19j4rTOijsU/pYylulo1MQh+RZWY0FnfSlyL0MVml1+JBHVOibh4DhSjjSZTTrsBzYh76yCxRs+5AId4juaTqiioU2yjujEnHVebDRoc+OhvyJV0YxSCqORModhG8E+WOK6wiOE31iisUMvTx/T+ZsoWz/r8RzYItPERfuO7/M8YXZ+lL/8dQc7fDKG6IcsMFZhHcLUznk9OHVQSFgxFXOIxgTjPQJR2YhT44K7iJ6S6CKc2ZrqnANIZ34QV5S5z3/1Zxpbbd85ppHOfoRdKZOI3lHL1Qo4e1msUxnhG8ULq5fzPW0S3rD4xsbs/Cp90orgH8zejk2Ox3w8NER9n3izJGJtGdngAA8N2pWB5PHiVSazXZzraTkZKFNnFt0lGmUOt6lV6fWLLF4jSum1mug80lRqR/eqUqtvuuj5WzzTSRQUbSpBlBHO8PyAwF8cLyNpNV+ZH+NCurtzpAI7Ou/2lNPxlSLyw/npb1nP+0Tmxm/h+sLRYqSa5qtXaF72G0Vyhnp68DhahGni851gq79o51yuZ+l9JtFRbk/z7ym2ipUL8/Hygyr5+e2ymkNscRUp+DaKWwIDfHkT/Rs8IfT11F/3Twd0G1Ubj5mzfhVepvQc9G4ZLf0dHJ36evNgr/xcLbBt1QhaLxNYjBCitfl9Nghd4264Qr9LWPPFzhytNpGq5QRD+GvvZ2OihMqyrNnnidp/06dguzsnk1xVk+WddfzXTKHhbuE31b+z3/k90m721LksXCavJpUDT7XQchHlZkv3lh+biKlryyP/Hq5VJjrbDz9mbYZ38/28htFS66xyPnloj9zGpsFQ67L4zs145qLxdTS4XkdTGnv/0nNn0q3FMHa5gVjrGX24WlQvJRiP6Oqq9vjtkpPNFrEpKe2iy9PF3YKWSuGczX49IeFTKLLvKN/KlFjwqZ2QkzO828rLfZKWR+ATet6c8YcivYyYEu7M/98MQMhnqhC/sz8+ZubOpIFzpuu7JSOGZON25m6rjtykphyY0h84zouO3KSiH39yXiKGTPUmZi6rjtyk4hN4WeoNAxFLZQSEGhayhsoZCCQtdQ2EIhBYWuobCFQgoKXUNhC4UUFLqGwhYKKSh0DYUtFFJQ6BoKWyikoNA1FLZQSEGhayhsxV9oelo4UKTPrzQ5hd9z//xvAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHs/ARGNSn50aHUhAAAAAElFTkSuQmCC"></img></a>
                	<a href={PDF} target="_blank"><img className = "icons" src = "data:image/png;base64,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"></img></a>
                </div>
	            <hr id = "buttonline"></hr>
		        <Button href = "#aboutpage" id="about">About Me</Button>
		    </div>

		    <CustomParticle/>
	    </div>
	)
}

export default Page;