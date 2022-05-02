const getcountries=()=>{
    const j = new XMLHttpRequest();
    j.open("GET","https://restcountries.com/v3.1/all");
    j.send();
    j.responseType ="json";
    j.onload=()=>{
        const countries=j.response;
//1) Get all the countries from Asia continent /region using Filter function
        var asiancountries = countries.filter((n)=>n.region=="Asia");              //filters asian countries alone
       console.log(asiancountries);

//2)  Get all the countries with a population of less than 2 lakhs using Filter function
       var populationlessthan2L = countries.filter((m)=>m.population<2_00_000);      // filters population less than 2lakhs alone 
       console.log(populationlessthan2L);

//3)   Print the following details name, capital, flag using forEach function
       countries.forEach(a=>console.log(`Country : ${a.name.common},Capital : ${a.capital},flag: ${a.flag}`)); //returns all countries name,capital and flag

//4)   Print the total population of countries using reduce function
      var totalpopulation = countries.map((x)=>x.population).reduce((sum,i)=>sum+i,0);//maps population in a array and sums by reduce method
       console.log(totalpopulation);

//5)   Print the country which uses US Dollars as currency.
       var USdollarusingcountries = countries.filter((z)=>z.currencies=="USD")
        console.log(USdollarusingcountries);//Prints the countries using dollars
           

    };
};
getcountries();



