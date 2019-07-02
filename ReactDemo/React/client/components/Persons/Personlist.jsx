import React from 'react';
import Person from './Person.jsx';


export default class PersonList extends React.Component {
  constructor() {
    super();   
  }
  render() {      
 
    return ( 
      <div className="row">
        {this.props.persons.map(item => {
            return <Person person={item} filter={this.props.filter} />
        })}
      </div>);
  }
}