const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sum = 0;
let i = 0;


while (i < disneyData.length)
{
	let priceType = disneyData[i];
	for (let key in priceType)
	{
		if (key === "close")
		{
			sum += parseFloat(priceType[key]);
		}
	}
	i++;
}

let average = (sum / disneyData.length).toFixed(1);

console.log("Average closing price of Disney is ", average);
