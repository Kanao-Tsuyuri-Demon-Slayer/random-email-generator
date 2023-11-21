function generateEmail() {
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    const emailDomain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com']; // Add more domains as needed
    const randomDomain = emailDomain[Math.floor(Math.random() * emailDomain.length)]; // Choose a random domain

    const randomEmail = `${randomString}@${randomDomain}`;
    document.getElementById('output').value = randomEmail;
}
