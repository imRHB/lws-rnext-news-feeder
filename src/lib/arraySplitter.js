export default function arraySplitter(originalArray) {
    let firstItem = originalArray.find((item) => item.urlToImage !== null);
    let index = originalArray.indexOf(firstItem);

    if (index === -1) {
        // If image property is not found in the first or second item, use the third item
        firstItem = originalArray[2];
        index = 2;
    }

    originalArray.splice(index, 1);
    const secondItemCount = Math.floor(originalArray.length * 0.6);

    const secondArray = originalArray.slice(1, 1 + secondItemCount);
    const thirdArray = originalArray.slice(1 + secondItemCount);

    return {
        firstItem,
        secondArray,
        thirdArray,
    };
}
