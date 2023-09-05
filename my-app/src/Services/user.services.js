

export const signin = async ( email,password) => {
    const response = await fetch("localhost:3001/api/v1/user/login",
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