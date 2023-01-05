import React from 'react';
import Badge from "react-bootstrap/Badge";
import {marked} from 'marked';
import DOMPurify from "dompurify";

export default class App extends React.Component{
constructor(props) {
  super(props);
  this.state={
    markdown: 
    `# Welcome to My Markdown Previewer!
## freeCodeCamp Certificate Challenge!
---
This is **Bold** Text!
---
Challenge Link: [https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
---
This is how to write \`inline\` code!
\`\`\`
//Code Block!
let randomName = "Random";
const changeRandomName = (newName) => {
  randomName = newName;
};
changeRandomName("Not Random");
\`\`\`
---
- Bullet Points
* Can Be Done
- Three Ways
---
Blockquote Example:
> This is a blockquote
> Also part of a blockquote
Not A blockquote
---
![Random Picture](https://source.unsplash.com/random)`,
  };
}

createMarkdown(){
  const rawMarkup= DOMPurify.sanitize(marked(this.state.markdown));
  return { __html: rawMarkup };
}

render() {
    
    var inputStyle={
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
    };
    var outputStyle={
      width: "auto",
      height: "auto",
      marginLeft: "auto",
      backgroundColor: "#DCDCDC",
      marginRight: "auto",
      padding:"10px",
    };

    var BackgroundColor={backgroundColor: "lightBlue"}

    return(
      <div className="App" style={BackgroundColor}>
        <div className="container">
          <div className="row mt-6">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>


          <div className="row mt-4">
            <div className="col-md-4">
                {" "}
                <div className="col text-center">
                  <h4>
                    <Badge className="text-align-center" variant="secondary">
                      Editor
                    </Badge>
                  </h4>
                </div>
                <div className="input" style={inputStyle}>
                  <textarea 
                    className="input"
                    id="editor" 
                    style={inputStyle} 
                    value={this.state.markdown} 
                    onChange={(e) => {
                      let outputText =(e.target.value);

                      this.setState({
                        markdown: outputText
                      });
                    }}
                  >
                  </textarea>
                </div>
              </div>


            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={this.createMarkdown()}
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
