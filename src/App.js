import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Editor extends React.Component {
  render() {
    return (
        <textarea className="h-100" value={this.props.value} onChange={this.props.onChange} /> 
    )
  }
}

class Previewer extends React.Component {
  render() {
    return (  
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.props.children} remarkPlugins={[remarkGfm]} />  
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {markdown: markdown};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }


  render(){
    return (
      <Container fluid style={{padding:"20px", height: "100%"}}>
        <Row className="h-90">
          <Col>
            <div className="card h-100">
              <div className="card-header">
                <h3>Markdown editor</h3>
              </div>
                <Editor className="card-body" value={this.state.markdown} onChange={this.handleChange} />
            </div>
          </Col>
          <Col>
            <div className="card h-100">
              <div className="card-header">
                <h3>Markdown previewer</h3>
              </div>
              <div className="card-body">
                <Previewer className="previewer" children={this.state.markdown} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
}
  }
  

export default App;

const markdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;