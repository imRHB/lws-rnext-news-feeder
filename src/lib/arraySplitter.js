export default function arraySplitter(originalArray) {
    // Create a copy of the original array
    const clonedArray = [...originalArray];

    // Find the first item with a non-null 'urlToImage' property
    let firstItem = clonedArray.find((item) => item.urlToImage !== null);
    let index = clonedArray.indexOf(firstItem);

    // If no such item is found or it's found at index 1, use the third item
    if (index === -1 || index === 1) {
        firstItem = clonedArray[2];
        index = 2;
    }

    // Remove the first item from the array copy
    clonedArray.splice(index, 1);

    // Calculate the number of elements for the second array
    const secondItemCount = Math.floor((clonedArray.length - 1) * 0.6);

    // Split the array into second and third arrays
    const secondArray = clonedArray.slice(1, 1 + secondItemCount);
    const thirdArray = clonedArray.slice(1 + secondItemCount);

    // Return the result
    return {
        firstItem,
        secondArray,
        thirdArray,
    };
}
