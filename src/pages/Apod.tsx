import { Title } from "@/components";
import ApodPlayer from "@/components/shared/ApodPlayer";
import { nasaCustomFetch } from "@/lib/axios/api";
import { numberToDate } from "@/lib/utils";
import { ApodType } from "@/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"

export default function Apod() {
  const defaultApod = useLoaderData();
	const [data, setData] = useState<ApodType>(defaultApod);
	const [day, setDay] = useState<number>(0);
	const [isLoading, setLoading] = useState<boolean>(false);

	const fetchApod = async (day: number): Promise<void | null> => {
		setLoading(true);
		try {
			const params = { date: numberToDate(day) };
			const response = await nasaCustomFetch.get<ApodType>("", { params });
			setData(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			return null;
		}
	};

	useEffect(() => {
		fetchApod(day);
	}, [day]);

	return (
		<section className="section">
			<Title title="NASA's astronomy picture of the day" />
			<ApodPlayer apods={data} day={day} setDay={setDay} isLoading={isLoading}/>
		</section>
	);
};
