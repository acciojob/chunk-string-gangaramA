function stringChop(str, size) {
    // If the string is null or size is not a positive integer, return an empty array
    if (str === null || size <= 0) {
        return [];
    }

    // Initialize an empty array to hold the chunks
    let chunks = [];

    // Loop through the string and slice it into chunks of the specified size
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);  // Convert chunk size to integer
alert(stringChop(str, size).join(', '));  // Join chunks with ', ' for display
