import React, { Component } from "react";
import "./Contacts.css";
import Contact from "./Contact";
import Search from "./Search";
import male from "./images/male.svg";
import female from "./images/female.svg";
import anonymous from "./images/anonymous.svg";

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "anonymous"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const genderImg = {
    male: male,
    female: female,
    anonymous: anonymous,
}

class Contacts extends Component {
    state = {
        contacts: contacts,
        filtered: contacts,
        search: "",
        "male-checkbox": true,
        "female-checkbox": true,
        "undefined-gender-checkbox": true,
    }

    filterContacts() {
        this.setState((prevState) => {
            return {
                filtered: prevState.contacts.filter((contact) => {
                    switch (contact.gender) {
                        case "male":
                            if (prevState["male-checkbox"]) return contact;
                            break;
                        case "female":
                            if (prevState["female-checkbox"]) return contact;
                            break;
                        default:
                            if (prevState["undefined-gender-checkbox"]) return contact;
                    }
                }).filter((contact) => {
                    return contact.lastName.toLowerCase().includes(prevState.search.toLowerCase()) ||
                        contact.firstName.toLowerCase().includes(prevState.search.toLowerCase()) ||
                        contact.phone.toLowerCase().includes(prevState.search.toLowerCase())
                })
            }
        });
    }

    searchChange = (event) => {
        this.setState({
            search: event.target.value
        });
        this.filterContacts();
    }

    toggleTick = (event) => {
        this.setState({
            [event.target.id]: event.target.checked
        });
        this.filterContacts();
    }

    render() {
        return(
            <div className="contacts-wrapper">
                <Search
                    search = { this.state.search }
                    searchChange = { this.searchChange }
                    toggleTick = { this.toggleTick }
                    genderImg = { genderImg }
                />
                <div className="contacts">
                    {this.state.filtered.map((contact, index) => (
                        <Contact
                            firstName = { contact.firstName }
                            lastName = { contact.lastName }
                            phone = { contact.phone }
                            gender = { genderImg[contact.gender] }
                            key = { index }
                        />
                    ))}
                </div>
            </div>
        )
    }

}

export default Contacts;