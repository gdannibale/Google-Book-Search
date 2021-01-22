import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/list/container"
import Header from "../components/header/header"
import Column from "../components/list/column";
import Row from "../components/list/row";
import { Button } from "reactstrap";


function Books(props) {
    const [search, setSearch] = useState({ input: "" })
    const [resultArr, setResultArr] = useState([])

    function searchBooks(query) {
        // console.log(query)
        API.search(query.input)
            .then(res => {
                console.log(res.data)
                console.log(resultArr)
                setResultArr(res.data.items);
            }).catch(err => {
                console.log(err)
            })
    };

    function saveBook(event) {
        
        let bookID = event.target.getAttribute("id")
        API.searchById(bookID)
            .then(res => {
                console.log(res)
                API.saveBook({
                    title: res.data.volumeInfo.title,
                    author: res.data.volumeInfo.authors[0],
                    image: res.data.volumeInfo.imageLinks.thumbnail,
                    description: res.data.volumeInfo.description,
                    link: res.data.volumeInfo.infoLink
                })
            })
        

    }

    function handleInputChange(event) {
        const { value, name } = event.target
        setSearch({ [name]: value })
        console.log(search);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        searchBooks(search);

    }

    return (
        <Container>
            <Row>
                <Header />
                <input type="text" name="input" onChange={handleInputChange} className="form-control form-control-lg" placeholder="Search"></input>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-2">Search</button>
                <a href= "/saved" >Saved Books</a>
            </Row>
            {resultArr.map(data => {
                return (
                    <Row>
                        <Column size="md-3">
                            <h4>title: {data.volumeInfo.title}</h4>
                            <h6>Author: {data.volumeInfo.authors[0]}</h6>
                            <p>book ID: {data.id}</p>
                            <img src={data.volumeInfo.imageLinks.thumbnail} />
                        </Column>
                        <Column size="md-6">
                            <p>{data.volumeInfo.description}</p>
                        </Column>

                        <Column size="md-3">
                            <Button type="button" onClick={(e) => { window.location.href = data.volumeInfo.infoLink }}>View</Button>
                            <Button id={data.id} onClick={saveBook}>Save</Button>

                        </Column>
                    </Row>
                )
            })}
        </Container>
    )
}

export default Books;