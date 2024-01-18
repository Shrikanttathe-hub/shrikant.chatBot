import React,{useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./FetchingData.css";

const FetchingData = () => {
    const [data, setData] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        FetchingData(["harry potter", "sherlock holmes"]);
    }, []);
}

const fetcchData = async (queries) => {
    try{
        const requests = queries.map(query =>
        axios.get('https://www.googleapis.com/books/v1/volumes?q=${query}'));    
        const responses = await Promise.all
        (requests);
        const searchData = responses.flatMap
        (response => response.data.items || []);
        setData(searchData);
        setSelectedBook(null);// clear selected book when performing a new search
        }catch (error) {
            console.error('Error fetching data: ',
            error);
        }
    };

    const handleImageClick = (book) => {
        setSelectedBook(prevBook => (prevBook && prevBook.id === book.id) ? null : book);
    };

    //const handReadMore = (previewLink) => {

   // }

    const handleSearch = (query) => {
        // ensure the query is an array

        const queries = Array.isArray(query) ? query : [query];
        FetchData(queries);
    };

return (
        
        <div>
            <div className="navbar">
                <SearchBar onSearch={handleSearch}/>
            </div>
           <div className="topBooks">
            <div className="book1">
                <img src={require("../")} alt="heart"/>
                <div className="book1Des">
                 <h1>Title</h1>
                 <p>Description - lorem hbsdjhbjshbdjn jsdb sdhvbskvdbkb vsjadbvkjsbdvkab vkjasjdbvkasjbdvk vskjdbvksv vasdfavksjdfvbvj kjdsdfvkan ifvaj jkdfbvkajbv ajdfnlajdnfv aldfhboierog  ihe qdoqfhbh    oi ehrh eohe'</p>
                </div>
            </div>
           </div>
        </div>
    )
    