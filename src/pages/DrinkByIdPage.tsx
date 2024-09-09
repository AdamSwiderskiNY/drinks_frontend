import '../App.css'
import DrawerAppBar from '../atoms/Navbar.tsx';
import {useEffect, useState} from "react";
import {DrinkType} from "../service/Types.ts";
import DrinksService from "../service/DrinksService.ts";
import {baseInstance} from "../service/Api.ts";
import {useParams} from "react-router-dom";

export default function DrinkByIdPage() {
    const { id } = useParams<{ id: string }>();
    const [drinks, setDrinks] = useState<DrinkType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchDrinks = async (drinkId: string) => {
            try {
                const data = await DrinksService(baseInstance).getDrinksById(drinkId);
                setDrinks([data]);
            } catch (error) {
                setError('Failed to fetch drink');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDrinks(id);
        } else {
            setError('No ID provided in URL');
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <DrawerAppBar/>
            <div>DrinkById</div>
            <p>update with /update/(id)</p>
            <p>add with /create </p>
            <p>to see a single drink /drink/(id)</p>
            <ul>
                {drinks.map((drink) => (
                    <li key={drink.id}>
                        {drink.name}, Price{drink.price}, Drink ID: {drink.id}
                    </li>
                ))}
            </ul>
        </>
    );
}
