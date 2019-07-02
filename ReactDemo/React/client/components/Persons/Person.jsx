import React from 'react';


export default class Person extends React.Component {
  constructor() {
    super();   
    this.decorateName = this.decorateName.bind(this);

    var apiCall = new XMLHttpRequest()

  }
  render() {  
    return (

      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
            <img src={this.props.person.ip_address} alt />
            <div className="caption">                
                {this.decorateName()}
                <p>
                    Nullam accumsan lorem in dui. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce vel dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.
                    Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. 
                </p>

                <p><span className="glyphicon glyphicon-envelope"></span> <a href={"mailto:" +this.props.person.email}>{this.props.person.email} </a></p> 
            </div>
        </div>
      </div>);
  }

  decorateName() {
    const name = this.props.person.first_name +" "+ this.props.person.last_name
    if(!this.props.filter) {
      return <h3>{name}</h3>;
    }
    const filterLength = this.props.filter.length;
    const filterStart = name.toLowerCase().indexOf(this.props.filter.toLowerCase());

    return <h3>
      {name.substring(0, filterStart)}
      <span className="filterhit">{name.substring(filterStart, filterStart + filterLength)}</span>
      {name.substring(filterStart+filterLength)}
    </h3>;
  }
}

