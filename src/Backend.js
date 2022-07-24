import { supabase } from "./Connection"

export const Categories = {
    getAll: async function () {
        const { data, error } = await supabase
            .from('categories')
            .select()
        return { data, error }
    }
}