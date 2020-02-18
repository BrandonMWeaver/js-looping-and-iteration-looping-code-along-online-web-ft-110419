function writeCards(names, occasion) {
  thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}!`);
  }
  return thankYouMessages;
}
