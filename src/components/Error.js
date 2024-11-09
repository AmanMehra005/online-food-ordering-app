import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <h3>{err}</h3>
    )
}

export default Error;