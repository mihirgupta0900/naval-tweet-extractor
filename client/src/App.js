import React, { useEffect, useState } from "react";
import "./style.css";
import loading from "./Assets/25.gif";

function App() {
    const [values, setValues] = useState({
        tweet: "",
        error: "",
        success: false,
        loading: true,
    });

    const fetchTweet = () => {
        setValues({ ...values, loading: true });
        fetch(`/api/getTweet`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setValues({
                    ...values,
                    tweet: data,
                    success: true,
                    loading: false,
                });
            })
            .catch((err) => {
                setValues({
                    ...values,
                    error: err,
                    success: false,
                    loading: false,
                });
            });
    };

    const loadingGif = () => {
        return <img src={loading} alt="" />;
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
                <div className="card">
                    {values.loading ? loadingGif() : <div>{values.tweet}</div>}
                </div>
            </div>
            <div className="refresh">
                <button onClick={fetchTweet}>New Tweet</button>
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
