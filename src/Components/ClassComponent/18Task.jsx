import React, { Component } from 'react'

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            items: [
                { id: 1, name: 'Sachin' },
                { id: 2, name: 'Dashrath' },
                { id: 3, name: 'Prakash' },
                { id: 4, name: 'Hardik' },
                { id: 5, name: 'Krunal' },
                { id: 6, name: 'Kaushal' },
                { id: 7, name: 'Harshad' },
                { id: 8, name: 'Vishal' },
            ],
            filteredItems: [],
        };
    }

    handleSearchInputChange = (event) => {
        const { value } = event.target;
        this.setState({ searchInput: value }, () => {
            this.filteredItems();
        })
    }

    filteredItems = () => {
        const { searchInput, items } = this.state
        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        this.setState({ filteredItems })
    }
    render() {
        const { searchInput, filteredItems } = this.state
        return (
            <div>
                <input type='text' value={searchInput} onChange={this.handleSearchInputChange} placeholder='Search items' />
                <ul>
                    {filteredItems.map((item) => (<li key={item.id} > {item.name} </li>))}
                </ul>
            </div>
        );
    }
}

export default SearchFilter;