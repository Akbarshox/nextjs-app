import useSWR from "swr";

export default function useUser (id) {
   const fetcher = url => fetch(url).then(r => r.json())
   const { data, error } = useSWR(`https://api.foodee.uz/restaurants/${id}`, fetcher)
   return {
      data: data,
      isLoading: !error && !data,
      isError: error
   }
}