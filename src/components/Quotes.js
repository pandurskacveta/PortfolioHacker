import axios from "axios";
import { useEffect, useState } from "react";

const Quotes = () => {
    // show the quote
    const [quote, setQuote] = useState("")
    // show the author of the quote
    const [author, setAuthor] = useState("")

    const quoteAPI = async() => {
        // creating the array for quotes
        let arrayOfQuotes = [];
        try {
            // grabing a random quote each time
            const data = await axios.get("https://api.quotable.io/random")
            arrayOfQuotes = data.data
        } catch (error) {
            console.log(error)
        }

        // catching an error, if there is one
        try {
            setQuote(arrayOfQuotes.content)
            setAuthor(arrayOfQuotes.author)
        } catch (error) {
            console.log(error);
        }
    }

    // running the function
    useEffect(() => {
        quoteAPI()
    }, [])

    return (

        <section className="QuotesSection" id="QuotesSection">
                    <h2>Random Quote Generator</h2>
                    <p>Since our personal and professional lives are so dynamic, it is normal for us to get stressed out sometimes and forget about our goals. This is why I created this Quote Generator using an API, in order to give us a little motivation to keep it pushing!</p>
            <div className="quoteBox">
                <div className="quoteContainer">
                    <div className="quote">
                       {quote}
                    </div>
                    <div className="author">
                       -{author}
                    </div>
                    <div className="quoteButton">
                        <button onClick={quoteAPI}><span>Gimme Quote!</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quotes