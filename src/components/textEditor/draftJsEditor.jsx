import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

export class draftJsEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };
  onChange = editorState => {
    this.setState({ editorState });
  };
  setEditor = editor => {
    this.editor = editor;
  };
  focusEditor = () => {
    if (this.editor) {
      this.editor.focus();
    }
  };
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handeled";
    }
    return "not handled";
  }
  _onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };
  componentDidMount() {
    this.focusEditor();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Draft.js Editor</h1>
        <button className="btn" onClick={this._onBoldClick}>
          B
        </button>
        <button className="btn" onClick={this._onBoldClick}>
          Z
        </button>
        <div className="my-editor">
          <Editor
            ref={this.setEditor}
            handleKeyCommand={this.handleKeyCommand}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default draftJsEditor;
