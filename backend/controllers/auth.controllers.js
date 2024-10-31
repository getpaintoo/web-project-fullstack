export const signup = (req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
    }catch (error) {}
    
};




export const login = (req, res) => {
    console.log("loginUser");
    res.send("Login Route");
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("Logout Route");
};




