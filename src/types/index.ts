export type INavLink = {
    route: string;
    label: string;
  };

  export type News = {
    id: string;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: string[];
    events: string[];
  }

  export type ISnapi = {
    count : number;
    next : string;
    previous : string;
    result: News[]

  }

  export type FiltersParams = {
    term?: string;
    page?: string;
  };

  export type NewsResponseWithParams = { response: ISnapi; params: FiltersParams };

export type HubbleImage = {
	photo_id: number;
	photo_title: string;
	photo_description: string;
	photo_url_m: {
		thumbnail: true;
		filename: string;
		format: string;
		width: number;
		mimetype: string;
		id: string;
		last_synchronized: string;
		height: number;
		url: string;
	};
	photo_date_taken: string;
	photo_height: number;
	photo_width: number;
	photo_license: string;
	album_id: number;
	album_name_tags: string;
	url: string;
	tags: null;
};

export type HubbleImagesResponse = {
	total_count: number;
	results: HubbleImage[];
};

export type HubbleImagesResponseWithParams = { response: HubbleImagesResponse; params: FiltersParams };

export type ApodType = {
	copyright: string;
	date: string;
	explanation: string;
	media_type: string;
	service_version: string;
	title: string;
	url: string;
};

export type WebbImage = {
	id: string;
	observation_id: string;
	program: number;
	details: {
		mission: string;
		instruments: [
			{
				instrument: string;
			},
			{
				instrument: string;
			},
			{
				instrument: string;
			},
			{
				instrument: string;
			},
			{
				instrument: string;
			}
		];
		suffix: string;
		description: string;
	};
	file_type: string;
	thumbnail: string;
	location: string;
};

export type WebbImagesResponse = {
	status_code: number;
	body: WebbImage[];
	error: string;
};

export type WebbNewsAndImagery = {
	news: News[] | null;
	imagery: WebbImage[] | null;
};

export type Rocket = {
	id: number;
	active: boolean;
	stages: number;
	boosters: number;
	cost_per_launch: number;
	success_rate_pct: number;
	first_flight: string;
	country: string;
	company: string;
	height: {
		meters: number;
		feet: number;
	};
	diameter: {
		meters: number;
		feet: number;
	};
	mass: {
		kg: number;
		lb: number;
	};
	payload_weights: [
		{
			id: string;
			name: string;
			kg: number;
			lb: number;
		},
		{
			id: string;
			name: string;
			kg: number;
			lb: number;
		},
		{
			id: string;
			name: string;
			kg: number;
			lb: number;
		}
	];
	first_stage: {
		reusable: boolean;
		engines: number;
		fuel_amount_tons: number;
		burn_time_sec: null;
		thrust_sea_level: {
			kN: number;
			lbf: number;
		};
		thrust_vacuum: {
			kN: number;
			lbf: number;
		};
	};
	second_stage: {
		reusable: boolean;
		engines: number;
		fuel_amount_tons: number;
		burn_time_sec: null;
		thrust: {
			kN: number;
			lbf: number;
		};
		payloads: {
			option_1: string;
			option_2: string;
			composite_fairing: {
				height: {
					meters: null;
					feet: null;
				};
				diameter: {
					meters: null;
					feet: null;
				};
			};
		};
	};
	engines: {
		number: number;
		type: string;
		version: string;
		layout: null;
		isp: {
			sea_level: number;
			vacuum: number;
		};
		engine_loss_max: null;
		propellant_1: string;
		propellant_2: string;
		thrust_sea_level: {
			kN: number;
			lbf: number;
		};
		thrust_vacuum: {
			kN: number;
			lbf: number;
		};
		thrust_to_weight: number;
	};
	landing_legs: {
		number: number;
		material: string;
	};
	flickr_images: string[];
	wikipedia: string;
	description: string;
	rocket_id: string;
	rocket_name: string;
	rocket_type: string;
};

export type SpaceXNewsAndRockets = {
	news: News[] | null;
	rockets: (Rocket | null)[] | null;
};

export type LandingPageNewsApodHubbles = {
	news: News[] | null;
	apod: ApodType | null;
	hubbles: HubbleImage[] | null;
};