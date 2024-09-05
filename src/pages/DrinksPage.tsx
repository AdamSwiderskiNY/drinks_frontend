import '../App.css'
import DrawerAppBar from '../atoms/Navbar.tsx';
import {useEffect, useState} from "react";
import {DrinkType} from "../service/Types.ts";
import {baseInstance} from "../service/Api.ts";
import DrinksService from "../service/DrinksService.ts";




export default function DrinksPage() {
    const [drinks, setDrinks] = useState<DrinkType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const data = await DrinksService(baseInstance).getAllDrinks();
                setDrinks(data);
            } catch (error) {
                setError('Failed to fetch drinks');
            } finally {
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <DrawerAppBar/>
            <div>Homepage</div>
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
