export default function arraySplitter(originalArray) {
    const clonedArray = originalArray.slice();

    // Find the first item with a non-null 'urlToImage' property
    let firstItem = clonedArray.find((item) => item.urlToImage !== null);
    let index = clonedArray.indexOf(firstItem);

    // If no such item is found or it's found at index 1, use the third item
    if (index === -1 || index === 1) {
        firstItem = clonedArray[2];
        index = 2;
    }

    // Remove the first item from the array copy
    const removedItem = clonedArray.splice(index, 1)[0];

    // Calculate the number of elements for the second array
    let secondItemCount;
    if (clonedArray.length === 2) {
        secondItemCount = 1;
    } else {
        secondItemCount = Math.max(
            1,
            Math.floor((clonedArray.length - 1) * 0.7)
        );
    }

    // Split the array into second and third arrays
    const secondArray = clonedArray.slice(0, secondItemCount);
    const thirdArray = clonedArray.slice(secondItemCount);

    return {
        firstItem: removedItem,
        secondArray,
        thirdArray,
    };
}
