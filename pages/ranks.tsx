import Image from 'next/image';
import Head from 'next/head';
import Table, { Icolumn, Irow } from 'react-tailwind-table';

import { Tab, Tabs } from "@/components/basic/tabs";

import clans from "@/mock_data/games.json";
import players from "@/mock_data/players.json";

const ClanColumns = [
	{
		field: "rank",
		use: "Rank",
		use_in_search: false
	},
	{
	   field: "avatar",
	   use: "PFP",
	   use_in_search: false
	},
	{
		field: "name",
		use: "Clan"
	},
	{
		field: "power",
		use: "Power"
	}
];

const PlayerColumns = [
	{
		field: "rank",
		use: "Rank",
		use_in_search: false
	},
	{
		field: "avatar",
		use: "PFP",
		use_in_search: false
	},
	{
		field: "name",
		use: "Player"
	},
	{
		field: "power",
		use: "Power"
	}
];

const ShameColumns = [
	{
		field: "rank",
		use: "Rank",
		use_in_search: false
	},
	{
	   field: "avatar",
	   use: "PFP",
	   use_in_search: false
	},
	{
		field: "name",
		use: "Player"
	},
	{
		field: "hits",
		use: "Hits"
	}
];

const customTableStyles = {
	top: {
		elements: {
			main: "justify-stretch !mt-2",
			export: "hidden",
			search: "!w-full !bg-transparent !text-white"
		}
	},
	main: "rounded-lg !bg-dark border-2 rounded-lg",
	table_head: {
		table_row: "!bg-transparent text-white text-center",
		table_data: "border border-gray-500 first:border-l-0 last:border-r-0 bg-transparent !text-white text-center !px-0 uppercase font-bold"
	},
	table_body: {
		table_row: "bg-transparent rounded-[10px] px-8 py-[15px] odd:bg-gray-900",
		table_data: "text-white text-center border border-gray-500 first:border-l-0 last:border-r-0 !py-3"
	},
	footer: {
		main: "!justify-center space-x-6 !mt-4"
	}
}

const Ranks = () => {
	const renderRow = (_: Irow, col: Icolumn, displayRank: string) => {
		const rank = parseInt(displayRank)
		
		if ( col.field === "rank" ) {
			return (
				<div className="relative inline-block">
					<Image draggable="false"
						className="inline-block"
						src={"/images/ranks/" + (rank > 5 ? 'rank.gif' : 'rank' + displayRank +'.gif')}
						alt="rank"
						width={30}
						height={30}
					/>
					{ rank > 5 && <span className="absolute text-lg leading-[1] left-[50%] top-[50%] shadow-md translate-x-[-50%] translate-y-[-50%] font-extrabold">{ displayRank }</span>}
				</div>
			)
		}

		if ( col.field === "avatar" ) {
			return (
				<Image draggable="false"
					className="rounded-full inline-block"
					src={displayRank}
					alt="rank"
					width={30}
					height={30}
				/>
			)
		}

		return displayRank;
	}

	return (
		<>
			<Head>
				<title>Funzone | Ranks</title>
			</Head>

			<div className="my-auto">
				<Tabs className="w-1/2 mx-auto mb-2 divide-x divide-gray-500 mt-10">
					<Tab title="Top Players" active>
						<div className="w-1/2 mx-auto">
							<Table 
								per_page={5}
								striped={false}
								hovered={false}
								should_export={ false }
								columns={PlayerColumns}
								rows={players}
								styling={customTableStyles}
								row_render={ renderRow }
							/>
						</div>
					</Tab>
					<Tab title="Top Newbies">
						<div className="w-1/2 mx-auto">
						<Table 
							per_page={5}
							striped={false}
							hovered={false}
							should_export={ false }
							columns={PlayerColumns}
							rows={players}
							styling={customTableStyles}
							row_render={ renderRow }
						/>
						</div>
					</Tab>
					<Tab title="Hall of Shame">
						<div className="w-1/2 mx-auto">
							<Table 
								per_page={5}
								striped={false}
								hovered={false}
								should_export={ false }
								columns={ShameColumns}
								rows={players}
								styling={customTableStyles}
								row_render={ renderRow }
							/>
						</div>
					</Tab>
				</Tabs>
			</div>
		</>
	)
}

export default Ranks;