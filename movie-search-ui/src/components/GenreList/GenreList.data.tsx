import { useQuery } from "@tanstack/react-query";
import { Genre, getGenres } from "src/lib/movieApi";
import { GenreListView } from "./GenreList.view";

export function GenreList() {
	const { data, isLoading } = useQuery<Array<Genre>, Error>({queryKey: ["genres",], queryFn: async () => getGenres()});
	return <GenreListView genres={data ?? []} loading={isLoading} />
}
