
//get data from local json file
export const getActivities = async () => {
    //added new Promise just to add delay to show scenario when data is loading
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //actual fetching of data from JSON file
    const response = await import("../data.json");
    return  response.default;
}
