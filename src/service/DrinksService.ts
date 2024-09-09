import { AxiosInstance } from 'axios';
import { baseInstance } from './Api';
import { DrinkType } from './Types';

const DrinksService = (api: AxiosInstance = baseInstance) => ({
    getAllDrinks: async () => {
        const response = await api.get('drink/alldrinks', {

        });
        return response.data;
    },
    getDrinksById: async (id: string) => {
        const response = await api.get(`/drink/${id}`, {
            
        });
        return response.data;
    },
    deleteDrinksById: async (id: number) => {
        await api.delete(`drink/${id}`);
    },
    updateDrinksById: async (id: number, drink: DrinkType) => {
        await api.put(`drink/${id}`, drink);
    },
    createDrinks: async (drink: Omit<DrinkType, 'id'>) => {
        await api.post('drink', drink);
    },
});

export default DrinksService;
