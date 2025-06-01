const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

sum = 0;

for (let i = 0; i < msftData.length; i++)
{
	arrayNo = msftData[i];
	sum += arrayNo[3];
}

averageClosingPrice = sum / msftData.length;
console.log("Average closing price of MSFT is ", averageClosingPrice.toFixed(2));
