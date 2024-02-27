import {ShowDetails} from "./components";

export const DetailsUtilisateur = ({route}) => {
    const id = route.params.userId;
    return (
        <ShowDetails id={id}/>
    )
}