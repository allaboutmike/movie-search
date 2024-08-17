export type SearchResult = {
	data: Array<MovieSummary>,
	totalPages: number,
}

export type MovieSummary = {
	id: string,
	title: string,
	posterUrl: string,
	rating: string,
};

export type Movie = {
	id: string;
	title: string;
	posterUrl: string;
	summary: string;
	duration: string;
	directors: string[];
	mainActors: string[];
	genres: Genre[];
	datePublished: string;
	rating: string;
	ratingValue: number;
	bestRating: number;
	worstRating: number;
	writers: string[];
};

export type Genre = {
	id: string,
	title: string | null,
	movies: Movie[],
}

import axios from "axios";

const instance = axios.create({
	baseURL: "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com",
});

async function getAuthToken(): Promise<string> {
	const local_token = localStorage.getItem('token');
	if (!local_token) {
		const response = await instance.get("/auth/token");
		const token = response.data.token;
		localStorage.setItem('token', token);
		return token;
	}

	return local_token;
}

export async function search(title: string | undefined, genre: string | undefined = undefined, page: number): Promise<SearchResult> {
	const token = await getAuthToken();
	const searchParams = new URLSearchParams();
	if (title) { searchParams.append("search", title); }
	if (genre) { searchParams.append("genre", genre); }
	searchParams.append("page", page.toString());
	const response = await instance.get("/movies?"+searchParams.toString(), {headers: { Authorization: `Bearer ${token}`}});
	return response.data as SearchResult;
}

export async function getMovie(id: string): Promise<Movie> {
	const token = await getAuthToken();
	const response = await instance.get("/movies/" + id, {headers: { Authorization: `Bearer ${token}`}});
	return response.data as Movie;
}

export async function getGenre(id: string): Promise<Genre> {
	const token = await getAuthToken();
	const response = await instance.get("/movies/genres/" + id, {headers: { Authorization: `Bearer ${token}`}});
	return response.data as Genre;
}

export async function getGenres(): Promise<Array<Genre>> {
	const token = await getAuthToken();
	const response = await instance.get("/genres/movies", {headers: { Authorization: `Bearer ${token}`}});
	return response.data.data as Array<Genre>;
}
