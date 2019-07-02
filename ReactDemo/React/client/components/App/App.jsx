import React from 'react';
import CoworkerService from '../../services/CoworkerService';
import PersonList from '../Persons/Personlist.jsx';
import Filter from './Filter.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.coworkerService = new CoworkerService();
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = { 
      filteredPersons: this.coworkerService.getFilteredCoworkers(),
      filter: ""
    };
  }
  
  render() {
    return (
      <div className="container">
        <Filter filterUpdated={this.handleFilterChange} />
        <PersonList persons={this.state.filteredPersons} filter={this.state.filter} />
      </div>);
  }

  handleFilterChange(value) {
    this.setState({ filteredPersons: this.coworkerService.getFilteredCoworkers(value), filter: value });
  }
}