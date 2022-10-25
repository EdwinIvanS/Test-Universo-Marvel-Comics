export const ServiceFetchAllCharacters = () => {
    return fetch(`http://localhost:3001/api/allCharacters`)       
	.then(response => response.json())
}