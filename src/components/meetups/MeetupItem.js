import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavoritesContext from '../../store/favorites-contex';

function MeetupItem(props){
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoritesStatusHandler(){
        console.log('clicked');
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address : props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={ toggleFavoritesStatusHandler }>
                        {itemIsFavorite ? 'Remove from Favorite' : 'Add to favorite'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;