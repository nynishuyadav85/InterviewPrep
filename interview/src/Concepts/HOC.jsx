


// function isAuth(Check) {
//     return function AuthComp(props) {
//         const isLoggedIn = true;

//         if (!isLoggedIn) return <p>User not loggedIn</p>

//         return <Check {...props} />
//     }
// }

// const HOC = () => {

//     function Dashboard({ userName }) {
//         return <h1>Welcome to the Dashboard, {userName}!</h1>;
//     }

//    const ProtecteddashBoard =  isAuth(Dashboard)
//     return (
//             <ProtecteddashBoard userName="Rahul" />;;
//     )
// }

// export default HOC
// -----------------------------------------------------------------
// custome hook ka example hai niche jo HOC ka alternative hai

function useAuth() {
    const isUserLoggedIn = true;
    return isUserLoggedIn;
}

function DashBoard({ userName }) {
    const isLoggedIn = useAuth()

    if (!isLoggedIn) {
        return <p>Login In</p>
    }

    return <p>Welcome To DashBoard, {userName}</p>
}


export default DashBoard