import React,{useState,useEffect} from 'react';

function ApiCall() {
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
                loading: false,
                users: result
            })).catch(console.log);
        });
    }
}
return(
    
)

export default ApiCall;