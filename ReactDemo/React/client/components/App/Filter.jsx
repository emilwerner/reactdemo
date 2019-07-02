import React from 'react';


export default class Filter extends React.Component {
  constructor() {
    super();   
  }
  render() {  
    return (
        <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <input type="text" 
                         className="form-control" 
                         placeholder="Sök medarbetare" 
                         onChange={(event) => this.props.filterUpdated(event.target.value)} />           
                </div>
              </div>
        </div>);
  }
}