import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
    const [values, setValues] = useState({
        tweet: "",
        error: "",
        success: false,
    });

    const API = "http://localhost:8080/api";

    const fetchTweet = () => {
        return fetch(`/api/getTweet`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setValues({ ...values, tweet: data, success: true });
            })
            .catch((err) => {
                setValues({ ...values, error: err, success: false });
            });
    };

    useEffect(() => {
        fetchTweet();
    }, []);

    return (
        <div>
            <div className="title">
                <span className="container">Naval Ravikant Tweets</span>
            </div>
            <div className="content">
                <div>{values.tweet}</div>
            </div>
            <div className="footer">
                <div className="">
                    <a href="https://twitter.com/0900mihir">
                        Created By: Mihir Gupta
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
