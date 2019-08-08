import axios from 'axios';
import { resolve } from 'path';
import { rejects } from 'assert';
import { type } from 'os';
import React, { Component } from 'react';


class PostData {
    constructor(props) {
    let BaseUrl = 'http://localhost:4000/api/v2/auth/signin';
    return new Promise((resolve, reject) =>{
        fetch(BaseUrl+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
}
}

export default PostData;
