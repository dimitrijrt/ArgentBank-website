


export const signin = async ( email,password) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login",
    {
        body : JSON.stringify({email,password}),
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
    })
    return await response.json()
}

export const getUser = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile",
        {
            method: "post",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
    return await response.json()
}




export async function updateUser(token,userName) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "put",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            'Authorization': `Bearer ${token}`
            
        },
        body: JSON.stringify( {userName})
    });
    return await response.json();
}