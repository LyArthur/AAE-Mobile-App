import {ShowDetails} from "./components";

export const DetailsUtilisateur = ({route, navigation}) => {
    const id = route.params.userId;
    return (
        <ShowDetails id={id}/>
    )
}