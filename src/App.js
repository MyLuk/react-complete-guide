import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { id: '1' ,name:'Misha', age:"28"},
        { id: '2' ,name:'Kolya', age:"48"},
        { id: '3' ,name:'Masha', age:"22"},
    ],
    showPersons: false
  };
  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons;
      // const persons = this.state.persons.splice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
  };

  switchNameHandler = (newName) => {
    console.log("Button was clicked");
    // this.state.persons[0].name = "Mikhail";
    this.setState(
        {
            persons: [
                { name:newName, age:"28"},
                { name:'Kolya', age:"48"},
                { name:'Masha', age:"23"},
            ]
        }
    )
  };

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p=>p.id===id);
      const person = {...this.state.persons[personIndex]};
      person.name=event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
  };
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

  render() {
    const style = {
        backgroundColor: 'withe',
        font: 'inherit',
        border: '1px solid green',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) =>
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)}
                    />
                )}
            </div>
        );
    }


    return (
      <div className="App">
        <h1>Hello, I'm react app</h1>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
