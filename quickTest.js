// Import stylesheets
import './style.css';

let docs = [];

// There is the function to get data.
async function getData() {
  return await fetch('https://api.plos.org/search?q=title:DNA')
    .then((response) => response.json())
    .then((json) => {
      docs = json.response.docs;
    });
}
async function get() {
  await getData();
  console.log(docs);
  
}

async function firstExercise(){
  await getData();
  console.log(docs.filter((item) => item.article_type!="Research Article"));
}
//First exercise extra proint
async function filterDataByArticleType(type) {
  await getData();
  console.log(docs.filter((item) => item.article_type!=type));
}


async function secondExercise(){
  await getData();
  console.log(docs.filter((item) => item.score>"6.0"));
}
//Second exercise extra proint
async function printAuthorByScore(score) {
  await getData();
  console.log(docs.filter((item) => item.score> score));
}


async function thirdExercise(){
  await getData();
  let change=docs.find((item)=>item.id="10.1371/journal.pgen.1006605");
  change.article_type="Newspaper";
  console.log(change);
}

async function fourthdExercise(){
  await getData();
  let art1=docs.find((item)=>item.article_type=="Correction");
  let art2=docs.find((item)=>item.article_type== "Research Article");
  console.log(art1,art2);
}

async function fifthExcercise(){
  await getData();
  console.log(docs.map((item)=>item.journal));
}
//Fifth exercise extra proint
async function noRepeatPrintJournals() {
  await getData();
  let journals = docs.map((item) => item.journal);
  let onlyJournals = [...new Set(journals)];
  console.log(onlyJournals);
}


async function sixthExercise(){
  await getData();
  docs.map((item)=>{
    return delete item.eissn;
  });
  console.log(docs); 
}
//Sixth exercise extra proint
async function removeSelectedProperty(property) {
  await getData();
  let newDocs = docs.map(({ [property]: removedProperty, ...rest }) => {
    return rest;
  });
  console.log(newDocs);
}


async function seventhExercise(){
  await getData();
  let start=docs.findIndex(item=>item.id==="10.1371/journal.pone.0047101");
  let end=docs.findIndex(item=>item.id==="10.1371/journal.pgen.1000047");
  console.log(docs.slice(start,(end-start)));

}

async function eighthExercise(){
  await getData();
  let newDoc=[
    {
    "id":"10.1371/journal.pone.0177149",
    "journal":"Wall Street",
    "eissn":"1932-6203",
    "publication_date":"2017-05-03T00:00:00Z",
    "article_type":"Newspaper",
    "author_display":["Irina Bruck",
    "Nalini Dhingra",
    "Matthew P. Martinez",
    "Daniel L. Kaplan"],
    "abstract":["\nDpb11 is required for the initiation of DNA replication in budding yeast. We found that Dpb11 binds tightly to single-stranded DNA (ssDNA) or branched DNA structures, while its human homolog, TopBP1, binds tightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of  RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to  origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, wherein Dpb11-DNA interaction is required for some other function in DNA replication initiation, such as helicase activation.\n"],
    "title_display":"Dpb11 may function with RPA and DNA to initiate DNA replication",
    "score":7.018296},
    {
    "id":"10.1371/journal.pgen.1006699",
    "journal":"Wall Street",
    "eissn":"1553-7404",
    "publication_date":"2017-02-10T00:00:00Z",
    "article_type":"Newspaper",
    "author_display":["Concetta Cuozzo",
    "Antonio Porcellini",
    "Tiziana Angrisano",
    "Annalisa Morano",
    "Bongyong Lee",
    "Alba Di Pardo",
    "Samantha Messina",
    "Rodolfo Iuliano",
    "Alfredo Fusco",
    "Maria R. Santillo",
    "Mark T. Muller",
    "Lorenzo Chiariotti",
    "Max E. Gottesman",
    "Enrico V. Avvedimento"],
    "abstract":[""],
    "title_display":"Correction: DNA Damage, Homology-Directed Repair, and DNA Methylation", "score":7.018296}
    ]
  let updateDocs=newDoc.concat(docs);
  console.log(updateDocs);
}

async function ninthExercise(){
  await getData();
  let oddDocs= docs.filter((doc, i) => i % 2 !== 0);
 // console.log(oddDocs);

  let newDocs=oddDocs.map((item)=>{
    return{
    id: item.id,
    tittle: item.title_display+"-"+item.journal,
    score:item.score,
    article_type:item.article_type,
    authors:item.author_display.join("-")};
  });
  let sortDocs= newDocs.sort(function(a,b){
    if(a>b) return -1;
    if(a<b) return 1;
    return 0
  });
  //console.log(newDocs);
  console.log(sortDocs);
}



get();{}

firstExercise();{}
filterDataByArticleType();{}

secondExercise();{}
printAuthorByScore();{}

thirdExercise();{}
fourthdExercise();{}

fifthExcercise();{}
noRepeatPrintJournals();{}

sixthExercise();{}
removeSelectedProperty();{}

seventhExercise();{}
eighthExercise();{}
ninthExercise();{}
