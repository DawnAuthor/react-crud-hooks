import {useState, useEffect} from 'react';

const useAsyncRequest = howMany => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(`https://randomuser.me/api/?results=${howMany}`);
				const json = await response.json();
				setData(json.results, setLoading(false));
			} catch (err) {
				console.warn("Something went wrong fetching the data from the API...", err);
				setLoading(false);
			}
		}

		if (howMany) {
			fetchData(howMany);
		}
	}, [howMany]);

	return [data, loading];
}

export default useAsyncRequest;
