const articles = document.querySelectorAll(".article");
const gradients = [
  "linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF)",
  "linear-gradient( 104.9deg,  rgba(255,95,162,1) 2.3%, rgba(254,201,154,1) 92.7% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(137,210,253,1) 0%, rgba(255,241,188,1) 90% )",
];

let count = 0;

for (article of articles) {
  // let gradientIndex = Math.floor(Math.random() * 3);
  let gradientIndex = count % 3;
  article.style.background = gradients[gradientIndex];
  count++;
};