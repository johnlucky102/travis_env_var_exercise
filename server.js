
const FA_IN = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
	  
    console.log(`${FA_IN} rock!`);
    await sleep(5000);
  }
}

main();
