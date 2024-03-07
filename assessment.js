// Create a variable to hold the number of NFTs
let totalNFTs = 0;
const NFTs = []

// Create a function to mint NFTs
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an object to hold metadata for the NFT
    const newNFT =
    {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    // Store the NFT in the variable
    NFTs.push(newNFT);
    console.log("Minted: " + name);
    totalNFTs++;
}

// Create a function to print details of all NFTs
function listNFTs() {
    // Check if there are any NFTs
    if (totalNFTs === 0) {
        console.log("No NFTs minted yet.");
        return;
    }

    console.log("Details of all NFTs:");
    for (let i = 1; i <= totalNFTs; i++) {
        let currentNFT = NFTs[i - 1];
        console.log(`NFT ${i}:`);
        console.log("Name: " + currentNFT.name);
        console.log("Eye Color: " + currentNFT.eyeColor);
        console.log("Shirt Type: " + currentNFT.shirtType);
        console.log("Bling: " + currentNFT.bling);
        console.log("--------------------");
    }
}

// Create a function to get the total number of NFTs
function getTotalSupply() {
    return totalNFTs;
}

// Example usage:
const myFirstNFT = mintNFT("Cool NFT", "Green", "T-shirt", "Diamond Necklace");
const mySecondNFT = mintNFT("Awesome NFT", "Blue", "Hoodie", "Gold Crown");

listNFTs();
console.log("Total NFTs created: " + getTotalSupply());
