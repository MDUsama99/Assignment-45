function describe_city(city: string, country: string = "United State"): void {
    console.log(`${city} is in ${country}.`)
}

describe_city("Karachi", "Pakistan");
describe_city("Lahore", "India" );
describe_city("puerto Rico");