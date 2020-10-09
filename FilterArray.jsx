import React from 'react'
const people = [
    {name:"Souvick",eid:100},
    {name:"Sumon",eid:200},
    {name:"Raja",eid:300},
    {name:"Polash",eid:400}
];

class FilterArray extends React.Component{
    render(){
        return(
            
            <div><h1>Souvick Mondal head</h1>
                {
                    people.filter(person=>person.id<300).map(filteredPerson=>{
                    return(<li>{filteredPerson.name}</li>);
                    })
                }
            </div>
        );
    } 
}
export default FilterArray;