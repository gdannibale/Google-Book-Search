import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/list/container"
import Column from "../components/list/column";
import Row from "../components/list/row";
import { Button } from "reactstrap";
// import { delete } from "../components/delete/index"


function MyBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.loadBooks()
        .then(res => {
            console.log(res)
            setBooks(res.data)

        }).catch(err => {
            console.log(err)
        })
    }

    function deleteBook(id) {
        console.log(id)
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));

    }
  

   

    return (
        <>
            <Container>
                <a href= "/" >Home</a>

                {books.length ? (
                    <div>
                        {books.map(data => {
                            return (
                                <div>

                                    <Row>
                                    </Row>
                                    <Row>

                                        <Column size="md-3">
                                            <h4>title: {data.title}</h4>
                                            <h4>Author: {data.author}</h4>
                                            <img src={data.image} />
                                        </Column>
                                        <Column size="md-6">
                                            <p>{data.description}</p>

                                        </Column>
                                        <Column size="md-2">
                                            <Button type="button" onClick={(e) => { window.location.href = data.link }}>View</Button>
                                            <Button onClick={() => deleteBook(data._id)}>Delete</Button>


                                        </Column>
                                    </Row>
                                </div>


                            )
                        })}
                    </div>
                ) : (
                        <h3 className="text-center">You currently don't have any books. Start searching! </h3>
                    )}
            </Container>

        </>
    )
}

export default MyBooks;