const persons=[
    new Person ("juan","perez"),
    new Person ("maria","fernandez")
]

function ShowPersons(){
    let text=""
    for(let person of persons){
        console.log(person);
        text +=`<li>${person.name} ${person.surname}</li>`;
    }
    document.getElementById('persons').innerHTML=text;
}

function AddPerson(){
    const form=document.getElementById('form');
    const name=form['name'];
    const surname=form['surname'];
    if(name.value!="" && surname.value!=""){
        const person = new Person(name.value, surname.value);
        persons.push(person);
        ShowPersons()
    }
    
}